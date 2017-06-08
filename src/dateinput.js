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

goog.provide('kt.DateInput');

goog.require('goog.date.Date');
goog.require('goog.dom');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat.Format');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.ui.InputDatePicker');
goog.require('kt.expose');



/**
 * @param {Element|string} element
 * @param {goog.i18n.DateTimeFormat.Format<number>|string=} opt_pattern
 * @constructor
 */
kt.DateInput = function(element, opt_pattern) {
  element = goog.dom.getElement(element);

  this.idp_ = null;

  if (element) {
    var pattern = opt_pattern || goog.i18n.DateTimeFormat.Format.SHORT_DATE;
    var formatter = new goog.i18n.DateTimeFormat(pattern);
    var parser = new goog.i18n.DateTimeParse(pattern);

    this.idp_ = new goog.ui.InputDatePicker(formatter, parser);
    this.idp_.decorate(element);
  }
};


/**
 * @param {Date} date
 */
kt.DateInput.prototype.setDate = function(date) {
  if (this.idp_) {
    var date_ = new goog.date.Date();
    date_.setTime(date.getTime());
    this.idp_.setDate(date_);
  }
};


/**
 * @return {goog.date.Date}
 */
kt.DateInput.prototype.getDate = function() {
  if (this.idp_) {
    return this.idp_.getDate();
  } else {
    return new goog.date.Date();
  }
};


/**
 * Finds all input[type=date] without native support and decorates them.
 * @param {string=} opt_pattern
 */
kt.DateInput.decorateAll = function(opt_pattern) {
  goog.array.forEach(
      document.querySelectorAll('input[type=date]'), function(el) {
        if (el.type != 'date') {
          new kt.DateInput(el, opt_pattern);
        }
      }
  );
};


kt.expose.symbol('kt.DateInput', kt.DateInput);
kt.expose.symbol('kt.DateInput.decorateAll', kt.DateInput.decorateAll);
