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
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.KeyHandler');
goog.require('goog.math.Box');
goog.require('goog.math.Coordinate');
goog.require('goog.style');

goog.require('kt.TourCard');
goog.require('kt.TourCard.EventType');



/**
 * @param {!Element=} opt_container
 * @param {boolean=} opt_highlight Highlight the anchors or highlight boxes.
 * @constructor
 */
kt.Tour = function(opt_container, opt_highlight) {
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
  this.container_ = opt_container || document.body;

  /**
   * @type {boolean}
   * @private
   */
  this.highlight_ = goog.isDef(opt_highlight) ? opt_highlight : true;

  /**
   * @type {!Array.<!Element>}
   * @private
   */
  this.veils_ = [];

  var addVeil = goog.bind(function(opt_parent, opt_class) {
    var veil = goog.dom.createDom(goog.dom.TagName.DIV, 'tour-veil');
    goog.events.listen(veil, goog.events.EventType.CLICK, function(e) {
      this.end();
      e.preventDefault();
    }, false, this);
    this.veils_.push(veil);
    if (opt_parent) goog.dom.appendChild(opt_parent, veil);
    if (opt_class) goog.dom.classlist.add(veil, opt_class);
    return veil;
  }, this);

  var under = addVeil(undefined, 'tour-veil-under');
  if (this.highlight_) {
    // we need 4 more for highlighting
    addVeil(under);
    addVeil(under);
    addVeil(under);
    addVeil(under);
  }

  /**
   * @type {!goog.events.KeyHandler}
   * @private
   */
  this.keyHandler_ = new goog.events.KeyHandler();
  this.keyHandler_.listen(goog.events.KeyHandler.EventType.KEY, function(e) {
    if (goog.isNull(this.activeCard_)) return;

    if (e.keyCode == goog.events.KeyCodes.ESC) {
      this.end();
      e.preventDefault();
    } else if (e.keyCode == goog.events.KeyCodes.LEFT ||
               e.keyCode == goog.events.KeyCodes.UP) {
      if (this.activeCard_ > 0) {
        this.showCard(this.activeCard_ - 1);
      }
      e.preventDefault();
    } else if (e.keyCode == goog.events.KeyCodes.RIGHT ||
               e.keyCode == goog.events.KeyCodes.DOWN ||
               e.keyCode == goog.events.KeyCodes.ENTER ||
               e.keyCode == goog.events.KeyCodes.SPACE) {
      if (this.activeCard_ == this.cards_.length - 1) {
        this.end();
      } else {
        this.showCard(this.activeCard_ + 1);
      }
      e.preventDefault();
    }
  }, false, this);

  /**
   * @type {goog.dom.ViewportSizeMonitor}
   * @private
   */
  this.vsm_ = goog.dom.ViewportSizeMonitor.getInstanceForWindow();

  this.vsm_.listen(goog.events.EventType.RESIZE, function(e) {
    this.handleResize();
  }, false, this);
};


/**
 * Calling this after #start will not have any/desired effect.
 * @param {!kt.TourCard} card
 */
kt.Tour.prototype.addCard = function(card) {
  this.cards_.push(card);
};


/**
 * Shortcut for adding multiple cards.
 * @param {!kt.TourCard|!Array.<!kt.TourCard>} first
 * @param {...!kt.TourCard} var_args
 */
kt.Tour.prototype.addCards = function(first, var_args) {
  if (goog.isArray(first)) {
    this.addCards.apply(this, first);
  } else {
    goog.array.forEach(arguments, this.addCard, this);
  }
};


/**
 * @private
 */
kt.Tour.prototype.prepare_ = function() {
  var count = this.cards_.length;
  goog.array.forEach(this.cards_, function(el, i, arr) {
    el.prepare(count, i, i == count - 1);

    el.listen(kt.TourCard.EventType.CLOSE, function(e) {
      this.end();
    }, false, this);
    el.listen(kt.TourCard.EventType.GOTO, function(e) {
      this.showCard(e.value);
    }, false, this);
    el.listen(kt.TourCard.EventType.NEXT, function(e) {
      this.showCard(i + 1);
    }, false, this);
  }, this);
  this.keyHandler_.attach(this.container_);
};


/**
 * @private
 */
kt.Tour.prototype.destroy_ = function() {
  this.keyHandler_.detach();
  goog.array.forEach(this.cards_, function(el, i, arr) {
    el.removeAllListeners();
    el.destroy();
  }, this);
};


/**
 */
kt.Tour.prototype.start = function() {
  if (this.cards_.length == 0) return;

  this.prepare_();
  goog.dom.appendChild(this.container_, this.veils_[0]);
  var activeElement = goog.dom.getActiveElement(goog.dom.getDocument());
  if (activeElement) activeElement.blur(); // remove focus from any element
  this.showCard(0);
};


/**
 */
kt.Tour.prototype.end = function() {
  this.showCard(null);
  goog.dom.removeNode(this.veils_[0]);
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
    this.updateHighlight(null);
  }
  if (!goog.isNull(index)) {
    var card = this.cards_[index];
    if (goog.isDefAndNotNull(card)) {
      this.activeCard_ = index;
      card.show(this.container_);
      if (this.highlight_) this.updateHighlight(card.getHighlight());
    }
  }
};


/**
 * @param {?goog.math.Box} box Null to hide.
 */
kt.Tour.prototype.updateHighlight = function(box) {
  if (!this.highlight_) return;
  var unit = 'px';
  if (goog.isNull(box)) {
    box = new goog.math.Box(50, 50, 50, 50);
    unit = '%';
  }
  // top
  this.veils_[1].style.height = box.top + unit;
  // right
  this.veils_[2].style.left = box.right + unit;
  this.veils_[2].style.top = box.top + unit;
  this.veils_[2].style.height = (box.bottom - box.top) + unit;
  // bottom
  this.veils_[3].style.top = box.bottom + unit;
  //left
  this.veils_[4].style.width = box.left + unit;
  this.veils_[4].style.top = box.top + unit;
  this.veils_[4].style.height = (box.bottom - box.top) + unit;
};


/**
 */
kt.Tour.prototype.handleResize = function() {
  if (!goog.isNull(this.activeCard_)) {
    var card = this.cards_[this.activeCard_];
    if (goog.isDefAndNotNull(card)) {
      card.updatePosition();
      this.updateHighlight(card.getHighlight());
    }
  }
};


/**
 * @param {string=} opt_group
 * @return {!kt.Tour}
 */
kt.Tour.decorate = function(opt_group) {
  var tour = new kt.Tour();

  var selector = '.tour-card-template';
  if (opt_group) {
    selector += '[data-group=' + opt_group + ']';
  }

  var cardElements = document.querySelectorAll(selector);
  goog.array.forEach(cardElements, function(cardElement) {
    var title = cardElement.getAttribute('data-title') || '';
    var content = cardElement;
    var anchor = cardElement.getAttribute('data-anchor');
    if (anchor && anchor.indexOf(',') >= 0) {
      var p = anchor.split(',');
      anchor = new goog.math.Coordinate(
          parseFloat(p[0]), parseFloat(p[1]));
    } else if (anchor) {
      anchor = goog.dom.getElement(anchor);
    } else {
      anchor = null;
    }
    var highlight = cardElement.getAttribute('data-highlight');
    if (highlight && highlight.indexOf(',') >= 0) {
      var p = highlight.split(',');
      highlight = new goog.math.Box(
          parseFloat(p[1]), parseFloat(p[2]),
          parseFloat(p[3]), parseFloat(p[0]));
    } else {
      highlight = undefined;
    }
    var direction = /** @type {kt.TourCard.Direction} */
        (cardElement.getAttribute('data-direction') || 'none');
    var className = cardElement.getAttribute('data-classname');
    var card = new kt.TourCard(title, content, anchor, direction, highlight,
        undefined, undefined, undefined, className);
    tour.addCard(card);
  });

  return tour;
};
