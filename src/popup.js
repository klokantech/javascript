goog.provide('kt.Popup');

goog.require('goog.dom');

goog.require('kt.expose');



/**
 * @param {string=} opt_title
 * @param {boolean=} opt_modal
 * @param {boolean=} opt_closeable
 * @param {Function=} opt_closeCallback
 * @constructor
 */
kt.Popup = function(opt_title, opt_modal, opt_closeable, opt_closeCallback) {
  /**
   * @type {!Element}
   * @private
   */
  this.content_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup-content');

  var closeBtn = opt_closeable ?
      goog.dom.createDom(goog.dom.TagName.A, 'popup-close', 'X') : null;

  /**
   * @type {!Element}
   * @private
   */
  this.element_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup',
      opt_title ?
      goog.dom.createDom(goog.dom.TagName.DIV, 'popup-title',
                         opt_title, closeBtn) : closeBtn,
      this.content_);

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
 * @param {...goog.dom.Appendable} var_args The things to append to the content.
 */
kt.Popup.prototype.append = function(var_args) {
  goog.dom.append(this.content_, arguments);
};

kt.expose.symbol('kt.Popup', kt.Popup);
