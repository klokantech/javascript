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

goog.provide('kt.upload.Uploader');

goog.require('goog.dom');
goog.require('goog.events.FileDropHandler');
goog.require('goog.style');
goog.require('kt.upload.DriveUploader');
goog.require('kt.upload.DriveUploader.State');



/**
 * @constructor
 * @param {!kt.upload.DriveUploader} uploader
 * @param {string|Element|undefined=} opt_dropZone
 * @param {string|Element|undefined=} opt_progressBar
 * @param {function(boolean, Object)=} opt_callback
 */
kt.upload.Uploader = function(uploader, opt_dropZone, opt_progressBar,
                              opt_callback) {
  this.dropZone_ = goog.dom.getElement(opt_dropZone || null);
  if (this.dropZone_) {
    this.fileDropHandler_ = new goog.events.FileDropHandler(
        this.dropZone_, true);
    this.fileDropHandler_.listen(goog.events.FileDropHandler.EventType.DROP,
        function(e) {

          this.handleFile_(e.getBrowserEvent().dataTransfer.files[0]);
        }, false, this);
  }
  /*
  this.uploadInput_ = goog.dom.getElement(opt_uploadInput);
  if (this.uploadInput_) {
    //TODO:
  }
  */

  this.progressBar_ = goog.dom.getElement(opt_progressBar || null);

  this.setState_(kt.upload.DriveUploader.State.LOADING);

  this.uploader_ = uploader;
  this.uploader_.listen(kt.upload.DriveUploader.EventType.STATE_CHANGE,
      function(e) {
        this.setState_(e.state);
        if (e.state == kt.upload.DriveUploader.State.UPLOADING) {
          this.setProgress_(e.progress);
        }
        if (e.state == kt.upload.DriveUploader.State.DONE) {
          if (opt_callback) {
            opt_callback(e.success, e.response);
          }
        }
      }, false, this);
  if (this.uploader_.getState() == kt.upload.DriveUploader.State.READY) {
    this.setState_(kt.upload.DriveUploader.State.READY);
  } else {
    this.uploader_.init();
  }
};


/**
 * @param {kt.upload.DriveUploader.State} state
 * @private
 */
kt.upload.Uploader.prototype.setState_ = function(state) {
  if (this.dropZone_) {
    goog.style.setElementShown(
        this.dropZone_, state == kt.upload.DriveUploader.State.READY);
  }
  if (this.progressBar_) {
    goog.style.setElementShown(
        this.progressBar_, state == kt.upload.DriveUploader.State.UPLOADING);
  }
};


/**
 * @param {number} progress
 * @private
 */
kt.upload.Uploader.prototype.setProgress_ = function(progress) {
  if (this.progressBar_) {
    this.progressBar_.style.width = (100 * progress) + '%';
    goog.dom.setTextContent(this.progressBar_,
                            Math.round(1000 * progress) / 10 + '%');
  }
};


/**
 * @param {File} file
 * @private
 */
kt.upload.Uploader.prototype.handleFile_ = function(file) {
  this.uploader_.upload(file);
};

kt.expose.symbol('kt.upload.Uploader', kt.upload.Uploader);
