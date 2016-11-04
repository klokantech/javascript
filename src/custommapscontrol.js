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
 */
goog.provide('kt.CustomMapsControl');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.net.cookies');
goog.require('goog.string');
goog.require('kt.VectorMap');
goog.require('kt.listprompt');

/*
Needed requires if compiling together with OL3:

//goog.require('ol.Collection');
//goog.require('ol.format.WMSCapabilities');
//goog.require('ol.layer.Tile');
//goog.require('ol.proj');
//goog.require('ol.source.OSM');
//goog.require('ol.source.TileJSON');
//goog.require('ol.source.TileWMS');
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
 * }=} opt_elements
 * @param {!Array.<string>=} opt_defaults
 * @constructor
 */
kt.CustomMapsControl = function(map, opt_elements, opt_defaults) {
  var elements = opt_elements || {};

  /**
   * @type {!ol.Map}
   * @private
   */
  this.map_ = map;

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
  this.controlElement_ =
      goog.dom.getElement(elements.input || 'customMaps-control');

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
   * @type {!Array.<goog.events.Key>}
   * @private
   */
  this.gmapWrapListenKeys_ = [];

  /**
   * @type {!Element}
   * @private
   */
  this.root_ = /** @type {!Element} */
      (goog.dom.getElement(elements.root || 'customMaps'));

  /**
   * @type {!Element}
   * @private
   */
  this.thumbs_ = /** @type {!Element} */
      (goog.dom.getElement(elements.thumbs || 'customMaps-thumbs'));

  /**
   * @type {?Element}
   * @private
   */
  this.vectorMapEl_ =
      goog.dom.getElement(elements.vectorMap || 'customMaps-vector');

  goog.events.listen(this.root_, goog.events.EventType.CLICK, function(e) {
    if (e.target == this.root_) {
      this.show(false);
      e.stopPropagation();
    }
  }, false, this);

  var inputEl = goog.dom.getElement(elements.input || 'customMaps-input');
  var typeEl = goog.dom.getElement(elements.type || 'customMaps-type');
  var addBtn = goog.dom.getElement(elements.addBtn || 'customMaps-addbtn');
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
      this.add_(typeEl.value + ':' + inputEl.value, undefined, undefined, true);
      inputEl.value = '';
      this.render_();
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
};


/**
 * @define {string} Google maps key to use.
 */
kt.CustomMapsControl.GOOGLEMAPS_KEY = '';


/**
 * @define {string} Domain for the cookies.
 */
kt.CustomMapsControl.COOKIE_DOMAIN = '';


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
 * @param {!kt.CustomMapsControl.Layer_} layer
 * @private
 */
kt.CustomMapsControl.prototype.useLayer_ = function(layer) {
  this.activeLayer_ = layer;

  var newLayers = this.map_.getLayers().getArray();

  if (this.gmapWrap_) {
    // clear old google map and restore everything
    google.maps.event.clearInstanceListeners(this.gmapWrap_);
    goog.array.forEach(this.gmapWrapListenKeys_, goog.events.unlistenByKey);
    this.gmapWrapListenKeys_ = [];
    goog.dom.removeChildren(this.mapElement_);
    this.map_.setTarget(this.mapElement_);
    delete this.gmapWrap_;
  } else if (this.vectorMap_) {
    this.vectorMap_.destroy();
    delete this.gmapWrap_;
  } else {
    newLayers.shift();
  }
  this.mapElement_.style.backgroundColor = '';

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
      mapTypeId: layer.url
    });
    this.gmapWrap_ = gmap;
    gmap.controls[google.maps.ControlPosition.TOP_LEFT].push(olTarget);

    var v = this.map_.getView();
    if (v) {
      var syncCenter = function() {
        var center = ol.proj.transform(v.getCenter() || null,
                                       'EPSG:3857', 'EPSG:4326');
        gmap.setCenter(new google.maps.LatLng(center[1], center[0]));
      };
      var syncRes = function() {gmap.setZoom(v.getZoom() || 0);};
      this.gmapWrapListenKeys_.push(v.on('change:center', syncCenter));
      this.gmapWrapListenKeys_.push(v.on('change:resolution', syncRes));
      syncCenter();
      syncRes();
    }

    google.maps.event.addListenerOnce(gmap, 'idle', goog.bind(function() {
      google.maps.event.trigger(gmap, 'resize');
      this.map_.updateSize();
    }, this));
  } else if (layer.type == 'vector' &&
             this.vectorMapEl_ && layer.url.indexOf('|') > 0) {
    var parts = layer.url.split('|');
    var url_ = parts[1];
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
        if (!ol.extent.containsCoordinate(ext, view.getCenter() || null) ||
            ol.extent.containsExtent(view.calculateExtent(size), ext)) {
          view.fit(ext, size); // only zoom in
        }
      }
    }

    newLayers.unshift(new ol.layer.Tile(
        /** @type {olx.layer.TileOptions} */({source: layer.source})));
  }
  this.mapElement_.style.backgroundColor = layer.color;

  this.map_.getLayerGroup().setLayers(new ol.Collection(newLayers));
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
      var templateStart = layer.url.split('{z}')[0];
      layer.name = 'Open Street Map';
      layer.source = new ol.source.XYZ({
        url: layer.url
      });
      this.updatePreviewUrl_(layer);
    } else {
      return;
    }
  } else if (type == 'gmaps') {
    if (!goog.global['google'] || !goog.global['google']['maps']) {
      return;
    }
    var variant = layer.url;
    var name = goog.string.capitalize(variant);
    if (variant == 'hybrid') {
      name = 'Satellite';
    }
    layer.name = 'Google Maps - ' + name;
    var key = goog.global['GOOGLEMAPS_KEY'] ||
              kt.CustomMapsControl.GOOGLEMAPS_KEY;
    if (key) {
      layer.previewUrl = 'https://maps.googleapis.com/maps/api/staticmap?' +
          'size=512x512&zoom=1&maptype=' + variant;
      layer.previewUrl += '&key=' + key;
    }
  } else if (type == 'tilejson' || type == 'vector') {
    var url_ = layer.url;
    if (type == 'vector') {
      var parts = layer.url.split('|');
      if (!parts.length == 2) {
        return;
      }
      url_ = parts[1];
    }
    layer.source = new ol.source.TileJSON({
                     url: url_,
                     crossOrigin: '',
                     jsonp: /\.jsonp(\?.*)?$/.test(url_)
                   });

    layer.source.on('change', function(e) {
      if (layer.source.getState() == 'ready') {
        var tileJSON = layer.source.getTileJSON && layer.source.getTileJSON();
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
        }

        this.updatePreviewUrl_(layer);

        if (opt_rerenderWhenLoaded) {
          this.render_();
        }
      }
    }, this);
  } else if (type == 'wms') {
    var uri = new goog.Uri(layer.url);

    uri.setQuery('service=WMS&request=GetCapabilities');

    goog.net.XhrIo.send(uri.toString(), goog.bind(function(e) {
      var parser = new ol.format.WMSCapabilities();
      var parsed = parser.read(e.target.getResponse());

      var findUsableCRSIndex = function(CRSs) {
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

      var layers = parsed['Capability']['Layer']['Layer'];

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

      kt.listprompt('Select a layer to use:', optionList, function(id) {
        loadLayer(layers[id]);
      });

    }, this));

    return;
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
          layer.previewUrl = tileurlfunction(
              tilecoord, 1, layer.source.getProjection()) || null;
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

kt.expose.symbol('kt.CustomMapsControl', kt.CustomMapsControl);
