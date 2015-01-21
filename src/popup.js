goog.provide('kt.Popup');

goog.require('goog.dom');

goog.require('kt.expose');



/**
* @param {string=} opt_title
* @param {boolean=} opt_modal
 * @constructor
 */
kt.Popup = function(opt_title, opt_modal) {
  /**
  * @type {!Element}
  * @private
  */
  this.content_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup-content');

  /**
  * @type {!Element}
  * @private
  */
  this.element_ = goog.dom.createDom(goog.dom.TagName.DIV, 'popup',
      opt_title ?
      goog.dom.createDom(goog.dom.TagName.DIV, 'popup-title', opt_title) : null,
      this.content_);

  /**
  * @type {!Element}
  * @private
  */
  this.root_ = opt_modal ?
      goog.dom.createDom(goog.dom.TagName.DIV, 'popup-bg', this.element_) :
      this.element_;
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
