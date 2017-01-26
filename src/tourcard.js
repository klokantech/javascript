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

goog.provide('kt.TourCard');
goog.provide('kt.TourCard.Direction');
goog.provide('kt.TourCard.EventType');

goog.require('goog.Timer');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.math.Box');
goog.require('goog.math.Coordinate');
goog.require('goog.style');



/**
 * If direction is NONE or anchor is null, center in the container.
 * @param {string|Element} title
 * @param {string|Element} content
 * @param {Element|goog.math.Coordinate} anchor
 * @param {!kt.TourCard.Direction} direction
 * @param {!goog.math.Box=} opt_highlight
 * @param {!kt.TourCard.Direction=} opt_anchorDirX
 *                                Defaults to LEFT (or `direction` if == RIGHT)
 * @param {!kt.TourCard.Direction=} opt_anchorDirY
 *                                Defaults to TOP (or `direction` if == BOTTOM)
 * @param {number=} opt_anchorPadding Distance from the anchor point in pixels.
 * @param {string=} opt_className Custom class name to append to the card.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
kt.TourCard = function(title, content, anchor, direction, opt_highlight,
                       opt_anchorDirX, opt_anchorDirY, opt_anchorPadding,
                       opt_className) {
  goog.base(this);

  /**
   * @type {string}
   * @private
   */
  this.title_ = goog.isString(title) ? title : title.innerHTML;

  /**
  * @type {string}
  * @private
  */
  this.content_ = goog.isString(content) ? content : content.innerHTML;

  /**
  * @type {Element|goog.math.Coordinate}
  * @private
  */
  this.anchor_ = anchor;

  /**
   * For the arrow.
   * @type {!kt.TourCard.Direction}
   * @private
   */
  this.direction_ = direction;

  /**
   * @type {!kt.TourCard.Direction}
   * @private
   */
  this.anchorDirX_ = opt_anchorDirX ||
      (direction == kt.TourCard.Direction.RIGHT ?
      kt.TourCard.Direction.RIGHT : kt.TourCard.Direction.LEFT);

  /**
   * @type {!kt.TourCard.Direction}
   * @private
   */
  this.anchorDirY_ = opt_anchorDirY ||
      (direction == kt.TourCard.Direction.BOTTOM ?
      kt.TourCard.Direction.BOTTOM : kt.TourCard.Direction.TOP);

  /**
   * @type {number}
   * @private
   */
  this.anchorPadding_ = opt_anchorPadding ||
                        kt.TourCard.DEFAULT_ANCHOR_PADDING;

  /**
   * @type {?goog.math.Box}
   * @private
   */
  this.highlight_ = opt_highlight || null;

  /**
   * @type {?string}
   * @private
   */
  this.className_ = opt_className || null;

  /**
   * @type {?Element}
   * @private
   */
  this.element_ = null;

  /**
   * @type {?Element}
   * @private
   */
  this.container_ = null;

  /**
   * @type {?number}
   * @private
   */
  this.fadeAnimTimer_ = null;
};
goog.inherits(kt.TourCard, goog.events.EventTarget);


/**
 * @define {number} Default distance from the anchor point in pixels.
 */
kt.TourCard.DEFAULT_ANCHOR_PADDING = 15;


/**
 * @define {number} Fade animation time in ms.
 */
kt.TourCard.FADE_ANIM_TIME = 500;


/**
 * @define {number} Expand the highlight area by this to see it better.
 */
kt.TourCard.HIGHLIGHT_MARGIN = 5;


/**
 * @param {number=} opt_skipperCount Number of bullets to display.
 * @param {number=} opt_skipperIndex
 * @param {boolean=} opt_last
 */
kt.TourCard.prototype.prepare = function(opt_skipperCount, opt_skipperIndex,
                                         opt_last) {

  this.element_ = goog.dom.createDom(goog.dom.TagName.DIV, 'tour-card');
  goog.dom.classlist.add(this.element_, 'direction-' + this.direction_);
  goog.dom.classlist.add(this.element_, 'anchor-' + this.anchorDirX_);
  goog.dom.classlist.add(this.element_, 'anchor-' + this.anchorDirY_);
  if (this.className_) {
    goog.dom.classlist.add(this.element_, this.className_);
  }

  var titleEl = goog.dom.createDom(goog.dom.TagName.H3, 'tour-card-title');
  titleEl.innerHTML = this.title_;

  var contentEl = goog.dom.createDom(goog.dom.TagName.P, 'tour-card-content');
  contentEl.innerHTML = this.content_;

  var closeBtn = goog.dom.createDom(goog.dom.TagName.A, {
    'href': '#',
    'class': 'tour-card-close'
  }, 'x');
  goog.events.listen(closeBtn, goog.events.EventType.CLICK, function(e) {
    this.dispatchEvent(kt.TourCard.EventType.CLOSE);
    e.preventDefault();
  }, false, this);

  var nextBtn = undefined;
  if (opt_last !== true) {
    nextBtn = goog.dom.createDom(goog.dom.TagName.A, {
      'href': '#',
      'class': 'tour-card-next'
    });
    goog.events.listen(nextBtn, goog.events.EventType.CLICK, function(e) {
      this.dispatchEvent(kt.TourCard.EventType.NEXT);
      e.preventDefault();
    }, false, this);
  } else {
    nextBtn = goog.dom.createDom(goog.dom.TagName.A, {
      'href': '#',
      'class': 'tour-card-done'
    });
    goog.events.listen(nextBtn, goog.events.EventType.CLICK, function(e) {
      this.dispatchEvent(kt.TourCard.EventType.CLOSE);
      e.preventDefault();
    }, false, this);
  }

  var skipperBox = goog.dom.createDom(goog.dom.TagName.DIV,
                                      'tour-card-skippers');

  var skippers = opt_skipperCount || 0;
  for (var i = 0; i < skippers; i++) {
    (function(index, that) {
      var skipper = goog.dom.createDom(goog.dom.TagName.A, {
        'href': '#',
        'class': 'tour-card-skipper'
      });
      if (index === opt_skipperIndex) {
        goog.dom.classlist.add(skipper, 'active');
      }
      goog.events.listen(skipper, goog.events.EventType.CLICK, function(e) {
        that.dispatchEvent({
          type: kt.TourCard.EventType.GOTO,
          value: index
        });
        e.preventDefault();
      }, false, that);
      goog.dom.appendChild(skipperBox, skipper);
    })(i, this);
  }
  goog.dom.append(this.element_, titleEl, contentEl,
      closeBtn, skipperBox, nextBtn);
};


/**
 */
kt.TourCard.prototype.updatePosition = function() {
  if (!this.container_) return;

  // reset position
  var style = this.element_.style;
  style.top = 'auto';
  style.right = 'auto';
  style.bottom = 'auto';
  style.left = 'auto';

  if (this.direction_ == kt.TourCard.Direction.NONE ||
      goog.isNull(this.anchor_)) {
    style.top = '50%';
    style.left = '50%';
  } else if (this.anchor_ instanceof goog.math.Coordinate) {
    var posX = this.anchor_.x +
        (this.anchorDirX_ == this.direction_ ? this.anchorPadding_ : 0);
    var posY = this.anchor_.y +
        (this.anchorDirY_ == this.direction_ ? this.anchorPadding_ : 0);

    style[this.anchorDirX_] = posX + 'px';
    style[this.anchorDirY_] = posY + 'px';
  } else {
    var rect = this.anchor_.getBoundingClientRect();
    var size = goog.style.getBorderBoxSize(this.anchor_);
    var containerRect = this.container_.getBoundingClientRect();
    var containerSize = goog.style.getSize(this.container_);

    // positions of the anchor element.
    // "Fixed" relative to the container position and size so that
    //   e.g. "right" is position relative to the right edge of the container.
    var poses = {
      'top': (rect.top - containerRect.top),
      'left': (rect.left - containerRect.left),
      'bottom': containerSize.height - (rect.bottom - containerRect.top),
      'right': containerSize.width - (rect.right - containerRect.left)
    };

    var posX = poses[this.anchorDirX_] +
        (this.anchorDirX_ == this.direction_ ?
            size.width + this.anchorPadding_ : 0);
    var posY = poses[this.anchorDirY_] +
        (this.anchorDirY_ == this.direction_ ?
            size.height + this.anchorPadding_ : 0);

    style[this.anchorDirX_] = posX + 'px';
    style[this.anchorDirY_] = posY + 'px';
  }
};


/**
 * @return {?goog.math.Box}
 */
kt.TourCard.prototype.getHighlight = function() {
  if (this.highlight_) return this.highlight_;
  if (!this.anchor_) return null;

  if (goog.dom.isElement(this.anchor_)) {
    var rect = this.anchor_.getBoundingClientRect();
    var containerRect = this.container_.getBoundingClientRect();

    var margin = kt.TourCard.HIGHLIGHT_MARGIN;
    var box = new goog.math.Box(
        Math.max(rect.top - margin - containerRect.top, 0),
        rect.right + margin - containerRect.left,
        rect.bottom + margin - containerRect.top,
        Math.max(rect.left - margin - containerRect.left, 0)
        );
    return box;
  } else {
    var pos = goog.style.getRelativePosition(this.element_, this.container_);
    return new goog.math.Box(pos.y, pos.x, pos.y, pos.x);
  }
};


/**
 * @param {?Element} container
 */
kt.TourCard.prototype.show = function(container) {
  if (!this.element_) return;

  goog.Timer.clear(this.fadeAnimTimer_); // cancel old animation if any

  this.element_.style.opacity = 0;
  if (this.element_.parentNode && !container) {
    // fade out anim

    // remember the instance, this.element_ may not be valid at the end of anim
    var el = this.element_;
    this.fadeAnimTimer_ = goog.Timer.callOnce(function() {
      goog.dom.removeNode(el);
    }, kt.TourCard.FADE_ANIM_TIME, this);
  }

  this.container_ = container;

  if (this.container_) {
    // lazy load images
    var lazyImages = this.element_.querySelectorAll('img[data-src]');
    goog.array.forEach(lazyImages, function(image) {
      image.src = '';
      image.src = image.getAttribute('data-src');
    });

    goog.dom.appendChild(this.container_, this.element_);
    this.updatePosition();

    // fade in anim
    this.fadeAnimTimer_ = goog.Timer.callOnce(function() {
      if (this.element_) this.element_.style.opacity = 1;
    }, 0, this);
  }
};


/**
 */
kt.TourCard.prototype.destroy = function() {
  this.show(null);
  this.element_ = null;
};


/**
 * @enum {string}
 */
kt.TourCard.Direction = {
  NONE: 'none',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
};


/**
 * @enum {string}
 */
kt.TourCard.EventType = {
  GOTO: 'goto',
  NEXT: 'next',
  CLOSE: 'close'
};
