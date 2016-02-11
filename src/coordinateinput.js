/**
 * Copyright (C) 2015 Klokan Technologies GmbH (info@klokantech.com)
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

goog.provide('kt.CoordinateInput');

goog.require('goog.dom');

goog.require('kt.expose');



/**
 * @param {Element|string} input
 * @constructor
 */
kt.CoordinateInput = function(input) {
  /**
   * @type {Element}
   * @private
   */
  this.input_ = goog.dom.getElement(input);

  /**
   * @type {Element}
   * @private
   */
  this.label_ = goog.array.find(
      goog.dom.getElementsByTagNameAndClass(goog.dom.TagName.LABEL, undefined,
          goog.dom.getParentElement(this.input_)),
      function(el, i, arr) {
        return el.htmlFor == this.input_.id;
      }, this);

  /**
   * @type {boolean}
   * @private
   */
  this.formatDegrees_ = false;

  this.enableDegrees(false);
};


/**
 * Enable/disable formatting of value as degrees.
 * @param {boolean} enable
 */
kt.CoordinateInput.prototype.enableDegrees = function(enable) {
  var value = this.getValue();
  this.formatDegrees_ = enable;
  this.setValue(value);

  this.input_.placeholder = this.input_.getAttribute(this.formatDegrees_ ?
      'data-placeholder-degrees' : 'data-placeholder') ||
      this.input_.placeholder;

  if (this.label_) {
    this.label_.innerHTML = this.label_.getAttribute(this.formatDegrees_ ?
        'data-value-degrees' : 'data-value') || this.label_.innerHTML;
  }

};


/**
 * @param {string} value Formatted string.
 * @return {number} Decimal value of the input.
 */
kt.CoordinateInput.convertDegreeStringToNumber = function(value) {
  var re = new RegExp(
      '^\\s*(-?\\d+(\\.\\d+)?)\\s*([°|\\s]\\s*(\\d+(\\.\\d+)?)?)?' +
      '\\s*([\'|\\s]\\s*(\\d+(\\.\\d+)?)?)?\\s*"?\\s*$');
  var matches = re.exec(value);
  if (!matches) return NaN;
  var gra = goog.string.toNumber(matches[1]) || 0;
  var min = goog.string.toNumber(matches[4]) || 0;
  var sec = goog.string.toNumber(matches[7]) || 0;
  return (gra < 0 ? -1 : 1) * (Math.abs(gra) + min / 60 + sec / 3600);
};


/**
 * @param {number} value Decimal value of the input.
 * @return {string} Formatted string.
 */
kt.CoordinateInput.convertNumberToDegreeString = function(value) {
  var deg = 0, min = 0, sec = 0;

  var formatted = value < 0 ? '-' : '';
  value = Math.abs(value);
  deg = Math.floor(value);
  value = (value % 1) * 60;
  if (value > 0) {
    min = Math.floor(value);
    value = (value % 1) * 60;
    if (value > 0) {
      sec = Math.round(value * 1000) / 1000;
    }
  }

  // The rounding on the lowest level (secs) can overflow to the higher orders.
  if (sec >= 60) {
    min++;
    sec = 0;
  }
  if (min >= 60) {
    deg++;
    min = 0;
  }

  formatted += deg.toFixed(0) + '°';
  if (min > 0 || sec > 0) formatted += min.toFixed(0) + '\'';
  if (sec > 0) formatted += sec.toFixed(3).replace(/\.*0+$/, '') + '"';

  return formatted;
};


/**
 * @return {number} Decimal value of the input.
 */
kt.CoordinateInput.prototype.getValue = function() {
  var rawValue = this.input_.value;
  return this.formatDegrees_ ?
      kt.CoordinateInput.convertDegreeStringToNumber(rawValue) :
      parseFloat(rawValue);
};


/**
 * @return {boolean} Has proper numerical value.
 */
kt.CoordinateInput.prototype.hasValue = function() {
  return goog.math.isFiniteNumber(this.getValue());
};


/**
 * @param {number} value Decimal value of the input.
 */
kt.CoordinateInput.prototype.setValue = function(value) {
  if (!goog.math.isFiniteNumber(value)) {
    this.input_.value = '';
    return;
  }
  this.input_.value = this.formatDegrees_ ?
      kt.CoordinateInput.convertNumberToDegreeString(value) : value;
};


kt.expose.symbol('kt.CoordinateInput', kt.CoordinateInput);
