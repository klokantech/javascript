goog.provide('kt.expose');

/**
 * @define {boolean} Enables or disables generated exports.
 */
kt.expose.GENERATE = false;

/**
 * @param {string} publicPath Unobfuscated name to export.
 * @param {*} object Object the name should point to.
 * @param {Object=} opt_objectToExportTo The object to add the path to; default
 *     is goog.global.
 */
kt.expose.symbol =
    kt.expose.GENERATE ? goog.exportSymbol : goog.nullFunction;

/**
 * @param {Object} object Object whose static property is being exported.
 * @param {string} publicName Unobfuscated name to export.
 * @param {*} symbol Object the name should point to.
 */
kt.expose.property =
    kt.expose.GENERATE ? goog.exportProperty : goog.nullFunction;
