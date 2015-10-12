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
 * @author dalibor.janak@klokantech.com (Dalibor Janák)
 */

goog.provide('kt.notice');

goog.require('goog.dom');
goog.require('goog.net.cookies');
goog.require('kt.expose');



/**
 * @param {string=} opt_text
 * @param {boolean=} opt_save
 * @param {Function=} opt_closeCallback
 * @constructor
 */
kt.notice = function(opt_text, opt_save, opt_closeCallback) {

  var ktnotice = goog.net.cookies.get('kt.notice');
  if (ktnotice !== 'true') {
    /**
     * @type {!Element}
     * @private
     */
    this.wrap_ = goog.dom.createDom(goog.dom.TagName.DIV, 'notice');

    /**
     * @type {!Element}
     * @private
     */
    this.text_ = goog.dom.createDom('p', null, opt_text);

    /**
     * @type {!Element}
     * @private
     */
    this.submit_ = goog.dom.createDom('button', {'class': 'btn'}, 'ok');

    goog.events.listen(
        this.submit_,
        goog.events.EventType.CLICK,
        goog.bind(function() {
          goog.dom.removeNode(this.wrap_);
          //remember for next visit
          if (opt_save) {
            goog.net.cookies.set('kt.notice', 'true',
                        10 * 365 * 24 * 60 * 60, '/');
          }
          if (opt_closeCallback) {
            opt_closeCallback();
          }
        }, this)
    );


    goog.dom.appendChild(this.wrap_, this.text_);
    goog.dom.appendChild(this.wrap_, this.submit_);
    goog.dom.appendChild(document.body, this.wrap_);

  }
};

kt.expose.symbol('kt.notice', kt.notice);
