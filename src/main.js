goog.provide('kt.decorate');

goog.require('kt.expose');

/**
 * AUtomatically decorates the elements.
 */
kt.decorate = function() {
  alert('test');
};

kt.expose.symbol('kt.decorate', kt.decorate);
