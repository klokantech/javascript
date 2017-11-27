/**
 * Copyright (C) 2016 Klokan Technologies GmbH (info@klokantech.com)
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.
 *
 * USE OF THIS CODE OR ANY PART OF IT IN A NONFREE SOFTWARE IS NOT ALLOWED
 * WITHOUT PRIOR WRITTEN PERMISSION FROM KLOKAN TECHNOLOGIES GMBH.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 */


/**
 * @author petr.sloup@klokantech.com (Petr Sloup)
 * @fileoverview
 * @suppress {missingRequire}
 */
goog.provide('kt.CustomMapsControl');

goog.require('goog.Uri');
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.cookies');
goog.require('goog.string');
goog.require('goog.style');
goog.require('kt.VectorMap');
goog.require('kt.alert');
goog.require('kt.listprompt');

/*
Needed requires if compiling together with OL3:

//goog.require('ol.Collection');
//goog.require('ol.format.WMSCapabilities');
//goog.require('ol.layer.Tile');
//goog.require('ol.proj');
//goog.require('ol.source.BingMaps');
//goog.require('ol.source.OSM');
//goog.require('ol.source.TileJSON');
//goog.require('ol.source.TileWMS');
//goog.require('ol.source.XYZ');
*/



/**
 * Control for adding/removing/selecting custom base maps.
 * @param {!ol.Map} map
 * @param {{
 *    root: (Element|string|undefined),
 *    thumbs: (Element|string|undefined),
 *    vectorMap: (Element|string|undefined),
 *    input: (Element|string|undefined),
 *    type: (Element|string|undefined),
 *    addBtn: (Element|string|undefined),
 *    control: (Element|string|undefined)
 * }|string=} opt_elements
 * @param {!Array.<string>=} opt_defaults
 * @constructor
 */
kt.CustomMapsControl = function(map, opt_elements, opt_defaults) {
  var elements = opt_elements || {};

  var prefix = '';
  if (goog.isString(elements)) {
    prefix = elements;
    elements = {};
  }
  elements.control = elements.control || (prefix + 'customMaps-control');
  elements.root = elements.root || (prefix + 'customMaps');
  elements.thumbs = elements.thumbs || (prefix + 'customMaps-thumbs');
  elements.vectorMap = elements.vectorMap || (prefix + 'customMaps-vector');
  elements.input = elements.input || (prefix + 'customMaps-input');
  elements.type = elements.type || (prefix + 'customMaps-type');
  elements.addBtn = elements.addBtn || (prefix + 'customMaps-addbtn');

  /**
   * @type {!ol.Map}
   * @private
   */
  this.map_ = map;

  this.map_.on('change:size', function() {
    if (this.gmapWrap_) {
      google.maps.event.trigger(this.gmapWrap_, 'resize');
      var v = this.map_.getView();
      if (v) {
        var center = ol.proj.transform(v.getCenter() || null,
                                       v.getProjection(), 'EPSG:4326');
        this.gmapWrap_.setCenter(new google.maps.LatLng(center[1], center[0]));
      }
    }
  }, this);

  /**
   * @type {!Element}
   * @private
   */
  this.mapElement_ = /** @type {!Element} */
                     (goog.dom.getElement(map.getTarget() || null));

  /**
   * @type {?Element}
   * @private
   */
  this.controlElement_ = goog.dom.getElement(elements.control);

  if (this.controlElement_) {
    goog.events.listen(this.controlElement_, goog.events.EventType.CLICK,
        function(e) {
          this.show(true);
          e.preventDefault();
        }, false, this);
  }
  var defaults = opt_defaults ||
      ((this.controlElement_ ?
      this.controlElement_.getAttribute('data-defaults') : null) || 'osm')
      .split(';');

  kt.CustomMapsControl.GMAPS_INSTALLED = kt.CustomMapsControl.GMAPS_INSTALLED ||
      !!(goog.global['google'] && google.maps);

  /**
   * @type {?google.maps.Map}
   * @private
   */
  this.gmapWrap_ = null;

  /**
   * @type {?kt.VectorMap}
   * @private
   */
  this.vectorMap_ = null;

  /**
   * @type {!Array.<ol.EventsKey|Array.<ol.EventsKey>>}
   * @private
   */
  this.gmapWrapListenKeys_ = [];

  /**
   * @type {!Element}
   * @private
   */
  this.root_ = /** @type {!Element} */(goog.dom.getElement(elements.root));

  /**
   * @type {!Element}
   * @private
   */
  this.thumbs_ = /** @type {!Element} */(goog.dom.getElement(elements.thumbs));

  /**
   * @type {?Element}
   * @private
   */
  this.vectorMapEl_ = goog.dom.getElement(elements.vectorMap);

  goog.events.listen(this.root_, goog.events.EventType.CLICK, function(e) {
    if (e.target == this.root_) {
      this.show(false);
      e.stopPropagation();
    }
  }, false, this);

  var inputEl = goog.dom.getElement(elements.input);
  var typeEl = goog.dom.getElement(elements.type);
  var addBtn = goog.dom.getElement(elements.addBtn);
  if (inputEl && typeEl && addBtn) {
    goog.events.listen(inputEl, goog.events.EventType.INPUT, function(e) {
      var value = inputEl.value.toString();
      if (/\.json[p]?(\?.*)?$/.test(value)) {
        typeEl.value = 'tilejson';
      } else if (value.indexOf('{z}') > 0 && value.indexOf('{x}') > 0 &&
                 (value.indexOf('{y}') > 0 || value.indexOf('{-y}') > 0)) {
        typeEl.value = 'zxy';
      } else if (value.toLowerCase().indexOf('wms') !== 0) {
        typeEl.value = 'wms';
      }
    }, false, this);

    goog.events.listen(addBtn, goog.events.EventType.CLICK, function(e) {
      if (inputEl.value.length) {
        this.add_(
            typeEl.value + ':' + inputEl.value, undefined, undefined, true);
        inputEl.value = '';
        this.render_();
      }
    }, false, this);
  }

  /**
   * @type {!Array.<!kt.CustomMapsControl.Layer_>}
   * @private
   */
  this.layers_ = [];

  /**
   * @type {?kt.CustomMapsControl.Layer_}
   * @private
   */
  this.activeLayer_ = null;

  goog.array.forEach(defaults, function(url) {
    this.add_(url, true);
  }, this);

  this.load_();

  this.useLayer_(this.layers_[0]);

  /**
   * @type {?kt.CustomMapsControl.Layer_}
   * @private
   */
  this.activeLayerBeforeDisabled_ = null;
};


/**
 * @type {boolean} Google maps installed (or loading).
 */
kt.CustomMapsControl.GMAPS_INSTALLED = false;


/**
 * @define {string} Google maps key to use.
 */
kt.CustomMapsControl.GOOGLEMAPS_KEY = '';


/**
 * @define {string} Bing key to use.
 */
kt.CustomMapsControl.BING_KEY = '';


/**
 * @define {string} Domain for the cookies.
 */
kt.CustomMapsControl.COOKIE_DOMAIN = '';


/**
 * @define {boolean} Whether ol.source.TileJSON supports autoscaling.
 */
kt.CustomMapsControl.TILEJSON_AUTOSCALE = false;


/**
 * @typedef {{
 *            bounds: ol.Extent,
 *            color: string,
 *            isDefault: boolean,
 *            name: string,
 *            previewUrl: ?string,
 *            source: ol.source.TileImage,
 *            type: string,
 *            url: string
 *          }}
 */
kt.CustomMapsControl.Layer_;


/**
 * @param {?kt.CustomMapsControl.Layer_} layer
 * @private
 */
kt.CustomMapsControl.prototype.useLayer_ = function(layer) {
  this.activeLayer_ = layer;

  var layers = this.map_.getLayers();

  if (this.gmapWrap_) {
    // clear old google map and restore everything
    google.maps.event.clearInstanceListeners(this.gmapWrap_);
    goog.array.forEach(this.gmapWrapListenKeys_, function(key) {
      ol.Observable.unByKey(key);
    });
    this.gmapWrapListenKeys_ = [];
    goog.dom.removeChildren(this.mapElement_);
    this.map_.setTarget(this.mapElement_);
    delete this.gmapWrap_;
  } else if (this.vectorMap_) {
    this.vectorMap_.destroy();
    delete this.vectorMap_;
  } else {
    if (layers.getLength() > 0) {
      layers.removeAt(0);
    }
  }
  this.mapElement_.style.backgroundColor = '';

  if (layer) {
    if (layer.type == 'gmaps') {
      var olTarget = goog.dom.createDom('div',
                                        {'style': 'width:100%;height:100%'});
      this.map_.setTarget(olTarget);

      goog.dom.removeChildren(this.mapElement_);
      var gmap = new google.maps.Map(this.mapElement_, {
        disableDefaultUI: true,
        keyboardShortcuts: false,
        draggable: false,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        streetViewControl: false,
        tilt: 0,
        mapTypeId: layer.url.split('|')[0]
      });
      this.gmapWrap_ = gmap;
      gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(olTarget);

      var v = this.map_.getView();
      if (v) {
        var syncCenter = function() {
          var center = ol.proj.transform(v.getCenter() || null,
                                         v.getProjection(), 'EPSG:4326');
          gmap.setCenter(new google.maps.LatLng(center[1], center[0]));
        };
        var syncRes = function() {gmap.setZoom(v.getZoom() || 0);};
        var syncRot = function() {v.setRotation(0);};
        this.gmapWrapListenKeys_.push(v.on('change:center', syncCenter));
        this.gmapWrapListenKeys_.push(v.on('change:resolution', syncRes));
        this.gmapWrapListenKeys_.push(v.on('change:rotation', syncRot));
        syncCenter();
        syncRes();
        syncRot();
      }

      google.maps.event.addListenerOnce(gmap, 'idle', goog.bind(function() {
        google.maps.event.trigger(gmap, 'resize');
        this.map_.updateSize();
      }, this));
    } else if (layer.type == 'vector' &&
               this.vectorMapEl_ && layer.url.indexOf('|') > 0) {
      var parts = layer.url.split('|');
      this.vectorMap_ = new kt.VectorMap(
          parts[0], parts[1], this.map_, this.vectorMapEl_);
    } else {

      var bnds = layer.bounds;
      if (bnds && this.map_) {
        var view = this.map_.getView();
        var size = this.map_.getSize();
        if (view && size) {
          var trans = ol.proj.getTransform('EPSG:4326', view.getProjection());
          var ext = ol.extent.applyTransform(bnds, trans);
          var center = view.getCenter();
          if (center) {
            center = ol.proj.transform(
                center, view.getProjection(), 'EPSG:4326');
            center[0] = goog.math.modulo(center[0] + 180, 360) - 180;
            center = ol.proj.transform(
                center, 'EPSG:4326', view.getProjection());
            if (!ol.extent.containsCoordinate(ext, center) ||
                ol.extent.containsExtent(view.calculateExtent(size), ext)) {
              view.fit(ext, size); // only zoom in
            }
          }
        }
      }

      layers.insertAt(0, new ol.layer.Tile(
          /** @type {olx.layer.TileOptions} */({source: layer.source})));
    }
    this.mapElement_.style.backgroundColor = layer.color;
  }

  this.map_.updateSize();
};


/**
 * @private
 */
kt.CustomMapsControl.prototype.load_ = function() {
  try {
    var data = JSON.parse(goog.net.cookies.get('custom_maps') || '[]');
    goog.array.forEach(/** @type {!Array} */(data), function(url) {
      this.add_(url, false, true);
    }, this);
  } catch (e) {
  }
};


/**
 * @private
 */
kt.CustomMapsControl.prototype.save_ = function() {
  var data = [];
  goog.array.forEach(this.layers_, function(layer) {
    if (!layer.isDefault) {
      data.push(layer.type + ':' + layer.url);
    }
  });
  var domain = (goog.DEBUG || !kt.CustomMapsControl.COOKIE_DOMAIN.length) ?
      null : kt.CustomMapsControl.COOKIE_DOMAIN;
  goog.net.cookies.set('custom_maps', JSON.stringify(data),
                       5 * 365 * 24 * 60 * 60, '/', domain);
};


/**
 * @param {string} url
 * @param {boolean=} opt_default
 * @param {boolean=} opt_dontSave
 * @param {boolean=} opt_rerenderWhenLoaded
 * @private
 * @suppress {accessControls}
 */
kt.CustomMapsControl.prototype.add_ =
    function(url, opt_default, opt_dontSave, opt_rerenderWhenLoaded) {
  if (!url || !url.length) {
    return;
  }

  var type = url.split(':')[0];
  var rawUrl = url.split(':').slice(1).join(':');

  var layer = /** @type {kt.CustomMapsControl.Layer_} */({
    bounds: null,
    color: '',
    type: type,
    url: rawUrl,
    name: rawUrl,
    isDefault: !!opt_default,
    minZoom: 0,
    previewUrl: null,
    source: null
  });

  if (type == 'osm') {
    layer.name = 'Open Street Map';
    layer.source = new ol.source.OSM();
    this.updatePreviewUrl_(layer);
  } else if (type == 'zxy') {
    if (layer.url.indexOf('{z}') > 0 && layer.url.indexOf('{x}') > 0 &&
        (layer.url.indexOf('{y}') > 0 || layer.url.indexOf('{-y}') > 0)) {
      layer.name = 'Custom XYZ';
      layer.source = new ol.source.XYZ({
        url: layer.url
      });
      this.updatePreviewUrl_(layer);
    } else {
      return;
    }
  } else if (type == 'bing') {
    var variant = layer.url.split('|')[0];
    var key = layer.url.split('|').slice(1).join('|');
    var name = variant;
    layer.name = 'Bing - ' + name;
    layer.source = new ol.source.BingMaps({
      key: key || goog.global['BING_KEY'] || kt.CustomMapsControl.BING_KEY,
      imagerySet: variant,
      // use maxZoom 19 to see stretched tiles instead of the BingMaps
      // "no photos at this zoom level" tiles
      maxZoom: 19
    });

    var listenKey = layer.source.on('change', function(e) {
      if (layer.source.getState() == 'ready') {
        ol.Observable.unByKey(listenKey);

        this.updatePreviewUrl_(layer);

        if (opt_rerenderWhenLoaded) {
          this.render_();
        }
      }
    }, this);

    this.updatePreviewUrl_(layer);
  } else if (type == 'gmaps') {
    var variant = layer.url.split('|')[0];
    var key = layer.url.split('|').slice(1).join('|');
    var name = goog.string.capitalize(variant);
    if (variant == 'hybrid') {
      name = 'Satellite';
    }
    layer.name = 'Google Maps - ' + name;
    if (!kt.CustomMapsControl.GMAPS_INSTALLED) {
      if (key) {
        var uv = document.createElement('script');
        uv.type = 'text/javascript';
        uv.src = 'https://maps.google.com/maps/api/js?v=3.27&key=' + key;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(uv, s);
        kt.CustomMapsControl.GMAPS_INSTALLED = true;
      } else {
        return;
      }
    }
    key = key ||
          goog.global['GOOGLEMAPS_KEY'] ||
          kt.CustomMapsControl.GOOGLEMAPS_KEY;
    if (key) {
      layer.previewUrl = 'https://maps.googleapis.com/maps/api/staticmap?' +
          'size=512x512&zoom=1&maptype=' + variant;
      layer.previewUrl += '&key=' + key;
    }
  } else if (type == 'tilejson' || type == 'vector') {
    var parts = layer.url.split('|');
    var url_ = parts[0];
    var autoscale = false &&
                    kt.CustomMapsControl.TILEJSON_AUTOSCALE &&
                    window.devicePixelRatio > 1 &&
                    goog.array.contains(parts, 'autoscale');
    if (type == 'vector') {
      if (parts.length != 2) {
        return;
      }
      url_ = parts[1];
    }
    layer.source = new ol.source.TileJSON({
                     url: url_,
                     crossOrigin: '',
                     jsonp: /\.jsonp(\?.*)?$/.test(url_)
                     // tilePixelRatio: autoscale ? 2 : 1
                     // TODO: this option does not exist
                   });

    var listenKey = layer.source.on('change', function(e) {
      if (layer.source.getState() == 'ready') {
        ol.Observable.unByKey(listenKey);
        var tileJSON =
            /** @type {ol.source.TileJSON} */(layer.source).getTileJSON();
        if (tileJSON) {
          var bounds = tileJSON['bounds'];
          if (bounds) {
            layer.bounds = bounds;
          }
          var color = tileJSON['color'];
          if (color) {
            layer.color = color;
          }
          var name = tileJSON['name'];
          if (name) {
            layer.name = name;
          }
          if (autoscale) {
            var originalFunction = layer.source.getTileUrlFunction();
            layer.source.setTileUrlFunction(
                function(tilecoord, pixelRatio, proj) {
                  var tileUrl = originalFunction(tilecoord, pixelRatio, proj);
                  if (tileUrl && (tileUrl.indexOf('@2x') == -1)) {
                    tileUrl = tileUrl
                    .replace('.png', '@2x.png')
                    .replace('.jpg', '@2x.jpg');
                  }
                  return tileUrl;
                });
          }
        }

        this.updatePreviewUrl_(layer);

        if (opt_rerenderWhenLoaded) {
          this.render_();
        }
      }
    }, this);
  } else if (type == 'wms') {
    var uri = new goog.Uri(layer.url);

    uri.setQuery('service=WMS&request=GetCapabilities&version=1.3.0');

    var xhr = new goog.net.XhrIo();
    xhr.setResponseType(goog.net.XhrIo.ResponseType.DOCUMENT);
    goog.events.listen(xhr, goog.net.EventType.COMPLETE, function() {
      if (!xhr.isSuccess()) {
        return;
      }
      var parser = new ol.format.WMSCapabilities();
      try {
        var parsed = parser.read(xhr.getResponseXml());
      } catch (e) {
        kt.alert('Error parsing the WMS Capabilities!');
        return;
      }

      var findUsableCRSIndex = function(CRSs) {
        if (!CRSs) return -1;
        var findSingle = function(code) {
          return goog.array.findIndex(CRSs, function(crs) {
            var proj_ = ol.proj.get(crs) || ol.proj.get(crs.toUpperCase());
            return !!proj_ && ol.proj.equivalent(proj_, ol.proj.get(code));
          });
        };
        var p3857id = findSingle('EPSG:3857');
        return p3857id >= 0 ? p3857id : findSingle('EPSG:4326');
      };

      var loadLayer = goog.bind(function(selected) {
        var layerName = selected['Name'];
        uri.setQuery('');
        uri.setFragment('layer=' + layerName);
        layer.url = uri.toString();
        uri.setFragment('');

        var CRSIndex = findUsableCRSIndex(selected['CRS']);
        if (CRSIndex >= 0) {
          var projection = ol.proj.get(selected['CRS'][CRSIndex]);

          layer.source = new ol.source.TileWMS({
            url: uri.toString(),
            params: {
              'LAYERS': layerName
            },
            projection: projection,
            crossOrigin: ''
          });
          layer.name = selected['Title'];
          layer.bounds = selected['EX_GeographicBoundingBox'];
          this.layers_.push(layer);

          if (!opt_default && !opt_dontSave) {
            this.save_();
          }

          this.updatePreviewUrl_(layer);

          if (opt_rerenderWhenLoaded) {
            this.render_();
          }
        }
      }, this);

      var layers = [];
      var addLayers = function(root) {
        if (root) {
          layers.push(root);
          goog.array.forEach(root['Layer'] || [], addLayers);
        }
      };
      addLayers(((parsed || {})['Capability'] || {})['Layer']);

      if (uri.getFragment().indexOf('layer=') === 0) {
        var layerName = uri.getFragment().substr(6);

        var found = goog.array.find(layers, function(layer) {
          return layer['Name'] == layerName;
        });

        if (found) {
          loadLayer(found);
          return;
        }
      }

      var optionList = [];
      goog.array.forEach(layers, function(option, i) {
        var CRSIndex = findUsableCRSIndex(option['CRS']);
        if (CRSIndex >= 0) {
          optionList.push({
            id: i,
            title: option['Title']
          });
        }
      });

      if (optionList.length === 1) {
        loadLayer(layers[0]);
      } else if (optionList.length > 1) {
        kt.listprompt('Select a layer to use:', optionList, function(id) {
          loadLayer(layers[parseInt(id, 10)]);
        });
      } else {
        kt.alert('No usable layers found!');
      }

    }, false, this);
    xhr.send(uri.toString());

    return;
  } else if (type == 'none') {
    layer.source = null;
    var parts = layer.url.split('|');
    layer.url = '';
    layer.name = parts[0];
    layer.previewUrl = parts[1];
  } else {
    return;
  }

  this.layers_.push(layer);

  if (!opt_default && !opt_dontSave) {
    this.save_();
  }
};


/**
 * @param {!kt.CustomMapsControl.Layer_} layer
 * @private
 */
kt.CustomMapsControl.prototype.updatePreviewUrl_ = function(layer) {
  if (layer.source && layer.source instanceof ol.source.TileImage) {
    var tileurlfunction = layer.source.getTileUrlFunction();
    if (tileurlfunction) {
      var center = layer.bounds ? ol.extent.getCenter(layer.bounds) : [0, 0];
      var projection = layer.source.getProjection();
      if (projection) {
        var center_ = ol.proj.transform(center,
            ol.proj.get('EPSG:4326'), projection);

        var tilegrid = layer.source.getTileGrid();
        if (tilegrid) {
          var tilecoord = tilegrid.getTileCoordForCoordAndZ(
                              center_, tilegrid.getMinZoom() || 0);
          layer.previewUrl = tileurlfunction(tilecoord, 1, projection) || null;
        }
      }
    }
  }
};


/**
 * @param {string} url
 * @private
 */
kt.CustomMapsControl.prototype.remove_ = function(url) {
  if (!url || !url.length) {
    return;
  }

  goog.array.removeAllIf(this.layers_, function(layer) {
    return layer.url == url;
  });

  this.save_();

  if (!goog.array.contains(this.layers_, this.activeLayer_)) {
    this.useLayer_(this.layers_[0]);
  }

  this.render_();
};


/**
 * @private
 */
kt.CustomMapsControl.prototype.render_ = function() {
  goog.dom.removeChildren(this.thumbs_);

  goog.array.forEach(this.layers_, function(layer) {
    var remover = layer.isDefault ? undefined :
                  goog.dom.createDom(goog.dom.TagName.A, 'remover', 'X');
    var preview = goog.dom.createDom(goog.dom.TagName.IMG, 'preview');
    var thumb = goog.dom.createDom(goog.dom.TagName.DIV, 'thumb',
        preview, remover,
        goog.dom.createDom(goog.dom.TagName.SPAN, 'name',
                           layer.name));

    if (layer.isDefault) {
      goog.dom.classlist.add(thumb, 'default');
    }

    if (this.activeLayer_ == layer) {
      goog.dom.classlist.add(thumb, 'active');
    }

    goog.dom.classlist.add(thumb, 'type-' + layer.type);

    preview.src = layer.previewUrl || '';

    if (remover) {
      goog.events.listen(remover, goog.events.EventType.CLICK, function(e) {
        this.remove_(layer.url);
        e.preventDefault();
        e.stopPropagation();
      }, false, this);
    }

    goog.events.listen(thumb, goog.events.EventType.CLICK, function(e) {
      this.useLayer_(layer);
      this.show(false);
    }, false, this);

    goog.dom.appendChild(this.thumbs_, thumb);
  }, this);
};


/**
 * @param {boolean} show
 */
kt.CustomMapsControl.prototype.show = function(show) {
  goog.dom.classlist.enable(this.root_, 'visible', show);

  if (show) {
    this.render_();
  }
};


/**
 * @param {boolean} enable
 */
kt.CustomMapsControl.prototype.enable = function(enable) {
  goog.style.setElementShown(this.root_, enable);
  if (this.controlElement_) {
    goog.style.setElementShown(this.controlElement_, enable);
  }

  if (enable) {
    this.useLayer_(this.activeLayerBeforeDisabled_ || this.layers_[0]);
  } else {
    this.activeLayerBeforeDisabled_ = this.activeLayer_;
    this.useLayer_(null);
  }
};

kt.expose.symbol('kt.CustomMapsControl', kt.CustomMapsControl);
