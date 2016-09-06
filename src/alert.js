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

goog.provide('kt.alert');
goog.provide('kt.confirm');
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
 * @param {Function=} opt_callback Function to call after 'OK'.
 * @param {boolean=} opt_html Text is html.
 */
kt.alert = function(text, opt_title, opt_ok, opt_callback, opt_html) {
  var popup = new kt.Popup(opt_title, true);

  if (opt_html) {
    popup.setHTMLContent(String(text));
  } else {
    popup.append(String(text));
  }
  var okBtn = goog.dom.createDom(goog.dom.TagName.DIV, 'btn', opt_ok || 'OK');
  popup.appendActions(okBtn);

  goog.events.listen(okBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    if (opt_callback) {
      opt_callback();
    }
    e.preventDefault();
  });

  popup.setVisible(true);
};

kt.expose.symbol('kt.alert', kt.alert);


/**
 * @param {*} text
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
  popup.append(String(text), valueInput);

  var okBtn = goog.dom.createDom(goog.dom.TagName.DIV,
                                 'btn-light', opt_ok || 'OK');
  var cancelBtn = goog.dom.createDom(goog.dom.TagName.DIV,
                                     'btn-dark', opt_cancel || 'Cancel');
  popup.appendActions(cancelBtn, okBtn);

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


/**
* @param {*} text
* @param {!function(?boolean)} callback
* @param {string=} opt_title
* @param {string=} opt_yes Text for the yes button. Default is 'Yes'.
* @param {string=} opt_no Text for the No button. Default is 'No'.
*/
kt.confirm = function(text, callback, opt_title, opt_yes, opt_no) {
  var popup = new kt.Popup(opt_title, true, true, function() {
    callback(null);
  });

  popup.append(String(text));

  var yesBtn = goog.dom.createDom(goog.dom.TagName.DIV,
      'btn-light', opt_yes || 'Yes');
  var noBtn = goog.dom.createDom(goog.dom.TagName.DIV,
      'btn-dark', opt_no || 'No');
  popup.appendActions(yesBtn, noBtn);

  goog.events.listen(yesBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    callback(true);
    e.preventDefault();
  });

  goog.events.listen(noBtn, goog.events.EventType.CLICK, function(e) {
    popup.setVisible(false);
    callback(false);
    e.preventDefault();
  });

  popup.setVisible(true);
};

kt.expose.symbol('kt.confirm', kt.confirm);
