goog.provide('kt.decorate');

goog.require('kt.Nominatim');
goog.require('kt.alert');
goog.require('kt.expose');


/**
 * AUtomatically decorates the elements.
 */
kt.decorate = function() {
  //TODO: decorate controls when it makes sense
  goog.array.forEach(goog.dom.getElementsByClass('autocomplete-nominatim'),
      function(el, i, arr) {
        new kt.Nominatim(el);
      });
};

kt.expose.symbol('kt.decorate', kt.decorate);
