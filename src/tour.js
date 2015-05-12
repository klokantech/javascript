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

goog.provide('kt.Tour');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');

goog.require('kt.TourCard.EventType');



/**
 * @param {!Element=} opt_container
 * @constructor
 */
kt.Tour = function(opt_container) {
  /**
   * @type {!Array.<!kt.TourCard>}
   * @private
   */
  this.cards_ = [];

  /**
   * @type {?number}
   * @private
   */
  this.activeCard_ = null;

  /**
   * @type {Element}
   * @private
   */
  this.container_ = opt_container || document.documentElement;

  /**
   * @type {!Element}
   * @private
   */
  this.veil_ = goog.dom.createDom(goog.dom.TagName.DIV, 'tour-veil');
};


/**
 * Calling this after #start will not have any/desired effect.
 * @param {!kt.TourCard} card
 */
kt.Tour.prototype.addCard = function(card) {
  this.cards_.push(card);
};


/**
 * @private
 */
kt.Tour.prototype.prepare_ = function() {
  var count = this.cards_.length;
  goog.array.forEach(this.cards_, function(el, i, arr) {
    el.prepare(count, i, i == count - 1);

    goog.events.listen(el, kt.TourCard.EventType.CLOSE, function(e) {
      this.end();
    }, false, this);
    goog.events.listen(el, kt.TourCard.EventType.GOTO, function(e) {
      this.showCard(e.value);
    }, false, this);
    goog.events.listen(el, kt.TourCard.EventType.NEXT, function(e) {
      this.showCard(i + 1);
    }, false, this);
  }, this);
};


/**
 * @private
 */
kt.Tour.prototype.destroy_ = function() {
  goog.array.forEach(this.cards_, function(el, i, arr) {
    el.removeAllListeners();
    el.destroy();

    goog.events.listen(el, kt.TourCard.EventType.CLOSE, function(e) {
      this.end();
    }, false, this);
    goog.events.listen(el, kt.TourCard.EventType.GOTO, function(e) {
      this.showCard(e.value);
    }, false, this);
    goog.events.listen(el, kt.TourCard.EventType.NEXT, function(e) {
      this.showCard(i + 1);
    }, false, this);
  }, this);
};


/**
 */
kt.Tour.prototype.start = function() {
  this.prepare_();
  goog.dom.appendChild(this.container_, this.veil_);
  this.showCard(0);
};


/**
 */
kt.Tour.prototype.end = function() {
  this.showCard(null);
  goog.dom.removeNode(this.veil_);
  this.destroy_();
};


/**
 * @param {?number} index Null to end the tour.
 */
kt.Tour.prototype.showCard = function(index) {
  if (!goog.isNull(this.activeCard_)) {
    var card = this.cards_[this.activeCard_];
    if (goog.isDefAndNotNull(card)) {
      this.activeCard_ = null;
      card.show(null);
    }
  }
  if (!goog.isNull(index)) {
    var card = this.cards_[index];
    if (goog.isDefAndNotNull(card)) {
      this.activeCard_ = index;
      card.show(this.container_);
    }
  }
};
