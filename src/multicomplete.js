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

goog.provide('kt.MultiComplete');

goog.require('goog.ui.ac.ArrayMatcher');
goog.require('goog.ui.ac.AutoComplete');
goog.require('goog.ui.ac.InputHandler');
goog.require('goog.ui.ac.RemoteArrayMatcher');
goog.require('goog.ui.ac.Renderer');

goog.require('kt.expose');



/**
 * @param {!Element|!string} container Container element.
 * @param {!Array|!string} data Array of completable values or url.
 * @param {boolean=} opt_useSimilar Whether to use similar matches.
 * @param {boolean=} opt_allowShowAll Allow showing all results for no filter.
 * @param {boolean=} opt_allowCustom Allow value not present in the results.
 * @constructor
 * @extends {goog.ui.ac.AutoComplete}
 */
kt.MultiComplete = function(container, data, opt_useSimilar, opt_allowShowAll,
                            opt_allowCustom) {
  /**
   * @type {!Element}
   * @protected
   */
  this.container = /** @type {!Element} */(goog.dom.getElement(container));

  /**
   * @type {!Element}
   * @protected
   */
  this.inputElement = goog.dom.createDom(goog.dom.TagName.INPUT, {
                        type: 'text',
                        size: 3
                      });
  goog.dom.appendChild(this.container, this.inputElement);

  /**
   * @type {boolean}
   * @private
   */
  this.allowShowAll_ = opt_allowShowAll || false;

  /**
   * @type {!Array|!string}
   * @private
   */
  this.data_ = data;

  /**
   * @type {!goog.ui.ac.ArrayMatcher|!goog.ui.ac.RemoteArrayMatcher}
   * @protected
   */
  this.matcher = goog.isArray(data) ?
                     new goog.ui.ac.ArrayMatcher(data, opt_useSimilar) :
                     new goog.ui.ac.RemoteArrayMatcher(data, opt_useSimilar);

  /**
   * @type {!goog.ui.ac.Renderer}
   * @protected
   */
  this.renderer = new goog.ui.ac.Renderer(this.container.parentElement,
                                          undefined, true);

  /**
   * @type {!goog.ui.ac.InputHandler}
   * @protected
   */
  this.handler = new goog.ui.ac.InputHandler(null, null, false);

  goog.base(this, this.matcher, this.renderer, this.handler);

  this.handler.attachAutoComplete(this);
  this.handler.attachInputs(this.inputElement);
  this.handler.setPreventDefaultOnTab(true);
  this.setTarget(this.inputElement);

  /**
   * @type {!Array.<{val: !string, el: !Element, closer: !Element}>}
   * @protected
   */
  this.values = [];

  goog.events.listen(this, goog.ui.ac.AutoComplete.EventType.UPDATE,
      function(e) {
        this.addValue(e.row.toString());
        this.handler.setValue('');
      }, false, this);

  // look & feel
  goog.events.listen(this.container, goog.events.EventType.CLICK,
      function(e) {
        this.inputElement.focus();
        this.renderAll_();
      }, false, this);

  goog.events.listen(this.inputElement, goog.events.EventType.FOCUS,
      function(e) {
        this.renderAll_();
      }, false, this);

  goog.events.listen(this.inputElement, [goog.events.EventType.CHANGE,
                                         goog.events.EventType.KEYDOWN],
  function(e) {
    this.inputElement.size = Math.max(3, this.inputElement.value.length + 1);
  }, false, this);

  goog.events.listen(this.inputElement, goog.events.EventType.KEYDOWN,
      function(e) {
        // backspacing
        if (this.inputElement.value.length == 0 && e.keyCode == 8) {
          this.removeValue();
        }
        // do not close on enter
        if (e.keyCode == 13 && !this.isOpen()) {
          var value = this.inputElement.value;
          if (opt_allowCustom && value.length > 0) {
            if (!goog.array.find(this.values, function(el) {
              return el.val == value;
            })) {

              this.addValue(value);
              this.inputElement.value = '';
            }
          }
          e.stopPropagation();
          e.preventDefault();
        }
      }, false, this);
};
goog.inherits(kt.MultiComplete, goog.ui.ac.AutoComplete);


/** @inheritDoc */
kt.MultiComplete.prototype.dismiss = function() {
  goog.base(this, 'dismiss');
  this.inputElement.value = '';
};


/** @inheritDoc */
kt.MultiComplete.prototype.renderRows = function(rows, opt_options) {
  var newRows = goog.array.filter(rows, function(el, i, arr) {
    var label = el.toString();
    return goog.array.every(this.values, function(el, i, arr) {
      return el.val != label;
    });
  }, this);
  goog.base(this, 'renderRows', newRows, opt_options);
};


/**
 * @private
 */
kt.MultiComplete.prototype.renderAll_ = function() {
  if (this.allowShowAll_ &&
      this.inputElement.value == '' &&
      goog.isArray(this.data_)) {
    this.setTokenInternal('');
    this.renderRows(this.data_);
  }
};


/**
 * @param {string} v
 */
kt.MultiComplete.prototype.addValue = function(v) {
  var closer = goog.dom.createDom(goog.dom.TagName.A,
      {href: '#', 'class': 'mc-tag-remove'}, 'X');
  var element = goog.dom.createDom(goog.dom.TagName.DIV, 'mc-tag', v, closer);

  var newLength = this.values.push({val: v, el: element, closer: closer});

  goog.events.listen(closer, goog.events.EventType.CLICK, function(e) {
    this.removeValue(newLength - 1);
    this.inputElement.focus();
    this.renderAll_();
    e.preventDefault();
  }, false, this);

  goog.dom.insertSiblingBefore(element, this.inputElement);
};


/**
 * @param {!string|!number=} opt_v String or index,
 *                                 if undefined, removes the last element.
 * @protected
 */
kt.MultiComplete.prototype.removeValue = function(opt_v) {
  if (goog.isString(opt_v)) {
    opt_v = goog.array.findIndex(this.values, function(el, i, arr) {
      return el.val == opt_v;
    });
  }
  var payload = goog.isDefAndNotNull(opt_v) ?
                this.values[opt_v] : this.values.pop();
  if (goog.isDefAndNotNull(payload)) {
    goog.events.removeAll(payload.closer);
    goog.dom.removeNode(payload.el);
    if (goog.isDefAndNotNull(opt_v)) delete this.values[opt_v];
  }
};


/**
 * @return {!Array.<string>}
 */
kt.MultiComplete.prototype.getValues = function() {
  return /** @type {!Array.<string>} */(
      goog.array.map(this.values, function(el, i, arr) {
        return el.val;
      }));
};

kt.expose.symbol('kt.MultiComplete', kt.MultiComplete);
