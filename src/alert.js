goog.provide('kt.alert');
goog.provide('kt.prompt');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('kt.Popup');
goog.require('kt.expose');


/**
 * @param {*} text
 * @param {string=} opt_title
 * @param {string=} opt_ok Text for the OK button. Default is 'OK'.
 */
kt.alert = function(text, opt_title, opt_ok) {
  var popup = new kt.Popup(opt_title, true);

  var okBtn = goog.dom.createDom(goog.dom.TagName.DIV, 'btn', opt_ok || 'OK');
  popup.append(String(text), okBtn);

  goog.events.listen(okBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    e.preventDefault();
  });

  popup.setVisible(true);
};

kt.expose.symbol('kt.alert', kt.alert);


/**
 * @param {string} text
 * @param {!function(?string)} callback
 * @param {string=} opt_title
 * @param {string=} opt_ok Text for the OK button. Default is 'OK'.
 * @param {string=} opt_cancel Text for the Cancel button. Default is 'Cancel'.
 * @param {string=} opt_default Default value.
 */
kt.prompt = function(text, callback, opt_title,
                     opt_ok, opt_cancel, opt_default) {
  var popup = new kt.Popup(opt_title, true);

  var valueInput = goog.dom.createDom(goog.dom.TagName.INPUT, {
    type: 'text',
    value: opt_default || ''
  });
  var okBtn = goog.dom.createDom(goog.dom.TagName.DIV,
                                 'btn-light', opt_ok || 'OK');
  var cancelBtn = goog.dom.createDom(goog.dom.TagName.DIV,
                                     'btn-dark', opt_cancel || 'Cancel');
  popup.append(text, valueInput, cancelBtn, okBtn);

  goog.events.listen(okBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    callback(valueInput.value);
    e.preventDefault();
  });

  goog.events.listen(cancelBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    callback(null);
    e.preventDefault();
  });

  popup.setVisible(true);
};

kt.expose.symbol('kt.prompt', kt.prompt);
