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

goog.provide('kt.VectorMap');

goog.require('kt.expose');



/**
 * @param {string} styleJson Url to the style JSON to use as base layer.
 * @param {string} tileJson Fallback to use if WebGL is not available.
 * @param {ol.Map|Element|string} mapOrElement
 * @param {Element|string} glElement
 * @constructor
 */
kt.VectorMap = function(styleJson, tileJson, mapOrElement, glElement) {
  /**
   * @type {!ol.Map}
   * @private
   */
  this.olMap_ = (mapOrElement instanceof ol.Map) ? mapOrElement : new ol.Map({
    layers: [],
    target: mapOrElement,
    view: new ol.View(/** @type {olx.ViewOptions} */({
      center: [0, 0],
      minZoom: 1,
      zoom: 2
    }))
  });

  this.olMapPrecomposeListenKey_ = null;

  /**
   * @type {?Object}
   * @private
   */
  this.glMap_ = null;

  var mapboxgl = goog.global['mapboxgl'];
  if (mapboxgl && mapboxgl['Map'] && mapboxgl['supported']()) {
    this.glMap_ = /** @type {!Object} */(new mapboxgl['Map']({
      'container': glElement,
      'style': styleJson,
      'center': [0, 0],
      'zoom': 1,
      'interactive': false
    }));

    this.glMap_['setMaxBounds']([[-Infinity, -90], [Infinity, 90]]);

    this.olMapPrecomposeListenKey_ = this.olMap_.on('precompose', function(e) {
      var viewState = (e.frameState || {}).viewState;
      if (viewState) {
        this.glMap_['jumpTo']({
          'bearing': -(viewState.rotation) * 180 / Math.PI,
          'center': ol.proj.toLonLat(viewState.center || null),
          'zoom': Math.log((Math.PI * 6378137 * 2 / 256) /
              viewState.resolution) / Math.LN2 - 1
        });
      }
    }, this);

  } else {
    this.olMap_.getLayers().insertAt(0, new ol.layer.Tile({
      source: new ol.source.TileJSON({
        url: tileJson
      })
    })
    );
  }
};


/**
 * @return {!ol.Map}
 */
kt.VectorMap.prototype.getMap = function() {
  return this.olMap_;
};


/**
 * Destroys the vector/raster layers (and gl map),
 * but keeps ol map.
 */
kt.VectorMap.prototype.destroy = function() {
  if (this.glMap_) {
    var container = goog.dom.getElement(this.glMap_['getContainer']());
    this.glMap_['remove']();
    if (container) {
      goog.dom.removeChildren(container);
    }
    this.glMap_ = null;
  } else {
    var layers = this.olMap_.getLayers();
    if (layers && layers.getLength() > 0) {
      layers.removeAt(0);
    }
  }
  if (this.olMapPrecomposeListenKey_) {
    ol.Observable.unByKey(this.olMapPrecomposeListenKey_);
    this.olMapPrecomposeListenKey_ = null;
  }
};


kt.expose.symbol('kt.VectorMap', kt.VectorMap);
kt.expose.symbol('kt.VectorMap.prototype.getMap',
                 kt.VectorMap.prototype.getMap);
kt.expose.symbol('kt.VectorMap.prototype.destroy',
                 kt.VectorMap.prototype.destroy);
