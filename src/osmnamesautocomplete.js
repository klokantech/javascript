/**
 * Copyright (C) 2016 Klokan Technologies GmbH (info@klokantech.com)
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

goog.provide('kt.OsmNamesAutocomplete');
goog.provide('kt.OsmNamesMatcher');

goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.net.XhrIo');
goog.require('goog.ui.ac.AutoComplete');
goog.require('goog.ui.ac.InputHandler');
goog.require('goog.ui.ac.Renderer');

goog.require('kt.expose');



/**
* @param {!Element|string} input Input element or text area.
* @param {boolean=} opt_hash Use location hash for permalink.
* @param {string=} opt_url The Uri of the OSM Names service.
* @constructor
* @extends {goog.ui.ac.AutoComplete}
*/
kt.OsmNamesAutocomplete = function(input, opt_hash, opt_url) {
  /**
   * @type {goog.Uri.QueryData}
   * @private
   */
  this.parsedHash_ = null;

  if (opt_hash) {
    this.parsedHash_ = new goog.Uri.QueryData((location.hash || '').substr(1));
  }

  // Create a custom renderer that renders rich rows returned from server.
  var customRenderer = {};
  customRenderer.renderRow = function(row, token, node) {
    node.innerHTML = row.data['formatted_name'] +
        ' <i>(' + row.data['formatted_type'] + ')</i>';
  };

  /**
  * @type {!Element}
  * @private
  */
  this.input_ = /** @type {!Element} */(goog.dom.getElement(input));

  /**
  * A standard renderer that uses a custom row renderer to display the
  * rich rows generated by this autocomplete widget.
  * @type {!goog.ui.ac.Renderer}
  */
  var renderer = new goog.ui.ac.Renderer(null, customRenderer);
  renderer.setWidthProvider(this.input_);

  /**
  * A remote matcher that parses rich results returned via JSONP from a server.
  * @type {!kt.OsmNamesMatcher}
  * @protected
  * @suppress {underscore}
  */
  this.matcher_ = new kt.OsmNamesMatcher(opt_url, this.parsedHash_,
                                         this.input_);

  /**
  * An input handler that calls select on a row when it is selected.
  * @type {!goog.ui.ac.InputHandler}
  * @private
  */
  this.inputhandler_ = new goog.ui.ac.InputHandler(null, null, false);
  this.inputhandler_.setThrottleTime(300);
  this.inputhandler_.setUpdateDuringTyping(false);
  this.inputhandler_.attachAutoComplete(this);

  // Create the widget and connect it to the input handler.
  goog.base(this, this.matcher_, renderer, this.inputhandler_);

  /**
   * @type {boolean}
   * @private
   */
  this.enabled_ = false;

  this.listen(goog.ui.ac.AutoComplete.EventType.UPDATE, function(e) {
    this.input_.value = e.row ? e.row['formatted_name'] : '';
  }, false, this);

  this.enable(true);

  if (this.parsedHash_) {
    var q = this.parsedHash_.get('q');
    if (q && goog.isString(q)) {
      setTimeout(goog.bind(function() {
        this.input_.value = q.toString();
        this.inputhandler_.update();
      }, this), 0);
    }
  }
};
goog.inherits(kt.OsmNamesAutocomplete, goog.ui.ac.AutoComplete);


/**
 * @param {boolean} enable
 */
kt.OsmNamesAutocomplete.prototype.enable = function(enable) {
  if (this.enabled_ != enable) {
    this.enabled_ = enable;
    if (enable) {
      this.inputhandler_.attachInput(this.input_);
    } else {
      this.inputhandler_.detachInput(this.input_);
    }
  }
};


/**
 * @param {function(!Array.<number>)} callback
 * @param {boolean=} opt_forHilite
 */
kt.OsmNamesAutocomplete.prototype.registerCallback =
    function(callback, opt_forHilite) {
  if (opt_forHilite) {
    goog.events.listen(this.renderer_,
        goog.ui.ac.AutoComplete.EventType.ROW_HILITE, function(e) {
          if (e.row) {
            callback(e.row);
          }
        }, false, this);
  }

  goog.events.listen(this, goog.ui.ac.AutoComplete.EventType.UPDATE,
      function(e) {
        if (e.row) {
          callback(e.row);
        }
      }, false, this);

  var geocoder_search = goog.bind(function(e) {
    e.preventDefault();
    if (this.enabled_) {
      this.search(this.input_.value, 1, goog.bind(function(tok, results) {
        var result = results[0];
        if (result) {
          callback(result);
        }
      }, this));
    }
  }, this);
  var form = goog.dom.getAncestorByTagNameAndClass(this.input_,
                                                   goog.dom.TagName.FORM);
  if (form) {
    goog.events.listen(form, goog.events.EventType.SUBMIT, geocoder_search);
  }
  goog.events.listen(this.input_,
                     ['webkitspeechchange', 'speechchange'], geocoder_search);
};


/**
* Calls matchHandler on a set of matching rows retrieved from server.
* @param {string} token The text that should be matched; passed to the server
*     as the 'token' query param.
* @param {number} maxMatches The maximum number of matches requested from the
*     server; passed as the 'max_matches' query param.  The server is
*     responsible for limiting the number of matches that are returned.
* @param {Function} matchHandler Callback to execute on the result after
*     matching.
*/
kt.OsmNamesAutocomplete.prototype.search =
    function(token, maxMatches, matchHandler) {
  this.matcher_.requestMatchingRows(token, maxMatches, matchHandler);
};

kt.expose.symbol('kt.OsmNamesAutocomplete', kt.OsmNamesAutocomplete);
kt.expose.symbol('kt.OsmNamesAutocomplete.prototype.registerCallback',
                 kt.OsmNamesAutocomplete.prototype.registerCallback);



/**
* An array matcher that requests matches via JSONP.
* @param {string|undefined} url The Uri of the web service.
* @param {goog.Uri.QueryData|undefined} hashQueryData
* @param {?Element} input
* @constructor
*/
kt.OsmNamesMatcher = function(url, hashQueryData, input) {
  /**
  * @type {string}
  * @private
  */
  this.url_ = url || 'https://osmnames.klokantech.com/';

  /**
   * @type {goog.Uri.QueryData}
   * @private
   */
  this.hashQueryData_ = hashQueryData || null;

  /**
   * @type {?Element}
   * @private
   */
  this.input_ = input;
};


/**
* Retrieve a set of matching rows from the server via JSONP and convert them
* into rich rows.
* @param {string} token The text that should be matched; passed to the server
*     as the 'token' query param.
* @param {number} maxMatches The maximum number of matches requested from the
*     server; passed as the 'max_matches' query param.  The server is
*     responsible for limiting the number of matches that are returned.
* @param {Function} matchHandler Callback to execute on the result after
*     matching.
*/
kt.OsmNamesMatcher.prototype.requestMatchingRows =
    function(token, maxMatches, matchHandler) {

  // Ignore token which is empty or just one letter
  if (!token || token.length == 1) {
    matchHandler(token, []);
    return;
  }

  // After direct request cancel autocomplete
  if (maxMatches == 1) this.oldtoken_ = token;
  if (maxMatches > 1 && token === this.oldtoken_) return;

  // Cancel old request when we have a new one
  if (this.request_) {
    this.request_.abort();
    this.request_ = null;
  }

  var qd = this.hashQueryData_ ?
      this.hashQueryData_.clone() : new goog.Uri.QueryData();
  qd.set('format', 'json');
  qd.set('autocomplete', '1');
  qd.set('count', maxMatches.toString());
  qd.set('q', token);
  if (this.hashQueryData_) {
    this.hashQueryData_.set('q', token);
    location.hash = this.hashQueryData_.toString();
  }

  // Make sure the keys are properly sorted to optimize caching
  var keys = qd.getKeys();
  goog.array.sort(keys);

  var url = this.url_ + '?';
  goog.array.forEach(keys, function(key, i) {
    if (i != 0) {
      url += '&';
    }
    url += encodeURIComponent(key) + '=' +
           encodeURIComponent(qd.get(key).toString());
  });

  if (this.input_) {
    goog.dom.classlist.add(this.input_, 'working');
  }

  this.request_ = goog.net.XhrIo.send(url, goog.bind(function(e) {
    if (this.input_) {
      goog.dom.classlist.remove(this.input_, 'working');
    }

    var xhr = e.target;
    if (!xhr.isSuccess()) {
      return;
    }
    var response = xhr.getResponseJson();
    var results = response['results'];

    var addFormattedNameAndType = function(results) {
      var newResults = [];
      goog.array.forEach(results, function(item, i, arr) {
        var type = item['type'];
        if (item['class'] == 'street') {
          type = item['class'];
        }

        var enhanced = goog.object.clone(item);
        enhanced['formatted_name'] = item['display_name'];
        enhanced['formatted_type'] = type;
        newResults.push(enhanced);
      }, this);
      return newResults;
    };

    matchHandler(token, addFormattedNameAndType(results));

    this.request_ = null;
  }, this));
};
