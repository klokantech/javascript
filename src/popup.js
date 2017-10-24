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

goog.provide('kt.Popup');

goog.require('goog.dom');
goog.require('goog.dom.classlist');

goog.require('kt.expose');



/**
 * @param {string=} opt_title
 * @param {boolean=} opt_modal
 * @param {boolean=} opt_closeable
 * @param {Function=} opt_closeCallback
 * @param {string=} opt_class
 * @constructor
 */
kt.Popup = function(opt_title, opt_modal, opt_closeable, opt_closeCallback,
                    opt_class) {
  /**
   * @type {!Element}
   * @private
   */
  this.content_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup-content');

  /**
   * @type {?Element}
   * @private
   */
  this.actions_ = null;

  var closeBtn = opt_closeable ?
      goog.dom.createDom(goog.dom.TagName.A, 'popup-close', 'X') : null;

  /**
   * @type {!Element}
   * @private
   */
  this.element_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup');
  if (opt_class) {
    goog.dom.classlist.add(this.element_, opt_class);
  }

  if (opt_title) {
    goog.dom.appendChild(this.element_,
        goog.dom.createDom(goog.dom.TagName.DIV, 'popup-title', opt_title));
  }

  if (closeBtn) {
    goog.dom.appendChild(this.element_, closeBtn);
  }
  goog.dom.appendChild(this.element_, this.content_);

  /**
   * @type {!Element}
   * @private
   */
  this.root_ = opt_modal ?
      goog.dom.createDom(goog.dom.TagName.DIV, 'popup-bg', this.element_) :
      this.element_;

  if (closeBtn) {
    goog.events.listen(closeBtn, goog.events.EventType.CLICK, function(e) {
      this.setVisible(false);
      if (opt_closeCallback) opt_closeCallback();
      e.preventDefault();
    }, false, this);
  }
};


/**
 * @param {boolean} visible
 */
kt.Popup.prototype.setVisible = function(visible) {
  if (visible) {
    goog.dom.appendChild(document.body, this.root_);
  } else {
    goog.dom.removeNode(this.root_);
  }
};


/**
 * @return {boolean}
 */
kt.Popup.prototype.isVisible = function() {
  return !!this.root_.parentNode;
};


/**
 * @param {...goog.dom.Appendable} var_args The things to append to the content.
 */
kt.Popup.prototype.append = function(var_args) {
  goog.dom.append(this.content_, arguments);
};


/**
 * @param {string} html
 */
kt.Popup.prototype.setHTMLContent = function(html) {
  this.content_.innerHTML = html;
};


/**
 * @param {...goog.dom.Appendable} var_args The things to append to the actions.
 */
kt.Popup.prototype.appendActions = function(var_args) {
  if (!this.actions_) {
    this.actions_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup-actions');
    goog.dom.appendChild(this.element_, this.actions_);
  }
  goog.dom.append(this.actions_, arguments);
};


kt.expose.symbol('kt.Popup', kt.Popup);
