goog.provide('kt.MultiComplete');

goog.require('goog.ui.ac.ArrayMatcher');
goog.require('goog.ui.ac.AutoComplete');
goog.require('goog.ui.ac.InputHandler');
goog.require('goog.ui.ac.RemoteArrayMatcher');
goog.require('goog.ui.ac.Renderer');

goog.require('kt.expose');



/**
 * @param {!Element|!string} container Container element.
 * @param {!Array|!string} data Array of completable values or url.
 * @param {boolean=} opt_useSimilar Whether to use similar matches.
 * @constructor
 * @extends {goog.ui.ac.AutoComplete}
 */
kt.MultiComplete = function(container, data, opt_useSimilar) {
  /**
   * @type {!Element}
   * @protected
   */
  this.container = /** @type {!Element} */(goog.dom.getElement(container));

  /**
   * @type {!Element}
   * @protected
   */
  this.inputElement = goog.dom.createDom(goog.dom.TagName.INPUT,
                                         {type: 'text'});
  goog.dom.appendChild(this.container, this.inputElement);

  /**
   * @type {!goog.ui.ac.ArrayMatcher|!goog.ui.ac.RemoteArrayMatcher}
   * @protected
   */
  this.matcher = goog.isArray(data) ?
                     new goog.ui.ac.ArrayMatcher(data, opt_useSimilar) :
                     new goog.ui.ac.RemoteArrayMatcher(data, opt_useSimilar);

  /**
   * @type {!goog.ui.ac.Renderer}
   * @protected
   */
  this.renderer = new goog.ui.ac.Renderer(this.container.parentElement,
                                          undefined, true);

  /**
   * @type {!goog.ui.ac.InputHandler}
   * @protected
   */
  this.handler = new goog.ui.ac.InputHandler(null, null, false);

  goog.base(this, this.matcher, this.renderer, this.handler);

  this.handler.attachAutoComplete(this);
  this.handler.attachInputs(this.inputElement);
  this.handler.setPreventDefaultOnTab(true);

  /**
   * @type {!Array.<{val: !string, el: !Element, closer: !Element}>}
   * @protected
   */
  this.values = [];

  goog.events.listen(this, goog.ui.ac.AutoComplete.EventType.UPDATE,
      function(e) {
        this.addValue(e.row.toString());
        this.handler.setValue('');
      }, false, this);

  // look & feel
  goog.events.listen(this.container, goog.events.EventType.CLICK,
      function(e) {
        this.inputElement.focus();
      }, false, this);

  goog.events.listen(this.inputElement, [goog.events.EventType.CHANGE,
                                         goog.events.EventType.KEYDOWN],
  function(e) {
    this.inputElement.size = this.inputElement.value.length + 1;
  }, false, this);

  goog.events.listen(this.inputElement, goog.events.EventType.KEYDOWN,
      function(e) {
        // backspacing
        if (this.inputElement.value.length == 0 && e.keyCode == 8) {
          this.removeValue();
        }
        // do not close on enter
        if (e.keyCode == 13 && !this.isOpen()) {
          e.stopPropagation();
          e.preventDefault();
        }
      }, false, this);
};
goog.inherits(kt.MultiComplete, goog.ui.ac.AutoComplete);


/** @inheritDoc */
kt.MultiComplete.prototype.dismiss = function() {
  goog.base(this, 'dismiss');
  this.inputElement.value = '';
};


/** @inheritDoc */
kt.MultiComplete.prototype.renderRows = function(rows, opt_options) {
  var newRows = goog.array.filter(rows, function(el, i, arr) {
    var label = el.toString();
    return goog.array.every(this.values, function(el, i, arr) {
      return el.val != label;
    });
  }, this);
  goog.base(this, 'renderRows', newRows, opt_options);
};


/**
 * @param {string} v
 * @protected
 */
kt.MultiComplete.prototype.addValue = function(v) {
  var closer = goog.dom.createDom(goog.dom.TagName.A,
      {href: '#', 'class': 'mc-tag-remove'}, 'X');
  var element = goog.dom.createDom(goog.dom.TagName.DIV, 'mc-tag', v, closer);

  var newLength = this.values.push({val: v, el: element, closer: closer});

  goog.events.listen(closer, goog.events.EventType.CLICK, function(e) {
    this.removeValue(newLength - 1);
    this.inputElement.focus();
    e.preventDefault();
  }, false, this);

  goog.dom.insertSiblingBefore(element, this.inputElement);
};


/**
 * @param {!string|!number=} opt_v String or index,
 *                                 if undefined, removes the last element.
 * @protected
 */
kt.MultiComplete.prototype.removeValue = function(opt_v) {
  if (goog.isString(opt_v)) {
    opt_v = goog.array.findIndex(this.values, function(el, i, arr) {
      return el.val == opt_v;
    });
  }
  var payload = goog.isDefAndNotNull(opt_v) ?
                this.values[opt_v] : this.values.pop();
  if (goog.isDefAndNotNull(payload)) {
    goog.events.removeAll(payload.closer);
    goog.dom.removeNode(payload.el);
    if (goog.isDefAndNotNull(opt_v)) delete this.values[opt_v];
  }
};


/**
 * @return {!Array.<string>}
 */
kt.MultiComplete.prototype.getValues = function() {
  return /** @type {!Array.<string>} */(
      goog.array.map(this.values, function(el, i, arr) {
        return el.val;
      }));
};

kt.expose.symbol('kt.MultiComplete', kt.MultiComplete);
