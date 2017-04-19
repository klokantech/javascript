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
goog.provide('kt.CoordinateInput.DegreeFormat');

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

  /**
   * @type {kt.CoordinateInput.DegreeFormat}
   * @private
   */
  this.format_ = kt.CoordinateInput.DegreeFormat.DMS;

  this.enableDegrees(false);
};


/**
 * @define {boolean} Use full formats (e.g. 0°0'0" instead of just 0°).
 */
kt.CoordinateInput.FULL_FORMAT = true;


/**
 * @const {RegExp}
 */
kt.CoordinateInput.DEGREESTRING_REGEXP = new RegExp(
    '^\\s*(-?\\d+(\\.\\d*)?)\\s*([°|\\s]\\s*(\\d+(\\.\\d*)?)?)?' +
    '\\s*([\'|\\s]\\s*(\\d+(\\.\\d*)?)?)?\\s*"?\\s*$');


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

  goog.dom.classlist.enable(this.input_, 'degrees', enable);

  if (this.label_) {
    this.label_.innerHTML = this.label_.getAttribute(this.formatDegrees_ ?
        'data-value-degrees' : 'data-value') || this.label_.innerHTML;
    goog.dom.classlist.enable(this.label_, 'degrees', enable);
  }

};


/**
 * @return {boolean}
 */
kt.CoordinateInput.prototype.hasDegreesEnabled = function() {
  return this.formatDegrees_;
};


/**
 * @param {kt.CoordinateInput.DegreeFormat} format
 */
kt.CoordinateInput.prototype.setDegreeFormat = function(format) {
  var value = this.getValue();
  this.format_ = format;
  this.setValue(value);
};


/**
 * @param {string} value Formatted string.
 * @return {kt.CoordinateInput.DegreeFormat} Guessed degree format.
 */
kt.CoordinateInput.prototype.guessDegreeFormat = function(value) {
  var matches = kt.CoordinateInput.DEGREESTRING_REGEXP.exec(value);
  if (!matches) {
    return kt.CoordinateInput.DegreeFormat.DECIMAL;
  } else {
    if (goog.isDefAndNotNull(matches[7])) {
      return kt.CoordinateInput.DegreeFormat.DMS;
    } else if (goog.isDefAndNotNull(matches[4])) {
      return kt.CoordinateInput.DegreeFormat.DM;
    } else {
      return kt.CoordinateInput.DegreeFormat.DECIMAL;
    }
  }
};


/**
 * @param {string} value Formatted string.
 * @return {number} Decimal value of the input.
 */
kt.CoordinateInput.convertDegreeStringToNumber = function(value) {
  var matches = kt.CoordinateInput.DEGREESTRING_REGEXP.exec(value);
  if (!matches) return NaN;
  var gra = goog.string.toNumber(matches[1]) || 0;
  var min = goog.string.toNumber(matches[4]) || 0;
  var sec = goog.string.toNumber(matches[7]) || 0;
  return (gra < 0 ? -1 : 1) * (Math.abs(gra) + min / 60 + sec / 3600);
};


/**
 * @param {number} value Decimal value of the input.
 * @param {kt.CoordinateInput.DegreeFormat=} opt_format
 * @return {string} Formatted string.
 */
kt.CoordinateInput.convertNumberToDegreeString = function(value, opt_format) {
  var format = opt_format || kt.CoordinateInput.DegreeFormat.DMS;

  var degStr = null, minStr = null, secStr = null;

  var formatted = value < 0 ? '-' : '';
  value = Math.abs(value);
  if (format == kt.CoordinateInput.DegreeFormat.DECIMAL) {
    degStr = value.toFixed(7).replace(/\.*0+$/, '');
  } else {
    var deg = Math.floor(value);
    value = (value % 1) * 60;
    if (kt.CoordinateInput.FULL_FORMAT || value > 0) {
      var min;
      if (format == kt.CoordinateInput.DegreeFormat.DMS) {
        min = Math.floor(value);
        value = (value % 1) * 60;
        if (kt.CoordinateInput.FULL_FORMAT || value > 0) {
          var sec = Math.round(value * 1e3) / 1e3;
          // The rounding on the lowest level can overflow to the higher order.
          if (sec >= 60) {
            min++;
            sec = 0;
          }
          secStr = sec.toFixed(3).replace(/\.*0+$/, '');
        }
      } else {
        min = Math.round(value * 1e5) / 1e5;
      }
      if (min >= 60) {
        deg++;
        min = 0;
      }
      minStr = min.toFixed(5).replace(/\.*0+$/, '');
    }
    degStr = deg.toFixed(0);

  }

  formatted += degStr + '°';
  if (minStr) formatted += minStr + '\'';
  if (secStr) formatted += secStr + '"';

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
 * @param {string|number} value_ Decimal value of the input.
 */
kt.CoordinateInput.prototype.setValue = function(value_) {
  var value = parseFloat(value_);
  if (!goog.isNumber(value) || !goog.math.isFiniteNumber(value)) {
    this.input_.value = '';
    return;
  }
  this.input_.value = this.formatDegrees_ ?
      kt.CoordinateInput.convertNumberToDegreeString(value, this.format_) :
      value_;
};


/**
 */
kt.CoordinateInput.prototype.reformatValue = function() {
  var value = this.getValue();
  this.setValue(value);
};


/**
 * @param {!function(string)=} opt_valueCallback
 * @param {!function(kt.CoordinateInput.DegreeFormat)=} opt_formatCallback
 * @return {!Array.<number>} Listen key(s).
 */
kt.CoordinateInput.prototype.setupCallbacks =
    function(opt_valueCallback, opt_formatCallback) {

  var handleCommit = goog.bind(function() {
    if (this.formatDegrees_) {
      if (opt_formatCallback) {
        opt_formatCallback(this.guessDegreeFormat(this.input_.value));
      }
    }
    if (opt_valueCallback) {
      if (this.formatDegrees_ &&
          this.format_ != kt.CoordinateInput.DegreeFormat.DECIMAL) {
        opt_valueCallback(this.getValue().toString());
      } else {
        opt_valueCallback(this.input_.value);
      }
    }
  }, this);

  return [
    goog.events.listen(this.input_, goog.events.EventType.KEYDOWN, function(e) {
      if (e.keyCode == 13) {
        handleCommit();
      }
      e.stopPropagation();
    }, false, this),
    goog.events.listen(this.input_, goog.events.EventType.BLUR, function(e) {
      handleCommit();
      e.stopPropagation();
    }, false, this)
  ];
};


/**
 * @enum {string}
 */
kt.CoordinateInput.DegreeFormat = {
  DECIMAL: 'dec',
  DM: 'dm',
  DMS: 'dms'
};


kt.expose.symbol('kt.CoordinateInput', kt.CoordinateInput);
kt.expose.symbol('kt.CoordinateInput.DegreeFormat',
                 kt.CoordinateInput.DegreeFormat);
