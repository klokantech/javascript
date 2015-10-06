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

goog.provide('kt.upload.RetryHandler');

goog.require('goog.math');



/**
 * Based on https://github.com/googledrive/cors-upload-sample.
 *
 * Helper for retries with backoff and jitter.
 * @constructor
 */
kt.upload.RetryHandler = function() {
  this.interval = 1000;
  this.maxInterval = 60 * 1000;
};


/**
 * Call the function after waiting
 *
 * @param {function()} callback
 */
kt.upload.RetryHandler.prototype.retry = function(callback) {
  setTimeout(callback, this.interval);
  this.interval = this.calcNextInterval_();
};


/**
 * Reset the counter (e.g. after successful request.)
 */
kt.upload.RetryHandler.prototype.reset = function() {
  this.interval = 1000;
};


/**
 * Calculate the next wait time.
 * @return {number} Next wait interval, in milliseconds
 * @private
 */
kt.upload.RetryHandler.prototype.calcNextInterval_ = function() {
  var interval = this.interval * 2 + goog.math.randomInt(1000);
  return Math.min(interval, this.maxInterval);
};
