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

goog.provide('kt.listprompt');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('kt.Popup');
goog.require('kt.expose');


/**
 * Shows a list of options and the user choose one of the values.
 * @param {*} text
 * @param {!Array.<{id: string, title: string}>} options
 * @param {!function(string)} callback
 * @param {string=} opt_title
 */
kt.listprompt = function(text, options, callback, opt_title) {
  var popup = new kt.Popup(opt_title, true);

  var list = goog.dom.createDom(goog.dom.TagName.UL, 'options');
  goog.array.forEach(options, function(option) {
    var item = goog.dom.createDom(goog.dom.TagName.LI);
    item.innerHTML = option.title;
    goog.events.listen(item, goog.events.EventType.CLICK, function(e) {
      popup.setVisible(false);
      callback(option.id);
      e.preventDefault();
    });
    goog.dom.appendChild(list, item);
  });

  popup.append(String(text), list);

  popup.setVisible(true);
};

kt.expose.symbol('kt.listprompt', kt.listprompt);
