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

goog.provide('kt.upload.DriveUploader');
goog.provide('kt.upload.DriveUploader.EventType');
goog.provide('kt.upload.DriveUploader.State');

goog.require('goog.events.EventTarget');
goog.require('goog.math');
goog.require('goog.net.CorsXmlHttpFactory');
goog.require('goog.net.Jsonp');
goog.require('goog.net.XhrIo');
goog.require('kt.upload.RetryHandler');



/**
 * Based on https://github.com/googledrive/cors-upload-sample.
 *
 * @param {string|function(function(string))} tokenProvider
 * @param {string=} opt_folderId
 * @constructor
 * @extends {goog.events.EventTarget}
 */
kt.upload.DriveUploader = function(tokenProvider, opt_folderId) {
  goog.base(this);

  this.state_ = kt.upload.DriveUploader.State.LOADING;
  this.token_ = null;
  this.tokenProvider_ = goog.isString(tokenProvider) ? function(callback) {
    var jsonp = new goog.net.Jsonp(/** @type {string} */(tokenProvider));
    jsonp.send(undefined, function(data) {
      callback(data['access_token']);
    });
  } : tokenProvider;

  this.folderId_ = opt_folderId || null;

  this.file_ = null;
  this.fileUrl_ = null;
  this.offset_ = 0;
  this.chunkSize_ = 5 * 1024 * 1024;
  this.retryHandler_ = new kt.upload.RetryHandler();

  this.xhr_ = new goog.net.XhrIo(new goog.net.CorsXmlHttpFactory());
  this.xhr_.listen(goog.net.EventType.PROGRESS,
                   this.onXhrProgress_, false, this);
  this.xhr_.listen(goog.net.EventType.SUCCESS,
                   this.onXhrSuccess_, false, this);
  this.xhr_.listen(goog.net.EventType.ERROR,
                   this.onXhrError_, false, this);

  this.xhr_.setProgressEventsEnabled(true);

  // consider 308 ("Resume Incomplete") success
  this.xhr_.isSuccess = function() {
    return goog.net.XhrIo.prototype.isSuccess.apply(this) ||
           this.getStatus() == 308;
  };

};
goog.inherits(kt.upload.DriveUploader, goog.events.EventTarget);


/**
 * @param {kt.upload.DriveUploader.State} state
 * @private
 */
kt.upload.DriveUploader.prototype.setState_ = function(state) {
  this.state_ = state;

  this.dispatchEvent({
    type: kt.upload.DriveUploader.EventType.STATE_CHANGE,
    state: state
  });
};


/**
 * @return {kt.upload.DriveUploader.State}
 */
kt.upload.DriveUploader.prototype.getState = function() {
  return this.state_;
};


/**
 */
kt.upload.DriveUploader.prototype.init = function() {
  if (goog.isNull(this.token_) && this.tokenProvider_) {
    this.tokenProvider_(goog.bind(function(token) {
      this.token_ = token;
      this.setState_(kt.upload.DriveUploader.State.READY);
    }, this));
  }
};


/**
 * @param {File} file
 */
kt.upload.DriveUploader.prototype.upload = function(file) {
  this.file_ = file;
  this.contentType_ = this.file_.type || 'application/octet-stream';
  var metadata = {
    'title': this.file_.name,
    'mimeType': this.contentType_
  };
  if (goog.isDefAndNotNull(this.folderId_)) {
    metadata['parents'] = [{
      'id': this.folderId_
    }];
  }
  this.fileUrl_ = null;
  this.offset_ = 0;
  this.retryHandler_.reset();

  this.xhr_.send(
      'https://www.googleapis.com/upload/drive/v2/files/?uploadType=resumable',
      'POST', JSON.stringify(metadata), {
        'Authorization': 'Bearer ' + this.token_,
        'Content-Type': 'application/json',
        'X-Upload-Content-Length': this.file_.size,
        'X-Upload-Content-Type': this.contentType_
      });
};


/**
 * Send the actual file content.
 * @suppress {accessControls}
 * @private
 */
kt.upload.DriveUploader.prototype.sendMoreData_ = function() {
  var content = this.file_;
  var end = this.file_.size;

  if (this.offset_ || this.chunkSize_) {
    // Only slice the file if we're either resuming or uploading in chunks
    if (this.chunkSize_) {
      end = Math.min(this.offset_ + this.chunkSize_, this.file_.size);
    }
    content = content.slice(this.offset_, end);
  }

  this.xhr_.send(this.fileUrl_, 'PUT', content, {
    'Content-Type': this.contentType_,
    'Content-Range': 'bytes ' + this.offset_ + '-' +
        (end - 1) + '/' + this.file_.size,
    'X-Upload-Content-Type': this.file_.type
  });
};


/**
 * Query for the state of the file for resumption.
 *
 * @private
 */
kt.upload.DriveUploader.prototype.resume_ = function() {
  this.xhr_.send(this.fileUrl_, 'PUT', undefined, {
    'Content-Range': 'bytes */' + this.file_.size,
    'X-Upload-Content-Type': this.file_.type
  });
};


/**
 * Extract the last saved range if available in the request.
 *
 * @param {goog.net.XhrIo} xhr Request object
 * @private
 */
kt.upload.DriveUploader.prototype.extractRange_ = function(xhr) {
  var range = xhr.getResponseHeader('Range');
  if (range) {
    this.offset_ = parseInt(range.match(/\d+/g).pop(), 10) + 1;
    this.onXhrProgress_();
  }
};


/**
 * @param {ProgressEvent} e
 * @private
 */
kt.upload.DriveUploader.prototype.onXhrSuccess_ = function(e) {
  var xhrio = /** @type {goog.net.XhrIo} */(e.target);
  if (goog.isNull(this.fileUrl_)) {
    var location = xhrio.getResponseHeader('Location');
    this.fileUrl_ = location;
    this.xhr_.listenOnce(goog.net.EventType.READY, function(e) {
      this.sendMoreData_();
    }, false, this);
  } else {
    var status = xhrio.getStatus();
    if (status == 200 || status == 201) {
      this.dispatchEvent({
        type: kt.upload.DriveUploader.EventType.STATE_CHANGE,
        state: kt.upload.DriveUploader.State.DONE,
        response: xhrio.getResponseJson(),
        success: true
      });
    } else if (status == 308) {
      this.extractRange_(xhrio);
      this.retryHandler_.reset();
      this.xhr_.listenOnce(goog.net.EventType.READY, function(e) {
        this.sendMoreData_();
      }, false, this);
    }
  }
};


/**
 * @param {ProgressEvent} e
 * @private
 */
kt.upload.DriveUploader.prototype.onXhrError_ = function(e) {
  var xhrio = /** @type {goog.net.XhrIo} */(e.target);
  var status = xhrio.getStatus();
  if (goog.isNull(this.fileUrl_) ||
      (status && status < 500)) {
    this.dispatchEvent({
      type: kt.upload.DriveUploader.EventType.STATE_CHANGE,
      state: kt.upload.DriveUploader.State.DONE,
      response: xhrio.getResponseJson(),
      success: false
    });
  } else {
    this.retryHandler_.retry(this.resume_.bind(this));
  }
};


/**
 * @param {Event=} opt_e
 * @private
 */
kt.upload.DriveUploader.prototype.onXhrProgress_ = function(opt_e) {
  var done = this.offset_;
  if (opt_e) done += opt_e.loaded;
  this.dispatchEvent({
    type: kt.upload.DriveUploader.EventType.STATE_CHANGE,
    state: kt.upload.DriveUploader.State.UPLOADING,
    progress: done / this.file_.size
  });
};



kt.expose.symbol('kt.upload.DriveUploader', kt.upload.DriveUploader);


/**
 * @enum {string}
 */
kt.upload.DriveUploader.State = {
  LOADING: 'loading',
  READY: 'ready',
  UPLOADING: 'uploading',
  DONE: 'done'
};


/**
 * @enum {string}
 */
kt.upload.DriveUploader.EventType = {
  STATE_CHANGE: 'change'
};
