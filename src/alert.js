goog.provide('kt.alert');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('kt.expose');


/**
 * @param {string} text
 * @param {string=} opt_title
 * @param {string=} opt_ok Text for the OK button. Default is 'OK'.
 */
kt.alert = function(text, opt_title, opt_ok) {
  var okBtn = goog.dom.createDom(goog.dom.TagName.DIV, 'alert-btn btn',
                                 opt_ok || 'OK');
  var alert = goog.dom.createDom(goog.dom.TagName.DIV, 'alert',
      opt_title ?
      goog.dom.createDom(goog.dom.TagName.DIV, 'alert-title', opt_title) : null,
      goog.dom.createDom(goog.dom.TagName.DIV, 'alert-content', text),
      okBtn
      );

  goog.events.listen(okBtn, goog.events.EventType.CLICK, function(e) {
    goog.dom.removeNode(alert);
    e.preventDefault();
  });

  goog.dom.appendChild(document.body, alert);
};

kt.expose.symbol('kt.alert', kt.alert);
