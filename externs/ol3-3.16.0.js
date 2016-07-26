/**
 * @type {Object}
 */
var olx;


/**
 * @constructor
 */
var GeoJSONObject = function() {};


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONObject.prototype.bbox;


/**
 * @type {string}
 */
GeoJSONObject.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONObject.prototype.crs;


/**
 * @constructor
 */
var GeoJSONCRS = function() {};


/**
 * @type {string}
 */
GeoJSONCRS.prototype.type;


/**
 * @type {GeoJSONCRSCode|GeoJSONCRSName|GeoJSONLink}
 */
GeoJSONCRS.prototype.properties;


/**
 * @constructor
 */
var GeoJSONCRSCode = function() {};


/**
 * @constructor
 */
var GeoJSONCRSName = function() {};


/**
 * @type {string}
 */
GeoJSONCRSName.prototype.code;


/**
 * @type {string}
 */
GeoJSONCRSName.prototype.name;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONGeometry = function() {};


/**
 * @type {!Array.<number>|!Array.<!Array.<number>>|!Array.<!Array.<!Array.<number>>>}
 */
GeoJSONGeometry.prototype.coordinates;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONGeometryCollection = function() {};


/**
 * @type {Array.<GeoJSONGeometry>}
 */
GeoJSONGeometryCollection.prototype.geometries;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONFeature = function() {};


/**
 * @type {GeoJSONGeometry|GeoJSONGeometryCollection}
 */
GeoJSONFeature.prototype.geometry;


/**
 * @type {number|string|undefined}
 */
GeoJSONFeature.prototype.id;


/**
 * @type {Object.<string, *>}
 */
GeoJSONFeature.prototype.properties;


/**
 * @constructor
 * @extends {GeoJSONObject}
 */
var GeoJSONFeatureCollection = function() {};


/**
 * @type {Array.<GeoJSONFeature>}
 */
GeoJSONFeatureCollection.prototype.features;


/**
 * @constructor
 */
var GeoJSONLink = function() {};


/**
 * @type {string}
 */
GeoJSONLink.prototype.href;


/**
 * @type {string}
 */
GeoJSONLink.prototype.type;


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONGeometry.prototype.bbox;


/**
 * @type {string}
 */
GeoJSONGeometry.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONGeometry.prototype.crs;


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONGeometryCollection.prototype.bbox;


/**
 * @type {string}
 */
GeoJSONGeometryCollection.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONGeometryCollection.prototype.crs;


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONFeature.prototype.bbox;


/**
 * @type {string}
 */
GeoJSONFeature.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONFeature.prototype.crs;


/**
 * @type {!Array.<number>|undefined}
 */
GeoJSONFeatureCollection.prototype.bbox;


/**
 * @type {string}
 */
GeoJSONFeatureCollection.prototype.type;


/**
 * @type {GeoJSONCRS|undefined}
 */
GeoJSONFeatureCollection.prototype.crs;


/**
 * @type {Object}
 */
var ol;


/**
 * @constructor
 */
ol.Disposable = function() {};


/**
 * @type {Object}
 */
ol.render;


/**
 * @constructor
 */
ol.render.IReplayGroup = function() {};


/**
 * @type {Object}
 */
ol.format;


/**
 * @constructor
 */
ol.format.XML = function() {};


/**
 * @type {Object}
 */
ol.animation;


/**
 * @param {olx.animation.BounceOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.bounce = function(options) {};


/**
 * @param {olx.animation.PanOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.pan = function(options) {};


/**
 * @param {olx.animation.RotateOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.rotate = function(options) {};


/**
 * @param {olx.animation.ZoomOptions} options
 * @return {ol.PreRenderFunction}
 */
ol.animation.zoom = function(options) {};


/**
 * @constructor
 * @param {olx.AttributionOptions} options
 */
ol.Attribution = function(options) {};


/**
 * @return {string}
 */
ol.Attribution.prototype.getHTML = function() {};


/**
 * @constructor
 */
ol.CollectionEvent = function() {};


/**
 * @type {*}
 */
ol.CollectionEvent.prototype.element;


/**
 * @constructor
 * @extends {ol.Object}
 * @param {Array.<T>=} opt_array
 * @template T
 */
ol.Collection = function(opt_array) {};


/**
 */
ol.Collection.prototype.clear = function() {};


/**
 * @param {Array.<T>} arr
 * @return {ol.Collection.<T>}
 */
ol.Collection.prototype.extend = function(arr) {};


/**
 * @param {Function} f
 * @param {S=} opt_this
 * @template S
 */
ol.Collection.prototype.forEach = function(f, opt_this) {};


/**
 * @return {Array.<T>}
 */
ol.Collection.prototype.getArray = function() {};


/**
 * @param {number} index
 * @return {T}
 */
ol.Collection.prototype.item = function(index) {};


/**
 * @return {number}
 */
ol.Collection.prototype.getLength = function() {};


/**
 * @param {number} index
 * @param {T} elem
 */
ol.Collection.prototype.insertAt = function(index, elem) {};


/**
 * @return {T|undefined}
 */
ol.Collection.prototype.pop = function() {};


/**
 * @param {T} elem
 * @return {number}
 */
ol.Collection.prototype.push = function(elem) {};


/**
 * @param {T} elem
 * @return {T|undefined}
 */
ol.Collection.prototype.remove = function(elem) {};


/**
 * @param {number} index
 * @return {T|undefined}
 */
ol.Collection.prototype.removeAt = function(index) {};


/**
 * @param {number} index
 * @param {T} elem
 */
ol.Collection.prototype.setAt = function(index, elem) {};


/**
 * @type {Object}
 */
ol.colorlike;


/**
 * @param {ol.Color|ol.ColorLike} color
 * @return {ol.ColorLike}
 */
ol.colorlike.asColorLike = function(color) {};


/**
 * @type {Object}
 */
ol.coordinate;


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.Coordinate} delta
 * @return {ol.Coordinate}
 */
ol.coordinate.add = function(coordinate, delta) {};


/**
 * @param {number=} opt_fractionDigits
 * @return {ol.CoordinateFormatType}
 */
ol.coordinate.createStringXY = function(opt_fractionDigits) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @param {string} template
 * @param {number=} opt_fractionDigits
 * @return {string}
 */
ol.coordinate.format = function(coordinate, template, opt_fractionDigits) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} angle
 * @return {ol.Coordinate}
 */
ol.coordinate.rotate = function(coordinate, angle) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @param {number=} opt_fractionDigits
 * @return {string}
 */
ol.coordinate.toStringHDMS = function(coordinate, opt_fractionDigits) {};


/**
 * @param {ol.Coordinate|undefined} coordinate
 * @param {number=} opt_fractionDigits
 * @return {string}
 */
ol.coordinate.toStringXY = function(coordinate, opt_fractionDigits) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.DeviceOrientationOptions=} opt_options
 */
ol.DeviceOrientation = function(opt_options) {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getAlpha = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getBeta = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getGamma = function() {};


/**
 * @return {number|undefined}
 */
ol.DeviceOrientation.prototype.getHeading = function() {};


/**
 * @return {boolean}
 */
ol.DeviceOrientation.prototype.getTracking = function() {};


/**
 * @param {boolean} tracking
 */
ol.DeviceOrientation.prototype.setTracking = function(tracking) {};


/**
 * @type {Object}
 */
ol.easing;


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.easeIn = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.easeOut = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.inAndOut = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.linear = function(t) {};


/**
 * @param {number} t
 * @return {number}
 */
ol.easing.upAndDown = function(t) {};


/**
 * @type {Object}
 */
ol.extent;


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @return {ol.Extent}
 */
ol.extent.boundingExtent = function(coordinates) {};


/**
 * @param {ol.Extent} extent
 * @param {number} value
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.extent.buffer = function(extent, value, opt_extent) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.Coordinate} coordinate
 * @return {boolean}
 */
ol.extent.containsCoordinate = function(extent, coordinate) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.containsExtent = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
ol.extent.containsXY = function(extent, x, y) {};


/**
 * @return {ol.Extent}
 */
ol.extent.createEmpty = function() {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.equals = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {ol.Extent}
 */
ol.extent.extend = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getBottomLeft = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getBottomRight = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getCenter = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {number}
 */
ol.extent.getHeight = function(extent) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.extent.getIntersection = function(extent1, extent2, opt_extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Size}
 */
ol.extent.getSize = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getTopLeft = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.Coordinate}
 */
ol.extent.getTopRight = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @return {number}
 */
ol.extent.getWidth = function(extent) {};


/**
 * @param {ol.Extent} extent1
 * @param {ol.Extent} extent2
 * @return {boolean}
 */
ol.extent.intersects = function(extent1, extent2) {};


/**
 * @param {ol.Extent} extent
 * @return {boolean}
 */
ol.extent.isEmpty = function(extent) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.TransformFunction} transformFn
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.extent.applyTransform = function(extent, transformFn, opt_extent) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {ol.geom.Geometry|Object.<string, *>=} opt_geometryOrProperties
 */
ol.Feature = function(opt_geometryOrProperties) {};


/**
 * @return {ol.Feature}
 */
ol.Feature.prototype.clone = function() {};


/**
 * @return {ol.geom.Geometry|undefined}
 */
ol.Feature.prototype.getGeometry = function() {};


/**
 * @return {number|string|undefined}
 */
ol.Feature.prototype.getId = function() {};


/**
 * @return {string}
 */
ol.Feature.prototype.getGeometryName = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.FeatureStyleFunction}
 */
ol.Feature.prototype.getStyle = function() {};


/**
 * @return {ol.FeatureStyleFunction|undefined}
 */
ol.Feature.prototype.getStyleFunction = function() {};


/**
 * @param {ol.geom.Geometry|undefined} geometry
 */
ol.Feature.prototype.setGeometry = function(geometry) {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.FeatureStyleFunction} style
 */
ol.Feature.prototype.setStyle = function(style) {};


/**
 * @param {number|string|undefined} id
 */
ol.Feature.prototype.setId = function(id) {};


/**
 * @param {string} name
 */
ol.Feature.prototype.setGeometryName = function(name) {};


/**
 * @type {Object}
 */
ol.featureloader;


/**
 * @param {string|ol.FeatureUrlFunction} url
 * @param {ol.format.Feature} format
 * @return {ol.FeatureLoader}
 */
ol.featureloader.tile = function(url, format) {};


/**
 * @param {string|ol.FeatureUrlFunction} url
 * @param {ol.format.Feature} format
 * @return {ol.FeatureLoader}
 */
ol.featureloader.xhr = function(url, format) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.GeolocationOptions=} opt_options
 */
ol.Geolocation = function(opt_options) {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAccuracy = function() {};


/**
 * @return {!ol.geom.Geometry}
 */
ol.Geolocation.prototype.getAccuracyGeometry = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAltitude = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getAltitudeAccuracy = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getHeading = function() {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.Geolocation.prototype.getPosition = function() {};


/**
 * @return {ol.proj.Projection|undefined}
 */
ol.Geolocation.prototype.getProjection = function() {};


/**
 * @return {number|undefined}
 */
ol.Geolocation.prototype.getSpeed = function() {};


/**
 * @return {boolean}
 */
ol.Geolocation.prototype.getTracking = function() {};


/**
 * @return {GeolocationPositionOptions|undefined}
 */
ol.Geolocation.prototype.getTrackingOptions = function() {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.Geolocation.prototype.setProjection = function(projection) {};


/**
 * @param {boolean} tracking
 */
ol.Geolocation.prototype.setTracking = function(tracking) {};


/**
 * @param {GeolocationPositionOptions} options
 */
ol.Geolocation.prototype.setTrackingOptions = function(options) {};


/**
 * @constructor
 * @param {olx.GraticuleOptions=} opt_options
 */
ol.Graticule = function(opt_options) {};


/**
 * @return {ol.Map}
 */
ol.Graticule.prototype.getMap = function() {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.Graticule.prototype.getMeridians = function() {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.Graticule.prototype.getParallels = function() {};


/**
 * @param {ol.Map} map
 */
ol.Graticule.prototype.setMap = function(map) {};


/**
 * @type {Object}
 */
ol.has;


/**
 * @type {number}
 */
ol.has.DEVICE_PIXEL_RATIO;


/**
 * @type {boolean}
 */
ol.has.CANVAS;


/**
 * @type {boolean}
 */
ol.has.DEVICE_ORIENTATION;


/**
 * @type {boolean}
 */
ol.has.GEOLOCATION;


/**
 * @type {boolean}
 */
ol.has.TOUCH;


/**
 * @type {boolean}
 */
ol.has.WEBGL;


/**
 * @constructor
 */
ol.Image = function() {};


/**
 * @param {Object=} opt_context
 * @return {HTMLCanvasElement|Image|HTMLVideoElement}
 */
ol.Image.prototype.getImage = function(opt_context) {};


/**
 * @constructor
 */
ol.ImageTile = function() {};


/**
 */
ol.ImageTile.prototype.getImage = function() {};


/**
 * @constructor
 * @param {number} decay
 * @param {number} minVelocity
 * @param {number} delay
 */
ol.Kinetic = function(decay, minVelocity, delay) {};


/**
 * @type {Object}
 */
ol.loadingstrategy;


/**
 * @param {ol.Extent} extent
 * @param {number} resolution
 * @return {Array.<ol.Extent>}
 */
ol.loadingstrategy.all = function(extent, resolution) {};


/**
 * @param {ol.Extent} extent
 * @param {number} resolution
 * @return {Array.<ol.Extent>}
 */
ol.loadingstrategy.bbox = function(extent, resolution) {};


/**
 * @param {ol.tilegrid.TileGrid} tileGrid
 * @return {Function}
 */
ol.loadingstrategy.tile = function(tileGrid) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.MapOptions} options
 */
ol.Map = function(options) {};


/**
 * @param {ol.control.Control} control
 */
ol.Map.prototype.addControl = function(control) {};


/**
 * @param {ol.interaction.Interaction} interaction
 */
ol.Map.prototype.addInteraction = function(interaction) {};


/**
 * @param {ol.layer.Base} layer
 */
ol.Map.prototype.addLayer = function(layer) {};


/**
 * @param {ol.Overlay} overlay
 */
ol.Map.prototype.addOverlay = function(overlay) {};


/**
 * @param {...ol.PreRenderFunction} var_args
 */
ol.Map.prototype.beforeRender = function(var_args) {};


/**
 * @param {ol.Pixel} pixel
 * @param {Function} callback
 * @param {S=} opt_this
 * @param {Function=} opt_layerFilter
 * @param {U=} opt_this2
 * @return {T|undefined}
 * @template S,T,U
 */
ol.Map.prototype.forEachFeatureAtPixel = function(pixel, callback, opt_this, opt_layerFilter, opt_this2) {};


/**
 * @param {ol.Pixel} pixel
 * @param {Function} callback
 * @param {S=} opt_this
 * @param {Function=} opt_layerFilter
 * @param {U=} opt_this2
 * @return {T|undefined}
 * @template S,T,U
 */
ol.Map.prototype.forEachLayerAtPixel = function(pixel, callback, opt_this, opt_layerFilter, opt_this2) {};


/**
 * @param {ol.Pixel} pixel
 * @param {Function=} opt_layerFilter
 * @param {U=} opt_this
 * @return {boolean}
 * @template U
 */
ol.Map.prototype.hasFeatureAtPixel = function(pixel, opt_layerFilter, opt_this) {};


/**
 * @param {Event} event
 * @return {ol.Coordinate}
 */
ol.Map.prototype.getEventCoordinate = function(event) {};


/**
 * @param {Event} event
 * @return {ol.Pixel}
 */
ol.Map.prototype.getEventPixel = function(event) {};


/**
 * @return {Element|string|undefined}
 */
ol.Map.prototype.getTarget = function() {};


/**
 * @return {Element}
 */
ol.Map.prototype.getTargetElement = function() {};


/**
 * @param {ol.Pixel} pixel
 * @return {ol.Coordinate}
 */
ol.Map.prototype.getCoordinateFromPixel = function(pixel) {};


/**
 * @return {ol.Collection.<ol.control.Control>}
 */
ol.Map.prototype.getControls = function() {};


/**
 * @return {ol.Collection.<ol.Overlay>}
 */
ol.Map.prototype.getOverlays = function() {};


/**
 * @param {string|number} id
 * @return {ol.Overlay}
 */
ol.Map.prototype.getOverlayById = function(id) {};


/**
 * @return {ol.Collection.<ol.interaction.Interaction>}
 */
ol.Map.prototype.getInteractions = function() {};


/**
 * @return {ol.layer.Group}
 */
ol.Map.prototype.getLayerGroup = function() {};


/**
 * @return {ol.Collection.<ol.layer.Base>}
 */
ol.Map.prototype.getLayers = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {ol.Pixel}
 */
ol.Map.prototype.getPixelFromCoordinate = function(coordinate) {};


/**
 * @return {ol.Size|undefined}
 */
ol.Map.prototype.getSize = function() {};


/**
 * @return {ol.View}
 */
ol.Map.prototype.getView = function() {};


/**
 * @return {Element}
 */
ol.Map.prototype.getViewport = function() {};


/**
 */
ol.Map.prototype.renderSync = function() {};


/**
 */
ol.Map.prototype.render = function() {};


/**
 * @param {ol.control.Control} control
 * @return {ol.control.Control|undefined}
 */
ol.Map.prototype.removeControl = function(control) {};


/**
 * @param {ol.interaction.Interaction} interaction
 * @return {ol.interaction.Interaction|undefined}
 */
ol.Map.prototype.removeInteraction = function(interaction) {};


/**
 * @param {ol.layer.Base} layer
 * @return {ol.layer.Base|undefined}
 */
ol.Map.prototype.removeLayer = function(layer) {};


/**
 * @param {ol.Overlay} overlay
 * @return {ol.Overlay|undefined}
 */
ol.Map.prototype.removeOverlay = function(overlay) {};


/**
 * @param {ol.layer.Group} layerGroup
 */
ol.Map.prototype.setLayerGroup = function(layerGroup) {};


/**
 * @param {ol.Size|undefined} size
 */
ol.Map.prototype.setSize = function(size) {};


/**
 * @param {Element|string|undefined} target
 */
ol.Map.prototype.setTarget = function(target) {};


/**
 * @param {ol.View} view
 */
ol.Map.prototype.setView = function(view) {};


/**
 */
ol.Map.prototype.updateSize = function() {};


/**
 * @constructor
 */
ol.MapBrowserEvent = function() {};


/**
 * @type {Event}
 */
ol.MapBrowserEvent.prototype.originalEvent;


/**
 * @type {ol.Pixel}
 */
ol.MapBrowserEvent.prototype.pixel;


/**
 * @type {ol.Coordinate}
 */
ol.MapBrowserEvent.prototype.coordinate;


/**
 * @type {boolean}
 */
ol.MapBrowserEvent.prototype.dragging;


/**
 * @constructor
 */
ol.MapEvent = function() {};


/**
 * @type {ol.Map}
 */
ol.MapEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapEvent.prototype.frameState;


/**
 * @constructor
 */
ol.ObjectEvent = function() {};


/**
 * @type {string}
 */
ol.ObjectEvent.prototype.key;


/**
 * @type {*}
 */
ol.ObjectEvent.prototype.oldValue;


/**
 * @constructor
 * @extends {ol.Observable}
 * @param {Object.<string, *>=} opt_values
 */
ol.Object = function(opt_values) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Object.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Object.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Object.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Object.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Object.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Object.prototype.unset = function(key, opt_silent) {};


/**
 * @constructor
 * @extends {ol.Disposable}
 */
ol.Observable = function() {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Observable.unByKey = function(key) {};


/**
 */
ol.Observable.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Observable.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Observable.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Observable.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Observable.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Observable.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Observable.prototype.unByKey = function(key) {};


/**
 * @param {Function} childCtor
 * @param {Function} parentCtor
 */
ol.inherits = function(childCtor, parentCtor) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.OverlayOptions} options
 */
ol.Overlay = function(options) {};


/**
 * @return {Element|undefined}
 */
ol.Overlay.prototype.getElement = function() {};


/**
 * @return {number|string|undefined}
 */
ol.Overlay.prototype.getId = function() {};


/**
 * @return {ol.Map|undefined}
 */
ol.Overlay.prototype.getMap = function() {};


/**
 * @return {Array.<number>}
 */
ol.Overlay.prototype.getOffset = function() {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.Overlay.prototype.getPosition = function() {};


/**
 * @return {ol.OverlayPositioning}
 */
ol.Overlay.prototype.getPositioning = function() {};


/**
 * @param {Element|undefined} element
 */
ol.Overlay.prototype.setElement = function(element) {};


/**
 * @param {ol.Map|undefined} map
 */
ol.Overlay.prototype.setMap = function(map) {};


/**
 * @param {Array.<number>} offset
 */
ol.Overlay.prototype.setOffset = function(offset) {};


/**
 * @param {ol.Coordinate|undefined} position
 */
ol.Overlay.prototype.setPosition = function(position) {};


/**
 * @param {ol.OverlayPositioning} positioning
 */
ol.Overlay.prototype.setPositioning = function(positioning) {};


/**
 * @param {CanvasRenderingContext2D} context
 * @param {olx.render.ToContextOptions=} opt_options
 * @return {ol.render.canvas.Immediate}
 */
ol.render.toContext = function(context, opt_options) {};


/**
 * @type {Object}
 */
ol.size;


/**
 * @param {number|ol.Size} size
 * @param {ol.Size=} opt_size
 * @return {ol.Size}
 */
ol.size.toSize = function(size, opt_size) {};


/**
 * @constructor
 */
ol.Tile = function() {};


/**
 * @return {ol.TileCoord}
 */
ol.Tile.prototype.getTileCoord = function() {};


/**
 * @constructor
 */
ol.VectorTile = function() {};


/**
 * @return {ol.format.Feature}
 */
ol.VectorTile.prototype.getFormat = function() {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.VectorTile.prototype.setFeatures = function(features) {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.VectorTile.prototype.setProjection = function(projection) {};


/**
 * @param {ol.FeatureLoader} loader
 */
ol.VectorTile.prototype.setLoader = function(loader) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.ViewOptions=} opt_options
 */
ol.View = function(opt_options) {};


/**
 * @param {ol.Coordinate|undefined} center
 * @return {ol.Coordinate|undefined}
 */
ol.View.prototype.constrainCenter = function(center) {};


/**
 * @param {number|undefined} resolution
 * @param {number=} opt_delta
 * @param {number=} opt_direction
 * @return {number|undefined}
 */
ol.View.prototype.constrainResolution = function(resolution, opt_delta, opt_direction) {};


/**
 * @param {number|undefined} rotation
 * @param {number=} opt_delta
 * @return {number|undefined}
 */
ol.View.prototype.constrainRotation = function(rotation, opt_delta) {};


/**
 * @return {ol.Coordinate|undefined}
 */
ol.View.prototype.getCenter = function() {};


/**
 * @param {ol.Size} size
 * @return {ol.Extent}
 */
ol.View.prototype.calculateExtent = function(size) {};


/**
 * @return {ol.proj.Projection}
 */
ol.View.prototype.getProjection = function() {};


/**
 * @return {number|undefined}
 */
ol.View.prototype.getResolution = function() {};


/**
 * @return {Array.<number>|undefined}
 */
ol.View.prototype.getResolutions = function() {};


/**
 * @return {number}
 */
ol.View.prototype.getRotation = function() {};


/**
 * @return {number|undefined}
 */
ol.View.prototype.getZoom = function() {};


/**
 * @param {ol.geom.SimpleGeometry|ol.Extent} geometry
 * @param {ol.Size} size
 * @param {olx.view.FitOptions=} opt_options
 */
ol.View.prototype.fit = function(geometry, size, opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.Size} size
 * @param {ol.Pixel} position
 */
ol.View.prototype.centerOn = function(coordinate, size, position) {};


/**
 * @param {number} rotation
 * @param {ol.Coordinate=} opt_anchor
 */
ol.View.prototype.rotate = function(rotation, opt_anchor) {};


/**
 * @param {ol.Coordinate|undefined} center
 */
ol.View.prototype.setCenter = function(center) {};


/**
 * @param {number|undefined} resolution
 */
ol.View.prototype.setResolution = function(resolution) {};


/**
 * @param {number} rotation
 */
ol.View.prototype.setRotation = function(rotation) {};


/**
 * @param {number} zoom
 */
ol.View.prototype.setZoom = function(zoom) {};


/**
 * @type {Object}
 */
ol.xml;


/**
 * @param {Node} node
 * @param {boolean} normalizeWhitespace
 * @return {string}
 */
ol.xml.getAllTextContent = function(node, normalizeWhitespace) {};


/**
 * @param {string} xml
 * @return {Document}
 */
ol.xml.parse = function(xml) {};


/**
 * @type {Object}
 */
ol.webgl;


/**
 * @constructor
 */
ol.webgl.Context = function() {};


/**
 * @return {WebGLRenderingContext}
 */
ol.webgl.Context.prototype.getGL = function() {};


/**
 * @param {WebGLProgram} program
 * @return {boolean}
 */
ol.webgl.Context.prototype.useProgram = function(program) {};


/**
 * @type {Object}
 */
ol.tilegrid;


/**
 * @constructor
 * @param {olx.tilegrid.TileGridOptions} options
 */
ol.tilegrid.TileGrid = function(options) {};


/**
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.TileGrid.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.TileGrid.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.TileGrid.prototype.getResolutions = function() {};


/**
 * @param {ol.TileCoord} tileCoord
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.tilegrid.TileGrid.prototype.getTileCoordExtent = function(tileCoord, opt_extent) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.TileCoord=} opt_tileCoord
 * @return {ol.TileCoord}
 */
ol.tilegrid.TileGrid.prototype.getTileCoordForCoordAndResolution = function(coordinate, resolution, opt_tileCoord) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} z
 * @param {ol.TileCoord=} opt_tileCoord
 * @return {ol.TileCoord}
 */
ol.tilegrid.TileGrid.prototype.getTileCoordForCoordAndZ = function(coordinate, z, opt_tileCoord) {};


/**
 * @param {number} z
 * @return {number|ol.Size}
 */
ol.tilegrid.TileGrid.prototype.getTileSize = function(z) {};


/**
 * @param {olx.tilegrid.XYZOptions=} opt_options
 * @return {ol.tilegrid.TileGrid}
 */
ol.tilegrid.createXYZ = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.WMTSOptions} options
 */
ol.tilegrid.WMTS = function(options) {};


/**
 * @return {Array.<string>}
 */
ol.tilegrid.WMTS.prototype.getMatrixIds = function() {};


/**
 * @param {Object} matrixSet
 * @param {ol.Extent=} opt_extent
 * @return {ol.tilegrid.WMTS}
 */
ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet = function(matrixSet, opt_extent) {};


/**
 * @type {Object}
 */
ol.style;


/**
 * @constructor
 * @param {olx.style.AtlasManagerOptions=} opt_options
 */
ol.style.AtlasManager = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.style.Image}
 * @param {olx.style.CircleOptions=} opt_options
 */
ol.style.Circle = function(opt_options) {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Circle.prototype.getFill = function() {};


/**
 * @param {number} pixelRatio
 * @return {HTMLCanvasElement}
 */
ol.style.Circle.prototype.getImage = function(pixelRatio) {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getRadius = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Circle.prototype.getStroke = function() {};


/**
 * @constructor
 * @param {olx.style.FillOptions=} opt_options
 */
ol.style.Fill = function(opt_options) {};


/**
 * @return {ol.Color|ol.ColorLike}
 */
ol.style.Fill.prototype.getColor = function() {};


/**
 * @param {ol.Color|ol.ColorLike} color
 */
ol.style.Fill.prototype.setColor = function(color) {};


/**
 * @constructor
 * @extends {ol.style.Image}
 * @param {olx.style.IconOptions=} opt_options
 */
ol.style.Icon = function(opt_options) {};


/**
 */
ol.style.Icon.prototype.getAnchor = function() {};


/**
 * @param {number} pixelRatio
 * @return {Image|HTMLCanvasElement}
 */
ol.style.Icon.prototype.getImage = function(pixelRatio) {};


/**
 */
ol.style.Icon.prototype.getOrigin = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Icon.prototype.getSrc = function() {};


/**
 */
ol.style.Icon.prototype.getSize = function() {};


/**
 */
ol.style.Icon.prototype.load = function() {};


/**
 * @constructor
 * @param {ol.style.ImageOptions} options
 */
ol.style.Image = function(options) {};


/**
 * @return {number}
 */
ol.style.Image.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.style.Image.prototype.getRotateWithView = function() {};


/**
 * @return {number}
 */
ol.style.Image.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Image.prototype.getScale = function() {};


/**
 * @return {boolean}
 */
ol.style.Image.prototype.getSnapToPixel = function() {};


/**
 * @param {number} opacity
 */
ol.style.Image.prototype.setOpacity = function(opacity) {};


/**
 * @param {number} rotation
 */
ol.style.Image.prototype.setRotation = function(rotation) {};


/**
 * @param {number} scale
 */
ol.style.Image.prototype.setScale = function(scale) {};


/**
 * @constructor
 * @extends {ol.style.Image}
 * @param {olx.style.RegularShapeOptions} options
 */
ol.style.RegularShape = function(options) {};


/**
 */
ol.style.RegularShape.prototype.getAnchor = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getAngle = function() {};


/**
 * @return {ol.style.Fill}
 */
ol.style.RegularShape.prototype.getFill = function() {};


/**
 */
ol.style.RegularShape.prototype.getImage = function() {};


/**
 */
ol.style.RegularShape.prototype.getOrigin = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getPoints = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getRadius = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getRadius2 = function() {};


/**
 */
ol.style.RegularShape.prototype.getSize = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.RegularShape.prototype.getStroke = function() {};


/**
 * @constructor
 * @param {olx.style.StrokeOptions=} opt_options
 */
ol.style.Stroke = function(opt_options) {};


/**
 * @return {ol.Color|string}
 */
ol.style.Stroke.prototype.getColor = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Stroke.prototype.getLineCap = function() {};


/**
 * @return {Array.<number>}
 */
ol.style.Stroke.prototype.getLineDash = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Stroke.prototype.getLineJoin = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Stroke.prototype.getMiterLimit = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Stroke.prototype.getWidth = function() {};


/**
 * @param {ol.Color|string} color
 */
ol.style.Stroke.prototype.setColor = function(color) {};


/**
 * @param {string|undefined} lineCap
 */
ol.style.Stroke.prototype.setLineCap = function(lineCap) {};


/**
 * @param {Array.<number>} lineDash
 */
ol.style.Stroke.prototype.setLineDash = function(lineDash) {};


/**
 * @param {string|undefined} lineJoin
 */
ol.style.Stroke.prototype.setLineJoin = function(lineJoin) {};


/**
 * @param {number|undefined} miterLimit
 */
ol.style.Stroke.prototype.setMiterLimit = function(miterLimit) {};


/**
 * @param {number|undefined} width
 */
ol.style.Stroke.prototype.setWidth = function(width) {};


/**
 * @constructor
 * @param {olx.style.StyleOptions=} opt_options
 */
ol.style.Style = function(opt_options) {};


/**
 * @return {string|ol.geom.Geometry|ol.style.GeometryFunction}
 */
ol.style.Style.prototype.getGeometry = function() {};


/**
 * @return {ol.style.GeometryFunction}
 */
ol.style.Style.prototype.getGeometryFunction = function() {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Style.prototype.getFill = function() {};


/**
 * @return {ol.style.Image}
 */
ol.style.Style.prototype.getImage = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Style.prototype.getStroke = function() {};


/**
 * @return {ol.style.Text}
 */
ol.style.Style.prototype.getText = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Style.prototype.getZIndex = function() {};


/**
 * @param {string|ol.geom.Geometry|ol.style.GeometryFunction} geometry
 */
ol.style.Style.prototype.setGeometry = function(geometry) {};


/**
 * @param {number|undefined} zIndex
 */
ol.style.Style.prototype.setZIndex = function(zIndex) {};


/**
 * @constructor
 * @param {olx.style.TextOptions=} opt_options
 */
ol.style.Text = function(opt_options) {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getFont = function() {};


/**
 * @return {number}
 */
ol.style.Text.prototype.getOffsetX = function() {};


/**
 * @return {number}
 */
ol.style.Text.prototype.getOffsetY = function() {};


/**
 * @return {ol.style.Fill}
 */
ol.style.Text.prototype.getFill = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Text.prototype.getRotation = function() {};


/**
 * @return {number|undefined}
 */
ol.style.Text.prototype.getScale = function() {};


/**
 * @return {ol.style.Stroke}
 */
ol.style.Text.prototype.getStroke = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getText = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getTextAlign = function() {};


/**
 * @return {string|undefined}
 */
ol.style.Text.prototype.getTextBaseline = function() {};


/**
 * @param {string|undefined} font
 */
ol.style.Text.prototype.setFont = function(font) {};


/**
 * @param {number} offsetX
 */
ol.style.Text.prototype.setOffsetX = function(offsetX) {};


/**
 * @param {number} offsetY
 */
ol.style.Text.prototype.setOffsetY = function(offsetY) {};


/**
 * @param {ol.style.Fill} fill
 */
ol.style.Text.prototype.setFill = function(fill) {};


/**
 * @param {number|undefined} rotation
 */
ol.style.Text.prototype.setRotation = function(rotation) {};


/**
 * @param {number|undefined} scale
 */
ol.style.Text.prototype.setScale = function(scale) {};


/**
 * @param {ol.style.Stroke} stroke
 */
ol.style.Text.prototype.setStroke = function(stroke) {};


/**
 * @param {string|undefined} text
 */
ol.style.Text.prototype.setText = function(text) {};


/**
 * @param {string|undefined} textAlign
 */
ol.style.Text.prototype.setTextAlign = function(textAlign) {};


/**
 * @param {string|undefined} textBaseline
 */
ol.style.Text.prototype.setTextBaseline = function(textBaseline) {};


/**
 * @constructor
 * @param {number} radius
 */
ol.Sphere = function(radius) {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @return {number}
 */
ol.Sphere.prototype.geodesicArea = function(coordinates) {};


/**
 * @param {ol.Coordinate} c1
 * @param {ol.Coordinate} c2
 * @return {number}
 */
ol.Sphere.prototype.haversineDistance = function(c1, c2) {};


/**
 * @type {Object}
 */
ol.source;


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.BingMapsOptions} options
 */
ol.source.BingMaps = function(options) {};


/**
 * @type {ol.Attribution}
 */
ol.source.BingMaps.TOS_ATTRIBUTION;


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.CartoDBOptions} options
 */
ol.source.CartoDB = function(options) {};


/**
 * @return {Object}
 */
ol.source.CartoDB.prototype.getConfig = function() {};


/**
 * @param {Object} config
 */
ol.source.CartoDB.prototype.updateConfig = function(config) {};


/**
 * @param {Object} config
 */
ol.source.CartoDB.prototype.setConfig = function(config) {};


/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.ClusterOptions} options
 */
ol.source.Cluster = function(options) {};


/**
 * @return {ol.source.Vector}
 */
ol.source.Cluster.prototype.getSource = function() {};


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageArcGISRestOptions=} opt_options
 */
ol.source.ImageArcGISRest = function(opt_options) {};


/**
 * @return {Object}
 */
ol.source.ImageArcGISRest.prototype.getParams = function() {};


/**
 * @return {ol.ImageLoadFunctionType}
 */
ol.source.ImageArcGISRest.prototype.getImageLoadFunction = function() {};


/**
 * @return {string|undefined}
 */
ol.source.ImageArcGISRest.prototype.getUrl = function() {};


/**
 * @param {ol.ImageLoadFunctionType} imageLoadFunction
 */
ol.source.ImageArcGISRest.prototype.setImageLoadFunction = function(imageLoadFunction) {};


/**
 * @param {string|undefined} url
 */
ol.source.ImageArcGISRest.prototype.setUrl = function(url) {};


/**
 * @param {Object} params
 */
ol.source.ImageArcGISRest.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageCanvasOptions} options
 */
ol.source.ImageCanvas = function(options) {};


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageMapGuideOptions} options
 */
ol.source.ImageMapGuide = function(options) {};


/**
 * @return {Object}
 */
ol.source.ImageMapGuide.prototype.getParams = function() {};


/**
 * @return {ol.ImageLoadFunctionType}
 */
ol.source.ImageMapGuide.prototype.getImageLoadFunction = function() {};


/**
 * @param {Object} params
 */
ol.source.ImageMapGuide.prototype.updateParams = function(params) {};


/**
 * @param {ol.ImageLoadFunctionType} imageLoadFunction
 */
ol.source.ImageMapGuide.prototype.setImageLoadFunction = function(imageLoadFunction) {};


/**
 * @constructor
 * @extends {ol.source.Source}
 * @param {ol.SourceImageOptions} options
 */
ol.source.Image = function(options) {};


/**
 * @constructor
 */
ol.source.ImageEvent = function() {};


/**
 * @type {ol.Image}
 */
ol.source.ImageEvent.prototype.image;


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageStaticOptions} options
 */
ol.source.ImageStatic = function(options) {};


/**
 * @constructor
 * @extends {ol.source.ImageCanvas}
 * @param {olx.source.ImageVectorOptions} options
 */
ol.source.ImageVector = function(options) {};


/**
 * @return {ol.source.Vector}
 */
ol.source.ImageVector.prototype.getSource = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.source.ImageVector.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.source.ImageVector.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined} style
 */
ol.source.ImageVector.prototype.setStyle = function(style) {};


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.ImageWMSOptions=} opt_options
 */
ol.source.ImageWMS = function(opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.proj.ProjectionLike} projection
 * @param {Object} params
 * @return {string|undefined}
 */
ol.source.ImageWMS.prototype.getGetFeatureInfoUrl = function(coordinate, resolution, projection, params) {};


/**
 * @return {Object}
 */
ol.source.ImageWMS.prototype.getParams = function() {};


/**
 * @return {ol.ImageLoadFunctionType}
 */
ol.source.ImageWMS.prototype.getImageLoadFunction = function() {};


/**
 * @return {string|undefined}
 */
ol.source.ImageWMS.prototype.getUrl = function() {};


/**
 * @param {ol.ImageLoadFunctionType} imageLoadFunction
 */
ol.source.ImageWMS.prototype.setImageLoadFunction = function(imageLoadFunction) {};


/**
 * @param {string|undefined} url
 */
ol.source.ImageWMS.prototype.setUrl = function(url) {};


/**
 * @param {Object} params
 */
ol.source.ImageWMS.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.MapQuestOptions=} opt_options
 */
ol.source.MapQuest = function(opt_options) {};


/**
 * @return {string}
 */
ol.source.MapQuest.prototype.getLayer = function() {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.OSMOptions=} opt_options
 */
ol.source.OSM = function(opt_options) {};


/**
 * @type {ol.Attribution}
 */
ol.source.OSM.ATTRIBUTION;


/**
 * @constructor
 * @extends {ol.source.Image}
 * @param {olx.source.RasterOptions} options
 */
ol.source.Raster = function(options) {};


/**
 * @param {ol.raster.Operation} operation
 * @param {Object=} opt_lib
 */
ol.source.Raster.prototype.setOperation = function(operation, opt_lib) {};


/**
 * @constructor
 */
ol.source.RasterEvent = function() {};


/**
 * @type {ol.Extent}
 */
ol.source.RasterEvent.prototype.extent;


/**
 * @type {number}
 */
ol.source.RasterEvent.prototype.resolution;


/**
 * @type {Object}
 */
ol.source.RasterEvent.prototype.data;


/**
 * @constructor
 * @extends {ol.Object}
 * @param {ol.SourceSourceOptions} options
 */
ol.source.Source = function(options) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Source.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Source.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Source.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Source.prototype.getState = function() {};


/**
 */
ol.source.Source.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Source.prototype.setAttributions = function(attributions) {};


/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.StamenOptions} options
 */
ol.source.Stamen = function(options) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileArcGISRestOptions=} opt_options
 */
ol.source.TileArcGISRest = function(opt_options) {};


/**
 * @return {Object}
 */
ol.source.TileArcGISRest.prototype.getParams = function() {};


/**
 * @param {Object} params
 */
ol.source.TileArcGISRest.prototype.updateParams = function(params) {};


/**
 * @constructor
 * @extends {ol.source.Tile}
 * @param {olx.source.TileDebugOptions} options
 */
ol.source.TileDebug = function(options) {};


/**
 * @constructor
 * @extends {ol.source.Tile}
 * @param {olx.source.TileImageOptions} options
 */
ol.source.TileImage = function(options) {};


/**
 * @param {boolean} render
 */
ol.source.TileImage.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.TileImage.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileJSONOptions} options
 */
ol.source.TileJSON = function(options) {};


/**
 * @return {TileJSON}
 */
ol.source.TileJSON.prototype.getTileJSON = function() {};


/**
 * @constructor
 * @extends {ol.source.Source}
 * @param {ol.SourceTileOptions} options
 */
ol.source.Tile = function(options) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Tile.prototype.getTileGrid = function() {};


/**
 * @constructor
 */
ol.source.TileEvent = function() {};


/**
 * @type {ol.Tile}
 */
ol.source.TileEvent.prototype.tile;


/**
 * @constructor
 * @extends {ol.source.Tile}
 * @param {olx.source.TileUTFGridOptions} options
 */
ol.source.TileUTFGrid = function(options) {};


/**
 * @return {string|undefined}
 */
ol.source.TileUTFGrid.prototype.getTemplate = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {Function} callback
 * @param {T=} opt_this
 * @param {boolean=} opt_request
 * @template T
 */
ol.source.TileUTFGrid.prototype.forDataAtCoordinateAndResolution = function(coordinate, resolution, callback, opt_this, opt_request) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.TileWMSOptions=} opt_options
 */
ol.source.TileWMS = function(opt_options) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.proj.ProjectionLike} projection
 * @param {Object} params
 * @return {string|undefined}
 */
ol.source.TileWMS.prototype.getGetFeatureInfoUrl = function(coordinate, resolution, projection, params) {};


/**
 * @return {Object}
 */
ol.source.TileWMS.prototype.getParams = function() {};


/**
 * @param {Object} params
 */
ol.source.TileWMS.prototype.updateParams = function(params) {};


/**
 * @constructor
 */
ol.source.UrlTile = function() {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.UrlTile.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.UrlTile.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.UrlTile.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.UrlTile.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.UrlTile.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.UrlTile.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.UrlTile.prototype.setUrls = function(urls) {};


/**
 * @constructor
 * @extends {ol.source.Source}
 * @param {olx.source.VectorOptions=} opt_options
 */
ol.source.Vector = function(opt_options) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Vector.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.Vector.prototype.addFeatures = function(features) {};


/**
 * @param {boolean=} opt_fast
 */
ol.source.Vector.prototype.clear = function(opt_fast) {};


/**
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Vector.prototype.forEachFeature = function(callback, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Vector.prototype.forEachFeatureInExtent = function(extent, callback, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Vector.prototype.forEachFeatureIntersectingExtent = function(extent, callback, opt_this) {};


/**
 * @return {ol.Collection.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeaturesCollection = function() {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Extent} extent
 * @return {Array.<ol.Feature>}
 */
ol.source.Vector.prototype.getFeaturesInExtent = function(extent) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {Function} opt_filter
 * @return {ol.Feature}
 */
ol.source.Vector.prototype.getClosestFeatureToCoordinate = function(coordinate, opt_filter) {};


/**
 * @return {ol.Extent}
 */
ol.source.Vector.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.Vector.prototype.getFeatureById = function(id) {};


/**
 * @return {ol.format.Feature|undefined}
 */
ol.source.Vector.prototype.getFormat = function() {};


/**
 * @return {string|ol.FeatureUrlFunction|undefined}
 */
ol.source.Vector.prototype.getUrl = function() {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Vector.prototype.removeFeature = function(feature) {};


/**
 * @constructor
 */
ol.source.VectorEvent = function() {};


/**
 * @type {ol.Feature|undefined}
 */
ol.source.VectorEvent.prototype.feature;


/**
 * @constructor
 * @extends {ol.source.Tile}
 * @param {olx.source.VectorTileOptions} options
 */
ol.source.VectorTile = function(options) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.WMTSOptions} options
 */
ol.source.WMTS = function(options) {};


/**
 * @return {Object}
 */
ol.source.WMTS.prototype.getDimensions = function() {};


/**
 * @return {string}
 */
ol.source.WMTS.prototype.getFormat = function() {};


/**
 * @return {string}
 */
ol.source.WMTS.prototype.getLayer = function() {};


/**
 * @return {string}
 */
ol.source.WMTS.prototype.getMatrixSet = function() {};


/**
 * @return {ol.source.WMTSRequestEncoding}
 */
ol.source.WMTS.prototype.getRequestEncoding = function() {};


/**
 * @return {string}
 */
ol.source.WMTS.prototype.getStyle = function() {};


/**
 * @return {string}
 */
ol.source.WMTS.prototype.getVersion = function() {};


/**
 * @param {Object} dimensions
 */
ol.source.WMTS.prototype.updateDimensions = function(dimensions) {};


/**
 * @param {Object} wmtsCap
 * @param {Object} config
 * @return {olx.source.WMTSOptions}
 */
ol.source.WMTS.optionsFromCapabilities = function(wmtsCap, config) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.XYZOptions=} opt_options
 */
ol.source.XYZ = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.source.TileImage}
 * @param {olx.source.ZoomifyOptions=} opt_options
 */
ol.source.Zoomify = function(opt_options) {};


/**
 * @constructor
 */
ol.render.Event = function() {};


/**
 * @type {ol.render.VectorContext|undefined}
 */
ol.render.Event.prototype.vectorContext;


/**
 * @type {olx.FrameState|undefined}
 */
ol.render.Event.prototype.frameState;


/**
 * @type {CanvasRenderingContext2D|null|undefined}
 */
ol.render.Event.prototype.context;


/**
 * @type {ol.webgl.Context|null|undefined}
 */
ol.render.Event.prototype.glContext;


/**
 * @constructor
 */
ol.render.Feature = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.render.Feature.prototype.get = function(key) {};


/**
 * @return {ol.Extent}
 */
ol.render.Feature.prototype.getExtent = function() {};


/**
 * @return {ol.render.Feature}
 */
ol.render.Feature.prototype.getGeometry = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.render.Feature.prototype.getProperties = function() {};


/**
 * @return {ol.geom.GeometryType}
 */
ol.render.Feature.prototype.getType = function() {};


/**
 * @constructor
 */
ol.render.VectorContext = function() {};


/**
 * @type {Object}
 */
ol.render.webgl;


/**
 * @constructor
 */
ol.render.webgl.Immediate = function() {};


/**
 * @param {ol.style.Style} style
 */
ol.render.webgl.Immediate.prototype.setStyle = function(style) {};


/**
 * @param {ol.geom.Geometry|ol.render.Feature} geometry
 */
ol.render.webgl.Immediate.prototype.drawGeometry = function(geometry) {};


/**
 */
ol.render.webgl.Immediate.prototype.drawFeature = function() {};


/**
 * @type {Object}
 */
ol.render.canvas;


/**
 * @constructor
 */
ol.render.canvas.Immediate = function() {};


/**
 * @param {ol.geom.Circle} geometry
 */
ol.render.canvas.Immediate.prototype.drawCircle = function(geometry) {};


/**
 * @param {ol.style.Style} style
 */
ol.render.canvas.Immediate.prototype.setStyle = function(style) {};


/**
 * @param {ol.geom.Geometry|ol.render.Feature} geometry
 */
ol.render.canvas.Immediate.prototype.drawGeometry = function(geometry) {};


/**
 * @param {ol.Feature} feature
 * @param {ol.style.Style} style
 */
ol.render.canvas.Immediate.prototype.drawFeature = function(feature, style) {};


/**
 * @type {Object}
 */
ol.proj;


/**
 * @type {Object}
 */
ol.proj.common;


/**
 */
ol.proj.common.add = function() {};


/**
 * @type {Object.<ol.proj.Units, number>}
 */
ol.proj.METERS_PER_UNIT;


/**
 * @constructor
 * @param {olx.ProjectionOptions} options
 */
ol.proj.Projection = function(options) {};


/**
 * @return {string}
 */
ol.proj.Projection.prototype.getCode = function() {};


/**
 * @return {ol.Extent}
 */
ol.proj.Projection.prototype.getExtent = function() {};


/**
 * @return {ol.proj.Units}
 */
ol.proj.Projection.prototype.getUnits = function() {};


/**
 * @return {number|undefined}
 */
ol.proj.Projection.prototype.getMetersPerUnit = function() {};


/**
 * @return {ol.Extent}
 */
ol.proj.Projection.prototype.getWorldExtent = function() {};


/**
 * @return {boolean}
 */
ol.proj.Projection.prototype.isGlobal = function() {};


/**
 * @param {boolean} global
 */
ol.proj.Projection.prototype.setGlobal = function(global) {};


/**
 * @param {ol.Extent} extent
 */
ol.proj.Projection.prototype.setExtent = function(extent) {};


/**
 * @param {ol.Extent} worldExtent
 */
ol.proj.Projection.prototype.setWorldExtent = function(worldExtent) {};


/**
 * @param {Function} func
 */
ol.proj.Projection.prototype.setGetPointResolution = function(func) {};


/**
 * @param {number} resolution
 * @param {ol.Coordinate} point
 * @return {number}
 */
ol.proj.Projection.prototype.getPointResolution = function(resolution, point) {};


/**
 * @param {proj4} proj4
 */
ol.proj.setProj4 = function(proj4) {};


/**
 * @param {Array.<ol.proj.Projection>} projections
 */
ol.proj.addEquivalentProjections = function(projections) {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.proj.addProjection = function(projection) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @param {Function} forward
 * @param {Function} inverse
 */
ol.proj.addCoordinateTransforms = function(source, destination, forward, inverse) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.proj.ProjectionLike=} opt_projection
 * @return {ol.Coordinate}
 */
ol.proj.fromLonLat = function(coordinate, opt_projection) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.proj.ProjectionLike=} opt_projection
 * @return {ol.Coordinate}
 */
ol.proj.toLonLat = function(coordinate, opt_projection) {};


/**
 * @param {ol.proj.ProjectionLike} projectionLike
 * @return {ol.proj.Projection}
 */
ol.proj.get = function(projectionLike) {};


/**
 * @param {ol.proj.Projection} projection1
 * @param {ol.proj.Projection} projection2
 * @return {boolean}
 */
ol.proj.equivalent = function(projection1, projection2) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.TransformFunction}
 */
ol.proj.getTransform = function(source, destination) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.Coordinate}
 */
ol.proj.transform = function(coordinate, source, destination) {};


/**
 * @param {ol.Extent} extent
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.Extent}
 */
ol.proj.transformExtent = function(extent, source, destination) {};


/**
 * @type {Object}
 */
ol.layer;


/**
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.HeatmapOptions=} opt_options
 */
ol.layer.Heatmap = function(opt_options) {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getBlur = function() {};


/**
 * @return {Array.<string>}
 */
ol.layer.Heatmap.prototype.getGradient = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getRadius = function() {};


/**
 * @param {number} blur
 */
ol.layer.Heatmap.prototype.setBlur = function(blur) {};


/**
 * @param {Array.<string>} colors
 */
ol.layer.Heatmap.prototype.setGradient = function(colors) {};


/**
 * @param {number} radius
 */
ol.layer.Heatmap.prototype.setRadius = function(radius) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.ImageOptions=} opt_options
 */
ol.layer.Image = function(opt_options) {};


/**
 * @return {ol.source.Image}
 */
ol.layer.Image.prototype.getSource = function() {};


/**
 * @constructor
 * @extends {ol.layer.Base}
 * @param {olx.layer.LayerOptions} options
 */
ol.layer.Layer = function(options) {};


/**
 * @return {ol.source.Source}
 */
ol.layer.Layer.prototype.getSource = function() {};


/**
 * @param {ol.Map} map
 */
ol.layer.Layer.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.Layer.prototype.setSource = function(source) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.layer.BaseOptions} options
 */
ol.layer.Base = function(options) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Base.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Base.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Base.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Base.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Base.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Base.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Base.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Base.prototype.setZIndex = function(zindex) {};


/**
 * @constructor
 * @extends {ol.layer.Base}
 * @param {olx.layer.GroupOptions=} opt_options
 */
ol.layer.Group = function(opt_options) {};


/**
 * @return {ol.Collection.<ol.layer.Base>}
 */
ol.layer.Group.prototype.getLayers = function() {};


/**
 * @param {ol.Collection.<ol.layer.Base>} layers
 */
ol.layer.Group.prototype.setLayers = function(layers) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.TileOptions=} opt_options
 */
ol.layer.Tile = function(opt_options) {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getPreload = function() {};


/**
 * @return {ol.source.Tile}
 */
ol.layer.Tile.prototype.getSource = function() {};


/**
 * @param {number} preload
 */
ol.layer.Tile.prototype.setPreload = function(preload) {};


/**
 * @return {boolean}
 */
ol.layer.Tile.prototype.getUseInterimTilesOnError = function() {};


/**
 * @param {boolean} useInterimTilesOnError
 */
ol.layer.Tile.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {};


/**
 * @constructor
 * @extends {ol.layer.Layer}
 * @param {olx.layer.VectorOptions=} opt_options
 */
ol.layer.Vector = function(opt_options) {};


/**
 * @return {ol.source.Vector}
 */
ol.layer.Vector.prototype.getSource = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.layer.Vector.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.layer.Vector.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|null|undefined} style
 */
ol.layer.Vector.prototype.setStyle = function(style) {};


/**
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.VectorTileOptions=} opt_options
 */
ol.layer.VectorTile = function(opt_options) {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getPreload = function() {};


/**
 * @return {boolean}
 */
ol.layer.VectorTile.prototype.getUseInterimTilesOnError = function() {};


/**
 * @param {number} preload
 */
ol.layer.VectorTile.prototype.setPreload = function(preload) {};


/**
 * @param {boolean} useInterimTilesOnError
 */
ol.layer.VectorTile.prototype.setUseInterimTilesOnError = function(useInterimTilesOnError) {};


/**
 * @type {Object}
 */
ol.interaction;


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.DoubleClickZoomOptions=} opt_options
 */
ol.interaction.DoubleClickZoom = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.DoubleClickZoom.handleEvent = function(mapBrowserEvent) {};


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.DragAndDropOptions=} opt_options
 */
ol.interaction.DragAndDrop = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.DragAndDrop.handleEvent;


/**
 * @constructor
 */
ol.interaction.DragAndDropEvent = function() {};


/**
 * @type {Array.<ol.Feature>|undefined}
 */
ol.interaction.DragAndDropEvent.prototype.features;


/**
 * @type {File}
 */
ol.interaction.DragAndDropEvent.prototype.file;


/**
 * @type {ol.proj.Projection|undefined}
 */
ol.interaction.DragAndDropEvent.prototype.projection;


/**
 * @constructor
 */
ol.DragBoxEvent = function() {};


/**
 * @type {ol.Coordinate}
 */
ol.DragBoxEvent.prototype.coordinate;


/**
 * @type {ol.MapBrowserEvent}
 */
ol.DragBoxEvent.prototype.mapBrowserEvent;


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.DragBoxOptions=} opt_options
 */
ol.interaction.DragBox = function(opt_options) {};


/**
 * @return {ol.geom.Polygon}
 */
ol.interaction.DragBox.prototype.getGeometry = function() {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.DragPanOptions=} opt_options
 */
ol.interaction.DragPan = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.DragRotateAndZoomOptions=} opt_options
 */
ol.interaction.DragRotateAndZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.DragRotateOptions=} opt_options
 */
ol.interaction.DragRotate = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.DragBox}
 * @param {olx.interaction.DragZoomOptions=} opt_options
 */
ol.interaction.DragZoom = function(opt_options) {};


/**
 * @constructor
 */
ol.interaction.DrawEvent = function() {};


/**
 * @type {ol.Feature}
 */
ol.interaction.DrawEvent.prototype.feature;


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.DrawOptions} options
 */
ol.interaction.Draw = function(options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.Draw.handleEvent = function(mapBrowserEvent) {};


/**
 */
ol.interaction.Draw.prototype.removeLastPoint = function() {};


/**
 */
ol.interaction.Draw.prototype.finishDrawing = function() {};


/**
 * @param {ol.Feature} feature
 */
ol.interaction.Draw.prototype.extend = function(feature) {};


/**
 * @param {number=} opt_sides
 * @param {number=} opt_angle
 * @return {ol.interaction.DrawGeometryFunctionType}
 */
ol.interaction.Draw.createRegularPolygon = function(opt_sides, opt_angle) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.interaction.InteractionOptions} options
 */
ol.interaction.Interaction = function(options) {};


/**
 * @return {boolean}
 */
ol.interaction.Interaction.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Interaction.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Interaction.prototype.setActive = function(active) {};


/**
 * @param {olx.interaction.DefaultsOptions=} opt_options
 * @return {ol.Collection.<ol.interaction.Interaction>}
 */
ol.interaction.defaults = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.KeyboardPanOptions=} opt_options
 */
ol.interaction.KeyboardPan = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.KeyboardPan.handleEvent = function(mapBrowserEvent) {};


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.KeyboardZoomOptions=} opt_options
 */
ol.interaction.KeyboardZoom = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.KeyboardZoom.handleEvent = function(mapBrowserEvent) {};


/**
 * @constructor
 */
ol.interaction.ModifyEvent = function() {};


/**
 * @type {ol.Collection.<ol.Feature>}
 */
ol.interaction.ModifyEvent.prototype.features;


/**
 * @type {ol.MapBrowserPointerEvent}
 */
ol.interaction.ModifyEvent.prototype.mapBrowserPointerEvent;


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.ModifyOptions} options
 */
ol.interaction.Modify = function(options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.Modify.handleEvent = function(mapBrowserEvent) {};


/**
 * @return {boolean}
 */
ol.interaction.Modify.prototype.removePoint = function() {};


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.MouseWheelZoomOptions=} opt_options
 */
ol.interaction.MouseWheelZoom = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.MouseWheelZoom.handleEvent = function(mapBrowserEvent) {};


/**
 * @param {boolean} useAnchor
 */
ol.interaction.MouseWheelZoom.prototype.setMouseAnchor = function(useAnchor) {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.PinchRotateOptions=} opt_options
 */
ol.interaction.PinchRotate = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.PinchZoomOptions=} opt_options
 */
ol.interaction.PinchZoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.PointerOptions=} opt_options
 */
ol.interaction.Pointer = function(opt_options) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.Pointer.handleEvent = function(mapBrowserEvent) {};


/**
 * @constructor
 */
ol.interaction.SelectEvent = function() {};


/**
 * @type {Array.<ol.Feature>}
 */
ol.interaction.SelectEvent.prototype.selected;


/**
 * @type {Array.<ol.Feature>}
 */
ol.interaction.SelectEvent.prototype.deselected;


/**
 * @type {ol.MapBrowserEvent}
 */
ol.interaction.SelectEvent.prototype.mapBrowserEvent;


/**
 * @constructor
 * @extends {ol.interaction.Interaction}
 * @param {olx.interaction.SelectOptions=} opt_options
 */
ol.interaction.Select = function(opt_options) {};


/**
 * @return {ol.Collection.<ol.Feature>}
 */
ol.interaction.Select.prototype.getFeatures = function() {};


/**
 * @param {ol.Feature|ol.render.Feature} feature
 * @return {ol.layer.Vector}
 */
ol.interaction.Select.prototype.getLayer = function(feature) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.interaction.Select.handleEvent = function(mapBrowserEvent) {};


/**
 * @param {ol.Map} map
 */
ol.interaction.Select.prototype.setMap = function(map) {};


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.SnapOptions=} opt_options
 */
ol.interaction.Snap = function(opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {boolean=} opt_listen
 */
ol.interaction.Snap.prototype.addFeature = function(feature, opt_listen) {};


/**
 * @param {ol.Feature} feature
 * @param {boolean=} opt_unlisten
 */
ol.interaction.Snap.prototype.removeFeature = function(feature, opt_unlisten) {};


/**
 * @constructor
 */
ol.interaction.TranslateEvent = function() {};


/**
 * @type {ol.Collection.<ol.Feature>}
 */
ol.interaction.TranslateEvent.prototype.features;


/**
 * @type {ol.Coordinate}
 */
ol.interaction.TranslateEvent.prototype.coordinate;


/**
 * @constructor
 * @extends {ol.interaction.Pointer}
 * @param {olx.interaction.TranslateOptions} options
 */
ol.interaction.Translate = function(options) {};


/**
 * @type {Object}
 */
ol.geom;


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {ol.Coordinate} center
 * @param {number=} opt_radius
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Circle = function(center, opt_radius, opt_layout) {};


/**
 * @return {ol.geom.Circle}
 */
ol.geom.Circle.prototype.clone = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getCenter = function() {};


/**
 * @return {number}
 */
ol.geom.Circle.prototype.getRadius = function() {};


/**
 */
ol.geom.Circle.prototype.getType = function() {};


/**
 */
ol.geom.Circle.prototype.intersectsExtent = function() {};


/**
 * @param {ol.Coordinate} center
 */
ol.geom.Circle.prototype.setCenter = function(center) {};


/**
 * @param {ol.Coordinate} center
 * @param {number} radius
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Circle.prototype.setCenterAndRadius = function(center, radius, opt_layout) {};


/**
 * @param {number} radius
 */
ol.geom.Circle.prototype.setRadius = function(radius) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Circle}
 */
ol.geom.Circle.prototype.transform = function(source, destination) {};


/**
 * @constructor
 * @extends {ol.Object}
 */
ol.geom.Geometry = function() {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Geometry.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.Geometry.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.Geometry.prototype.rotate = function(angle, anchor) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.Geometry.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Geometry.prototype.transform = function(source, destination) {};


/**
 * @constructor
 * @extends {ol.geom.Geometry}
 * @param {Array.<ol.geom.Geometry>=} opt_geometries
 */
ol.geom.GeometryCollection = function(opt_geometries) {};


/**
 * @return {ol.geom.GeometryCollection}
 */
ol.geom.GeometryCollection.prototype.clone = function() {};


/**
 * @return {Array.<ol.geom.Geometry>}
 */
ol.geom.GeometryCollection.prototype.getGeometries = function() {};


/**
 */
ol.geom.GeometryCollection.prototype.getType = function() {};


/**
 */
ol.geom.GeometryCollection.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<ol.geom.Geometry>} geometries
 */
ol.geom.GeometryCollection.prototype.setGeometries = function(geometries) {};


/**
 */
ol.geom.GeometryCollection.prototype.applyTransform = function() {};


/**
 * @param {number} deltaX
 * @param {number} deltaY
 */
ol.geom.GeometryCollection.prototype.translate = function(deltaX, deltaY) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LinearRing = function(coordinates, opt_layout) {};


/**
 * @return {ol.geom.LinearRing}
 */
ol.geom.LinearRing.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.LinearRing.prototype.getArea = function() {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.LinearRing.prototype.getCoordinates = function() {};


/**
 */
ol.geom.LinearRing.prototype.getType = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LinearRing.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LineString = function(coordinates, opt_layout) {};


/**
 * @param {ol.Coordinate} coordinate
 */
ol.geom.LineString.prototype.appendCoordinate = function(coordinate) {};


/**
 * @return {ol.geom.LineString}
 */
ol.geom.LineString.prototype.clone = function() {};


/**
 * @param {Function} callback
 * @param {S=} opt_this
 * @return {T|boolean}
 * @template T,S
 */
ol.geom.LineString.prototype.forEachSegment = function(callback, opt_this) {};


/**
 * @param {number} m
 * @param {boolean=} opt_extrapolate
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getCoordinateAtM = function(m, opt_extrapolate) {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.LineString.prototype.getCoordinates = function() {};


/**
 * @param {number} fraction
 * @param {ol.Coordinate=} opt_dest
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getCoordinateAt = function(fraction, opt_dest) {};


/**
 * @return {number}
 */
ol.geom.LineString.prototype.getLength = function() {};


/**
 */
ol.geom.LineString.prototype.getType = function() {};


/**
 */
ol.geom.LineString.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.LineString.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiLineString = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.LineString} lineString
 */
ol.geom.MultiLineString.prototype.appendLineString = function(lineString) {};


/**
 * @return {ol.geom.MultiLineString}
 */
ol.geom.MultiLineString.prototype.clone = function() {};


/**
 * @param {number} m
 * @param {boolean=} opt_extrapolate
 * @param {boolean=} opt_interpolate
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getCoordinateAtM = function(m, opt_extrapolate, opt_interpolate) {};


/**
 * @return {Array.<Array.<ol.Coordinate>>}
 */
ol.geom.MultiLineString.prototype.getCoordinates = function() {};


/**
 * @param {number} index
 * @return {ol.geom.LineString}
 */
ol.geom.MultiLineString.prototype.getLineString = function(index) {};


/**
 * @return {Array.<ol.geom.LineString>}
 */
ol.geom.MultiLineString.prototype.getLineStrings = function() {};


/**
 */
ol.geom.MultiLineString.prototype.getType = function() {};


/**
 */
ol.geom.MultiLineString.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiLineString.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPoint = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.Point} point
 */
ol.geom.MultiPoint.prototype.appendPoint = function(point) {};


/**
 * @return {ol.geom.MultiPoint}
 */
ol.geom.MultiPoint.prototype.clone = function() {};


/**
 * @return {Array.<ol.Coordinate>}
 */
ol.geom.MultiPoint.prototype.getCoordinates = function() {};


/**
 * @param {number} index
 * @return {ol.geom.Point}
 */
ol.geom.MultiPoint.prototype.getPoint = function(index) {};


/**
 * @return {Array.<ol.geom.Point>}
 */
ol.geom.MultiPoint.prototype.getPoints = function() {};


/**
 */
ol.geom.MultiPoint.prototype.getType = function() {};


/**
 */
ol.geom.MultiPoint.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<ol.Coordinate>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPoint.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPolygon = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.Polygon} polygon
 */
ol.geom.MultiPolygon.prototype.appendPolygon = function(polygon) {};


/**
 * @return {ol.geom.MultiPolygon}
 */
ol.geom.MultiPolygon.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.MultiPolygon.prototype.getArea = function() {};


/**
 * @param {boolean=} opt_right
 * @return {Array.<Array.<Array.<ol.Coordinate>>>}
 */
ol.geom.MultiPolygon.prototype.getCoordinates = function(opt_right) {};


/**
 * @return {ol.geom.MultiPoint}
 */
ol.geom.MultiPolygon.prototype.getInteriorPoints = function() {};


/**
 * @param {number} index
 * @return {ol.geom.Polygon}
 */
ol.geom.MultiPolygon.prototype.getPolygon = function(index) {};


/**
 * @return {Array.<ol.geom.Polygon>}
 */
ol.geom.MultiPolygon.prototype.getPolygons = function() {};


/**
 */
ol.geom.MultiPolygon.prototype.getType = function() {};


/**
 */
ol.geom.MultiPolygon.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<Array.<Array.<ol.Coordinate>>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.MultiPolygon.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {ol.Coordinate} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Point = function(coordinates, opt_layout) {};


/**
 * @return {ol.geom.Point}
 */
ol.geom.Point.prototype.clone = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getCoordinates = function() {};


/**
 */
ol.geom.Point.prototype.getType = function() {};


/**
 */
ol.geom.Point.prototype.intersectsExtent = function() {};


/**
 * @param {ol.Coordinate} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Point.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @constructor
 * @extends {ol.geom.SimpleGeometry}
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Polygon = function(coordinates, opt_layout) {};


/**
 * @param {ol.geom.LinearRing} linearRing
 */
ol.geom.Polygon.prototype.appendLinearRing = function(linearRing) {};


/**
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.prototype.clone = function() {};


/**
 * @return {number}
 */
ol.geom.Polygon.prototype.getArea = function() {};


/**
 * @param {boolean=} opt_right
 * @return {Array.<Array.<ol.Coordinate>>}
 */
ol.geom.Polygon.prototype.getCoordinates = function(opt_right) {};


/**
 * @return {ol.geom.Point}
 */
ol.geom.Polygon.prototype.getInteriorPoint = function() {};


/**
 * @return {number}
 */
ol.geom.Polygon.prototype.getLinearRingCount = function() {};


/**
 * @param {number} index
 * @return {ol.geom.LinearRing}
 */
ol.geom.Polygon.prototype.getLinearRing = function(index) {};


/**
 * @return {Array.<ol.geom.LinearRing>}
 */
ol.geom.Polygon.prototype.getLinearRings = function() {};


/**
 */
ol.geom.Polygon.prototype.getType = function() {};


/**
 */
ol.geom.Polygon.prototype.intersectsExtent = function() {};


/**
 * @param {Array.<Array.<ol.Coordinate>>} coordinates
 * @param {ol.geom.GeometryLayout=} opt_layout
 */
ol.geom.Polygon.prototype.setCoordinates = function(coordinates, opt_layout) {};


/**
 * @param {ol.Sphere} sphere
 * @param {ol.Coordinate} center
 * @param {number} radius
 * @param {number=} opt_n
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.circular = function(sphere, center, radius, opt_n) {};


/**
 * @param {ol.Extent} extent
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.fromExtent = function(extent) {};


/**
 * @param {ol.geom.Circle} circle
 * @param {number=} opt_sides
 * @param {number=} opt_angle
 * @return {ol.geom.Polygon}
 */
ol.geom.Polygon.fromCircle = function(circle, opt_sides, opt_angle) {};


/**
 * @constructor
 * @extends {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.SimpleGeometry.prototype.getLayout = function() {};


/**
 */
ol.geom.SimpleGeometry.prototype.applyTransform = function() {};


/**
 */
ol.geom.SimpleGeometry.prototype.translate = function() {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.EsriJSONOptions=} opt_options
 */
ol.format.EsriJSON = function(opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.EsriJSON.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.EsriJSON.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.EsriJSON.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {ArrayBuffer|Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.EsriJSON.prototype.readProjection = function(source) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.EsriJSON.prototype.writeGeometry = function(geometry, opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {EsriJSONGeometry}
 */
ol.format.EsriJSON.prototype.writeGeometryObject = function(geometry, opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.EsriJSON.prototype.writeFeature = function(feature, opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Object}
 */
ol.format.EsriJSON.prototype.writeFeatureObject = function(feature, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.EsriJSON.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Object}
 */
ol.format.EsriJSON.prototype.writeFeaturesObject = function(features, opt_options) {};


/**
 * @constructor
 */
ol.format.Feature = function() {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GeoJSONOptions=} opt_options
 */
ol.format.GeoJSON = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.GeoJSON.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GeoJSON.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.GeoJSON.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.GeoJSON.prototype.readProjection = function(source) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GeoJSON.prototype.writeFeature = function(feature, opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {GeoJSONFeature}
 */
ol.format.GeoJSON.prototype.writeFeatureObject = function(feature, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GeoJSON.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {GeoJSONFeatureCollection}
 */
ol.format.GeoJSON.prototype.writeFeaturesObject = function(features, opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GeoJSON.prototype.writeGeometry = function(geometry, opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {GeoJSONGeometry|GeoJSONGeometryCollection}
 */
ol.format.GeoJSON.prototype.writeGeometryObject = function(geometry, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GPXOptions=} opt_options
 */
ol.format.GPX = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.GPX.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GPX.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.GPX.prototype.readProjection = function(source) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GPX.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GPX.prototype.writeFeaturesNode = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.IGCOptions=} opt_options
 */
ol.format.IGC = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.IGC.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.IGC.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.IGC.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.KMLOptions=} opt_options
 */
ol.format.KML = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.KML.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.KML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|string} source
 * @return {string|undefined}
 */
ol.format.KML.prototype.readName = function(source) {};


/**
 * @param {Document|Node|string} source
 * @return {Array.<Object>}
 */
ol.format.KML.prototype.readNetworkLinks = function(source) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.KML.prototype.readProjection = function(source) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.KML.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.KML.prototype.writeFeaturesNode = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.MVTOptions=} opt_options
 */
ol.format.MVT = function(opt_options) {};


/**
 */
ol.format.MVT.prototype.readFeatures = function() {};


/**
 */
ol.format.MVT.prototype.readProjection = function() {};


/**
 * @param {Array.<string>} layers
 */
ol.format.MVT.prototype.setLayers = function(layers) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 */
ol.format.OSMXML = function() {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.OSMXML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.OSMXML.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.PolylineOptions=} opt_options
 */
ol.format.Polyline = function(opt_options) {};


/**
 * @param {Array.<number>} numbers
 * @param {number} stride
 * @param {number=} opt_factor
 * @return {string}
 */
ol.format.Polyline.encodeDeltas = function(numbers, stride, opt_factor) {};


/**
 * @param {string} encoded
 * @param {number} stride
 * @param {number=} opt_factor
 * @return {Array.<number>}
 */
ol.format.Polyline.decodeDeltas = function(encoded, stride, opt_factor) {};


/**
 * @param {Array.<number>} numbers
 * @param {number=} opt_factor
 * @return {string}
 */
ol.format.Polyline.encodeFloats = function(numbers, opt_factor) {};


/**
 * @param {string} encoded
 * @param {number=} opt_factor
 * @return {Array.<number>}
 */
ol.format.Polyline.decodeFloats = function(encoded, opt_factor) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.Polyline.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.Polyline.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.Polyline.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.proj.Projection}
 */
ol.format.Polyline.prototype.readProjection = function(source) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.Polyline.prototype.writeGeometry = function(geometry, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.TopoJSONOptions=} opt_options
 */
ol.format.TopoJSON = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {Array.<ol.Feature>}
 */
ol.format.TopoJSON.prototype.readFeatures = function(source) {};


/**
 * @param {Document|Node|Object|string} object
 * @return {ol.proj.Projection}
 */
ol.format.TopoJSON.prototype.readProjection = function(object) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.WFSOptions=} opt_options
 */
ol.format.WFS = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.WFS.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.WFSTransactionResponse|undefined}
 */
ol.format.WFS.prototype.readTransactionResponse = function(source) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {ol.WFSFeatureCollectionMetadata|undefined}
 */
ol.format.WFS.prototype.readFeatureCollectionMetadata = function(source) {};


/**
 * @param {olx.format.WFSWriteGetFeatureOptions} options
 * @return {Node}
 */
ol.format.WFS.prototype.writeGetFeature = function(options) {};


/**
 * @param {Array.<ol.Feature>} inserts
 * @param {Array.<ol.Feature>} updates
 * @param {Array.<ol.Feature>} deletes
 * @param {olx.format.WFSWriteTransactionOptions} options
 * @return {Node}
 */
ol.format.WFS.prototype.writeTransaction = function(inserts, updates, deletes, options) {};


/**
 * @param {Document|Node|Object|string} source
 * @return {!ol.proj.Projection}
 */
ol.format.WFS.prototype.readProjection = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.WKTOptions=} opt_options
 */
ol.format.WKT = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.Feature}
 */
ol.format.WKT.prototype.readFeature = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.WKT.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {ol.geom.Geometry}
 */
ol.format.WKT.prototype.readGeometry = function(source, opt_options) {};


/**
 * @param {ol.Feature} feature
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.WKT.prototype.writeFeature = function(feature, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.WKT.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @return {string}
 */
ol.format.WKT.prototype.writeGeometry = function(geometry) {};


/**
 * @constructor
 * @extends {ol.format.XML}
 */
ol.format.WMSCapabilities = function() {};


/**
 * @param {Document|Node|string} source
 * @return {Object}
 */
ol.format.WMSCapabilities.prototype.read = function(source) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.WMSGetFeatureInfoOptions=} opt_options
 */
ol.format.WMSGetFeatureInfo = function(opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.WMSGetFeatureInfo.prototype.readFeatures = function(source, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.XML}
 */
ol.format.WMTSCapabilities = function() {};


/**
 * @param {Document|Node|string} source
 * @return {Object}
 */
ol.format.WMTSCapabilities.prototype.read = function(source) {};


/**
 * @type {Object}
 */
ol.format.ogc;


/**
 * @type {Object}
 */
ol.format.ogc.filter;


/**
 * @param {ol.format.ogc.filter.Filter} conditionA
 * @param {ol.format.ogc.filter.Filter} conditionB
 * @return {ol.format.ogc.filter.And}
 */
ol.format.ogc.filter.and = function(conditionA, conditionB) {};


/**
 * @param {ol.format.ogc.filter.Filter} conditionA
 * @param {ol.format.ogc.filter.Filter} conditionB
 * @return {ol.format.ogc.filter.Or}
 */
ol.format.ogc.filter.or = function(conditionA, conditionB) {};


/**
 * @param {ol.format.ogc.filter.Filter} condition
 * @return {ol.format.ogc.filter.Not}
 */
ol.format.ogc.filter.not = function(condition) {};


/**
 * @param {string} geometryName
 * @param {ol.Extent} extent
 * @param {string=} opt_srsName
 * @return {ol.format.ogc.filter.Bbox}
 */
ol.format.ogc.filter.bbox = function(geometryName, extent, opt_srsName) {};


/**
 * @param {string} propertyName
 * @param {string|number} expression
 * @param {boolean=} opt_matchCase
 * @return {ol.format.ogc.filter.EqualTo}
 */
ol.format.ogc.filter.equalTo = function(propertyName, expression, opt_matchCase) {};


/**
 * @param {string} propertyName
 * @param {string|number} expression
 * @param {boolean=} opt_matchCase
 * @return {ol.format.ogc.filter.NotEqualTo}
 */
ol.format.ogc.filter.notEqualTo = function(propertyName, expression, opt_matchCase) {};


/**
 * @param {string} propertyName
 * @param {number} expression
 * @return {ol.format.ogc.filter.LessThan}
 */
ol.format.ogc.filter.lessThan = function(propertyName, expression) {};


/**
 * @param {string} propertyName
 * @param {number} expression
 * @return {ol.format.ogc.filter.LessThanOrEqualTo}
 */
ol.format.ogc.filter.lessThanOrEqualTo = function(propertyName, expression) {};


/**
 * @param {string} propertyName
 * @param {number} expression
 * @return {ol.format.ogc.filter.GreaterThan}
 */
ol.format.ogc.filter.greaterThan = function(propertyName, expression) {};


/**
 * @param {string} propertyName
 * @param {number} expression
 * @return {ol.format.ogc.filter.GreaterThanOrEqualTo}
 */
ol.format.ogc.filter.greaterThanOrEqualTo = function(propertyName, expression) {};


/**
 * @param {string} propertyName
 * @return {ol.format.ogc.filter.IsNull}
 */
ol.format.ogc.filter.isNull = function(propertyName) {};


/**
 * @param {string} propertyName
 * @param {number} lowerBoundary
 * @param {number} upperBoundary
 * @return {ol.format.ogc.filter.IsBetween}
 */
ol.format.ogc.filter.between = function(propertyName, lowerBoundary, upperBoundary) {};


/**
 * @param {string} propertyName
 * @param {string} pattern
 * @param {string=} opt_wildCard
 * @param {string=} opt_singleChar
 * @param {string=} opt_escapeChar
 * @param {boolean=} opt_matchCase
 * @return {ol.format.ogc.filter.IsLike}
 */
ol.format.ogc.filter.like = function(propertyName, pattern, opt_wildCard, opt_singleChar, opt_escapeChar, opt_matchCase) {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {string} tagName
 */
ol.format.ogc.filter.Filter = function(tagName) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Filter}
 * @param {ol.format.ogc.filter.Filter} conditionA
 * @param {ol.format.ogc.filter.Filter} conditionB
 */
ol.format.ogc.filter.And = function(conditionA, conditionB) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Filter}
 * @param {ol.format.ogc.filter.Filter} conditionA
 * @param {ol.format.ogc.filter.Filter} conditionB
 */
ol.format.ogc.filter.Or = function(conditionA, conditionB) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Filter}
 * @param {ol.format.ogc.filter.Filter} condition
 */
ol.format.ogc.filter.Not = function(condition) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Filter}
 * @param {string} geometryName
 * @param {ol.Extent} extent
 * @param {string=} opt_srsName
 */
ol.format.ogc.filter.Bbox = function(geometryName, extent, opt_srsName) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Filter}
 * @param {string} tagName
 * @param {string} propertyName
 */
ol.format.ogc.filter.Comparison = function(tagName, propertyName) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Comparison}
 * @param {string} tagName
 * @param {string} propertyName
 * @param {string|number} expression
 * @param {boolean=} opt_matchCase
 */
ol.format.ogc.filter.ComparisonBinary = function(tagName, propertyName, expression, opt_matchCase) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {string|number} expression
 * @param {boolean=} opt_matchCase
 */
ol.format.ogc.filter.EqualTo = function(propertyName, expression, opt_matchCase) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {string|number} expression
 * @param {boolean=} opt_matchCase
 */
ol.format.ogc.filter.NotEqualTo = function(propertyName, expression, opt_matchCase) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {number} expression
 */
ol.format.ogc.filter.LessThan = function(propertyName, expression) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {number} expression
 */
ol.format.ogc.filter.LessThanOrEqualTo = function(propertyName, expression) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {number} expression
 */
ol.format.ogc.filter.GreaterThan = function(propertyName, expression) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.ComparisonBinary}
 * @param {string} propertyName
 * @param {number} expression
 */
ol.format.ogc.filter.GreaterThanOrEqualTo = function(propertyName, expression) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Comparison}
 * @param {string} propertyName
 */
ol.format.ogc.filter.IsNull = function(propertyName) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Comparison}
 * @param {string} propertyName
 * @param {number} lowerBoundary
 * @param {number} upperBoundary
 */
ol.format.ogc.filter.IsBetween = function(propertyName, lowerBoundary, upperBoundary) {};


/**
 * @constructor
 * @extends {ol.format.ogc.filter.Comparison}
 * @param {string} propertyName
 * @param {string} pattern
 * @param {string=} opt_wildCard
 * @param {string=} opt_singleChar
 * @param {string=} opt_escapeChar
 * @param {boolean=} opt_matchCase
 */
ol.format.ogc.filter.IsLike = function(propertyName, pattern, opt_wildCard, opt_singleChar, opt_escapeChar, opt_matchCase) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GMLOptions=} opt_options
 */
ol.format.GML2 = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GMLOptions=} opt_options
 */
ol.format.GML3 = function(opt_options) {};


/**
 * @param {ol.geom.Geometry} geometry
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GML3.prototype.writeGeometryNode = function(geometry, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GML3.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GML3.prototype.writeFeaturesNode = function(features, opt_options) {};


/**
 * @constructor
 * @extends {ol.format.Feature}
 * @param {olx.format.GMLOptions=} opt_options
 */
ol.format.GML = function(opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {string}
 */
ol.format.GML.prototype.writeFeatures = function(features, opt_options) {};


/**
 * @param {Array.<ol.Feature>} features
 * @param {olx.format.WriteOptions=} opt_options
 * @return {Node}
 */
ol.format.GML.prototype.writeFeaturesNode = function(features, opt_options) {};


/**
 * @constructor
 */
ol.format.GMLBase = function() {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GMLBase.prototype.readFeatures = function(source, opt_options) {};


/**
 * @type {Object}
 */
ol.events;


/**
 * @type {Object}
 */
ol.events.condition;


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.altKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.altShiftKeysOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.always = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.click = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.never = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.pointerMove = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.singleClick = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.doubleClick = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.noModifierKeys = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.platformModifierKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.shiftKeyOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.targetNotEditable = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserPointerEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.mouseOnly = function(mapBrowserEvent) {};


/**
 * @param {ol.MapBrowserEvent} mapBrowserEvent
 * @return {boolean}
 */
ol.events.condition.primaryAction = function(mapBrowserEvent) {};


/**
 * @constructor
 */
ol.events.Event = function() {};


/**
 * @type {string}
 */
ol.events.Event.prototype.type;


/**
 * @type {Object}
 */
ol.events.Event.prototype.target;


/**
 */
ol.events.Event.prototype.preventDefault = function() {};


/**
 */
ol.events.Event.prototype.stopPropagation = function() {};


/**
 * @type {Object}
 */
ol.control;


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.AttributionOptions=} opt_options
 */
ol.control.Attribution = function(opt_options) {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.Attribution.render = function(mapEvent) {};


/**
 * @return {boolean}
 */
ol.control.Attribution.prototype.getCollapsible = function() {};


/**
 * @param {boolean} collapsible
 */
ol.control.Attribution.prototype.setCollapsible = function(collapsible) {};


/**
 * @param {boolean} collapsed
 */
ol.control.Attribution.prototype.setCollapsed = function(collapsed) {};


/**
 * @return {boolean}
 */
ol.control.Attribution.prototype.getCollapsed = function() {};


/**
 * @constructor
 * @extends {ol.Object}
 * @param {olx.control.ControlOptions} options
 */
ol.control.Control = function(options) {};


/**
 * @return {ol.Map}
 */
ol.control.Control.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Control.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.Control.prototype.setTarget = function(target) {};


/**
 * @param {olx.control.DefaultsOptions=} opt_options
 * @return {ol.Collection.<ol.control.Control>}
 */
ol.control.defaults = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.FullScreenOptions=} opt_options
 */
ol.control.FullScreen = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.MousePositionOptions=} opt_options
 */
ol.control.MousePosition = function(opt_options) {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.MousePosition.render = function(mapEvent) {};


/**
 * @return {ol.CoordinateFormatType|undefined}
 */
ol.control.MousePosition.prototype.getCoordinateFormat = function() {};


/**
 * @return {ol.proj.Projection|undefined}
 */
ol.control.MousePosition.prototype.getProjection = function() {};


/**
 * @param {ol.CoordinateFormatType} format
 */
ol.control.MousePosition.prototype.setCoordinateFormat = function(format) {};


/**
 * @param {ol.proj.Projection} projection
 */
ol.control.MousePosition.prototype.setProjection = function(projection) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.OverviewMapOptions=} opt_options
 */
ol.control.OverviewMap = function(opt_options) {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.OverviewMap.render = function(mapEvent) {};


/**
 * @return {boolean}
 */
ol.control.OverviewMap.prototype.getCollapsible = function() {};


/**
 * @param {boolean} collapsible
 */
ol.control.OverviewMap.prototype.setCollapsible = function(collapsible) {};


/**
 * @param {boolean} collapsed
 */
ol.control.OverviewMap.prototype.setCollapsed = function(collapsed) {};


/**
 * @return {boolean}
 */
ol.control.OverviewMap.prototype.getCollapsed = function() {};


/**
 * @return {ol.Map}
 */
ol.control.OverviewMap.prototype.getOverviewMap = function() {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.RotateOptions=} opt_options
 */
ol.control.Rotate = function(opt_options) {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.Rotate.render = function(mapEvent) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ScaleLineOptions=} opt_options
 */
ol.control.ScaleLine = function(opt_options) {};


/**
 * @return {ol.control.ScaleLineUnits|undefined}
 */
ol.control.ScaleLine.prototype.getUnits = function() {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.ScaleLine.render = function(mapEvent) {};


/**
 * @param {ol.control.ScaleLineUnits} units
 */
ol.control.ScaleLine.prototype.setUnits = function(units) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomOptions=} opt_options
 */
ol.control.Zoom = function(opt_options) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomSliderOptions=} opt_options
 */
ol.control.ZoomSlider = function(opt_options) {};


/**
 * @param {ol.MapEvent} mapEvent
 */
ol.control.ZoomSlider.render = function(mapEvent) {};


/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ZoomToExtentOptions=} opt_options
 */
ol.control.ZoomToExtent = function(opt_options) {};


/**
 * @type {Object}
 */
ol.color;


/**
 * @param {ol.Color|string} color
 * @return {ol.Color}
 */
ol.color.asArray = function(color) {};


/**
 * @param {ol.Color|string} color
 * @return {string}
 */
ol.color.asString = function(color) {};


/**
 * @type {string}
 */
ol.CollectionEvent.prototype.type;


/**
 * @type {Object}
 */
ol.CollectionEvent.prototype.target;


/**
 */
ol.CollectionEvent.prototype.preventDefault = function() {};


/**
 */
ol.CollectionEvent.prototype.stopPropagation = function() {};


/**
 */
ol.Object.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Object.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Object.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Object.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Object.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Object.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Object.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Collection.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Collection.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Collection.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Collection.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Collection.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Collection.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.Collection.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Collection.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Collection.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Collection.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Collection.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Collection.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Collection.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.DeviceOrientation.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.DeviceOrientation.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.DeviceOrientation.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.DeviceOrientation.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.DeviceOrientation.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.DeviceOrientation.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.DeviceOrientation.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.DeviceOrientation.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.DeviceOrientation.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.DeviceOrientation.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.DeviceOrientation.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.DeviceOrientation.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.DeviceOrientation.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Feature.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Feature.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Feature.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Feature.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Feature.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Feature.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.Feature.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Feature.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Feature.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Feature.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Feature.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Feature.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Feature.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Geolocation.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Geolocation.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Geolocation.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Geolocation.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Geolocation.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Geolocation.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.Geolocation.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Geolocation.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Geolocation.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Geolocation.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Geolocation.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Geolocation.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Geolocation.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileCoord}
 */
ol.ImageTile.prototype.getTileCoord = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Map.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Map.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Map.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Map.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Map.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Map.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.Map.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Map.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Map.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Map.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Map.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Map.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Map.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.MapEvent.prototype.type;


/**
 * @type {Object}
 */
ol.MapEvent.prototype.target;


/**
 */
ol.MapEvent.prototype.preventDefault = function() {};


/**
 */
ol.MapEvent.prototype.stopPropagation = function() {};


/**
 * @type {ol.Map}
 */
ol.MapBrowserEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapBrowserEvent.prototype.frameState;


/**
 * @type {string}
 */
ol.MapBrowserEvent.prototype.type;


/**
 * @type {Object}
 */
ol.MapBrowserEvent.prototype.target;


/**
 */
ol.MapBrowserEvent.prototype.preventDefault = function() {};


/**
 */
ol.MapBrowserEvent.prototype.stopPropagation = function() {};


/**
 * @constructor
 */
ol.MapBrowserPointerEvent = function() {};


/**
 * @type {Event}
 */
ol.MapBrowserPointerEvent.prototype.originalEvent;


/**
 * @type {ol.Pixel}
 */
ol.MapBrowserPointerEvent.prototype.pixel;


/**
 * @type {ol.Coordinate}
 */
ol.MapBrowserPointerEvent.prototype.coordinate;


/**
 * @type {boolean}
 */
ol.MapBrowserPointerEvent.prototype.dragging;


/**
 */
ol.MapBrowserPointerEvent.prototype.preventDefault = function() {};


/**
 */
ol.MapBrowserPointerEvent.prototype.stopPropagation = function() {};


/**
 * @type {ol.Map}
 */
ol.MapBrowserPointerEvent.prototype.map;


/**
 * @type {olx.FrameState}
 */
ol.MapBrowserPointerEvent.prototype.frameState;


/**
 * @type {string}
 */
ol.MapBrowserPointerEvent.prototype.type;


/**
 * @type {Object}
 */
ol.MapBrowserPointerEvent.prototype.target;


/**
 * @type {string}
 */
ol.ObjectEvent.prototype.type;


/**
 * @type {Object}
 */
ol.ObjectEvent.prototype.target;


/**
 */
ol.ObjectEvent.prototype.preventDefault = function() {};


/**
 */
ol.ObjectEvent.prototype.stopPropagation = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.Overlay.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.Overlay.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.Overlay.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.Overlay.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.Overlay.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.Overlay.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.Overlay.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.Overlay.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.Overlay.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Overlay.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.Overlay.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.Overlay.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.Overlay.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileCoord}
 */
ol.VectorTile.prototype.getTileCoord = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.View.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.View.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.View.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.View.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.View.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.View.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.View.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.View.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.View.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.View.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.View.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.View.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.View.prototype.unByKey = function(key) {};


/**
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getMaxZoom = function() {};


/**
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getMinZoom = function() {};


/**
 * @param {number} z
 * @return {ol.Coordinate}
 */
ol.tilegrid.WMTS.prototype.getOrigin = function(z) {};


/**
 * @param {number} z
 * @return {number}
 */
ol.tilegrid.WMTS.prototype.getResolution = function(z) {};


/**
 * @return {Array.<number>}
 */
ol.tilegrid.WMTS.prototype.getResolutions = function() {};


/**
 * @param {ol.TileCoord} tileCoord
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.tilegrid.WMTS.prototype.getTileCoordExtent = function(tileCoord, opt_extent) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} resolution
 * @param {ol.TileCoord=} opt_tileCoord
 * @return {ol.TileCoord}
 */
ol.tilegrid.WMTS.prototype.getTileCoordForCoordAndResolution = function(coordinate, resolution, opt_tileCoord) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {number} z
 * @param {ol.TileCoord=} opt_tileCoord
 * @return {ol.TileCoord}
 */
ol.tilegrid.WMTS.prototype.getTileCoordForCoordAndZ = function(coordinate, z, opt_tileCoord) {};


/**
 * @param {number} z
 * @return {number|ol.Size}
 */
ol.tilegrid.WMTS.prototype.getTileSize = function(z) {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.style.Circle.prototype.getRotateWithView = function() {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Circle.prototype.getScale = function() {};


/**
 * @return {boolean}
 */
ol.style.Circle.prototype.getSnapToPixel = function() {};


/**
 * @param {number} opacity
 */
ol.style.Circle.prototype.setOpacity = function(opacity) {};


/**
 * @param {number} rotation
 */
ol.style.Circle.prototype.setRotation = function(rotation) {};


/**
 * @param {number} scale
 */
ol.style.Circle.prototype.setScale = function(scale) {};


/**
 * @return {number}
 */
ol.style.Icon.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.style.Icon.prototype.getRotateWithView = function() {};


/**
 * @return {number}
 */
ol.style.Icon.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.Icon.prototype.getScale = function() {};


/**
 * @return {boolean}
 */
ol.style.Icon.prototype.getSnapToPixel = function() {};


/**
 * @param {number} opacity
 */
ol.style.Icon.prototype.setOpacity = function(opacity) {};


/**
 * @param {number} rotation
 */
ol.style.Icon.prototype.setRotation = function(rotation) {};


/**
 * @param {number} scale
 */
ol.style.Icon.prototype.setScale = function(scale) {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.style.RegularShape.prototype.getRotateWithView = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getRotation = function() {};


/**
 * @return {number}
 */
ol.style.RegularShape.prototype.getScale = function() {};


/**
 * @return {boolean}
 */
ol.style.RegularShape.prototype.getSnapToPixel = function() {};


/**
 * @param {number} opacity
 */
ol.style.RegularShape.prototype.setOpacity = function(opacity) {};


/**
 * @param {number} rotation
 */
ol.style.RegularShape.prototype.setRotation = function(rotation) {};


/**
 * @param {number} scale
 */
ol.style.RegularShape.prototype.setScale = function(scale) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Source.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Source.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Source.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Source.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Source.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Source.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Source.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Source.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Source.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Source.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Source.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Source.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Source.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Tile.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Tile.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Tile.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Tile.prototype.getState = function() {};


/**
 */
ol.source.Tile.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Tile.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Tile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Tile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Tile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Tile.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Tile.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Tile.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Tile.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Tile.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Tile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Tile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Tile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Tile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Tile.prototype.unByKey = function(key) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.UrlTile.prototype.getTileGrid = function() {};


/**
 */
ol.source.UrlTile.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.UrlTile.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.UrlTile.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.UrlTile.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.UrlTile.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.UrlTile.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.UrlTile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.UrlTile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.UrlTile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.UrlTile.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.UrlTile.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.UrlTile.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.UrlTile.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.UrlTile.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.UrlTile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.UrlTile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.UrlTile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.UrlTile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.UrlTile.prototype.unByKey = function(key) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileImage.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileImage.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.TileImage.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileImage.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.TileImage.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.TileImage.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.TileImage.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileImage.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileImage.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileImage.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileImage.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileImage.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileImage.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileImage.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileImage.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileImage.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileImage.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileImage.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileImage.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileImage.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileImage.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileImage.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileImage.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileImage.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileImage.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileImage.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileImage.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.BingMaps.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.BingMaps.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.BingMaps.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.BingMaps.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.BingMaps.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.BingMaps.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.BingMaps.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.BingMaps.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.BingMaps.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.BingMaps.prototype.getTileGrid = function() {};


/**
 */
ol.source.BingMaps.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.BingMaps.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.BingMaps.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.BingMaps.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.BingMaps.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.BingMaps.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.BingMaps.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.BingMaps.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.BingMaps.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.BingMaps.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.BingMaps.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.BingMaps.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.BingMaps.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.BingMaps.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.BingMaps.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.BingMaps.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.BingMaps.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.BingMaps.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.BingMaps.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.XYZ.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.XYZ.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.XYZ.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.XYZ.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.XYZ.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.XYZ.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.XYZ.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.XYZ.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.XYZ.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.XYZ.prototype.getTileGrid = function() {};


/**
 */
ol.source.XYZ.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.XYZ.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.XYZ.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.XYZ.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.XYZ.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.XYZ.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.XYZ.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.XYZ.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.XYZ.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.XYZ.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.XYZ.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.XYZ.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.XYZ.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.XYZ.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.XYZ.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.XYZ.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.XYZ.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.XYZ.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.XYZ.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.CartoDB.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.CartoDB.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.CartoDB.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.CartoDB.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.CartoDB.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.CartoDB.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.CartoDB.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.CartoDB.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.CartoDB.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.CartoDB.prototype.getTileGrid = function() {};


/**
 */
ol.source.CartoDB.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.CartoDB.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.CartoDB.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.CartoDB.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.CartoDB.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.CartoDB.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.CartoDB.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.CartoDB.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.CartoDB.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.CartoDB.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.CartoDB.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.CartoDB.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.CartoDB.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.CartoDB.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.CartoDB.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.CartoDB.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.CartoDB.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.CartoDB.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.CartoDB.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Vector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Vector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Vector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Vector.prototype.getState = function() {};


/**
 */
ol.source.Vector.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Vector.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Vector.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Vector.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Vector.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Vector.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Vector.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Vector.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Vector.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Vector.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Vector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Vector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Vector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Vector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Vector.prototype.unByKey = function(key) {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Cluster.prototype.addFeature = function(feature) {};


/**
 * @param {Array.<ol.Feature>} features
 */
ol.source.Cluster.prototype.addFeatures = function(features) {};


/**
 * @param {boolean=} opt_fast
 */
ol.source.Cluster.prototype.clear = function(opt_fast) {};


/**
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Cluster.prototype.forEachFeature = function(callback, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Cluster.prototype.forEachFeatureInExtent = function(extent, callback, opt_this) {};


/**
 * @param {ol.Extent} extent
 * @param {Function} callback
 * @param {T=} opt_this
 * @return {S|undefined}
 * @template T,S
 */
ol.source.Cluster.prototype.forEachFeatureIntersectingExtent = function(extent, callback, opt_this) {};


/**
 * @return {ol.Collection.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeaturesCollection = function() {};


/**
 * @return {Array.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeatures = function() {};


/**
 * @param {ol.Coordinate} coordinate
 * @return {Array.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeaturesAtCoordinate = function(coordinate) {};


/**
 * @param {ol.Extent} extent
 * @return {Array.<ol.Feature>}
 */
ol.source.Cluster.prototype.getFeaturesInExtent = function(extent) {};


/**
 * @param {ol.Coordinate} coordinate
 * @param {Function} opt_filter
 * @return {ol.Feature}
 */
ol.source.Cluster.prototype.getClosestFeatureToCoordinate = function(coordinate, opt_filter) {};


/**
 * @return {ol.Extent}
 */
ol.source.Cluster.prototype.getExtent = function() {};


/**
 * @param {string|number} id
 * @return {ol.Feature}
 */
ol.source.Cluster.prototype.getFeatureById = function(id) {};


/**
 * @return {ol.format.Feature|undefined}
 */
ol.source.Cluster.prototype.getFormat = function() {};


/**
 * @return {string|ol.FeatureUrlFunction|undefined}
 */
ol.source.Cluster.prototype.getUrl = function() {};


/**
 * @param {ol.Feature} feature
 */
ol.source.Cluster.prototype.removeFeature = function(feature) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Cluster.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Cluster.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Cluster.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Cluster.prototype.getState = function() {};


/**
 */
ol.source.Cluster.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Cluster.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Cluster.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Cluster.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Cluster.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Cluster.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Cluster.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Cluster.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Cluster.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Cluster.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Cluster.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Cluster.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Cluster.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Cluster.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Cluster.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Image.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Image.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Image.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Image.prototype.getState = function() {};


/**
 */
ol.source.Image.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Image.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Image.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Image.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Image.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Image.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Image.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Image.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Image.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Image.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Image.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Image.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Image.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Image.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Image.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageArcGISRest.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageArcGISRest.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageArcGISRest.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageArcGISRest.prototype.getState = function() {};


/**
 */
ol.source.ImageArcGISRest.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageArcGISRest.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageArcGISRest.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageArcGISRest.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageArcGISRest.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageArcGISRest.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageArcGISRest.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageArcGISRest.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageArcGISRest.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageArcGISRest.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageArcGISRest.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageArcGISRest.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageArcGISRest.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageArcGISRest.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageArcGISRest.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageCanvas.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageCanvas.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageCanvas.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageCanvas.prototype.getState = function() {};


/**
 */
ol.source.ImageCanvas.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageCanvas.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageCanvas.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageCanvas.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageCanvas.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageCanvas.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageCanvas.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageCanvas.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageCanvas.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageCanvas.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageCanvas.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageCanvas.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageCanvas.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageCanvas.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageCanvas.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageMapGuide.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageMapGuide.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageMapGuide.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageMapGuide.prototype.getState = function() {};


/**
 */
ol.source.ImageMapGuide.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageMapGuide.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageMapGuide.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageMapGuide.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageMapGuide.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageMapGuide.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageMapGuide.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageMapGuide.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageMapGuide.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageMapGuide.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageMapGuide.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageMapGuide.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageMapGuide.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageMapGuide.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageMapGuide.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.source.ImageEvent.prototype.type;


/**
 * @type {Object}
 */
ol.source.ImageEvent.prototype.target;


/**
 */
ol.source.ImageEvent.prototype.preventDefault = function() {};


/**
 */
ol.source.ImageEvent.prototype.stopPropagation = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageStatic.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageStatic.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageStatic.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageStatic.prototype.getState = function() {};


/**
 */
ol.source.ImageStatic.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageStatic.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageStatic.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageStatic.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageStatic.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageStatic.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageStatic.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageStatic.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageStatic.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageStatic.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageStatic.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageStatic.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageStatic.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageStatic.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageStatic.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageVector.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageVector.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageVector.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageVector.prototype.getState = function() {};


/**
 */
ol.source.ImageVector.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageVector.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageVector.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageVector.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageVector.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageVector.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageVector.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageVector.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageVector.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageVector.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageVector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageVector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageVector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageVector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageVector.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.ImageWMS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.ImageWMS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.ImageWMS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.ImageWMS.prototype.getState = function() {};


/**
 */
ol.source.ImageWMS.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.ImageWMS.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.ImageWMS.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.ImageWMS.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.ImageWMS.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.ImageWMS.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.ImageWMS.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.ImageWMS.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.ImageWMS.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.ImageWMS.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.ImageWMS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageWMS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.ImageWMS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.ImageWMS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.ImageWMS.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.MapQuest.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.MapQuest.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.MapQuest.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.MapQuest.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.MapQuest.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.MapQuest.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.MapQuest.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.MapQuest.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.MapQuest.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.MapQuest.prototype.getTileGrid = function() {};


/**
 */
ol.source.MapQuest.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.MapQuest.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.MapQuest.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.MapQuest.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.MapQuest.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.MapQuest.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.MapQuest.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.MapQuest.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.MapQuest.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.MapQuest.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.MapQuest.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.MapQuest.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.MapQuest.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.MapQuest.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.MapQuest.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.MapQuest.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.MapQuest.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.MapQuest.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.MapQuest.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.OSM.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.OSM.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.OSM.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.OSM.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.OSM.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.OSM.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.OSM.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.OSM.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.OSM.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.OSM.prototype.getTileGrid = function() {};


/**
 */
ol.source.OSM.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.OSM.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.OSM.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.OSM.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.OSM.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.OSM.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.OSM.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.OSM.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.OSM.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.OSM.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.OSM.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.OSM.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.OSM.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.OSM.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.OSM.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.OSM.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.OSM.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.OSM.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.OSM.prototype.unByKey = function(key) {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Raster.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Raster.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Raster.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Raster.prototype.getState = function() {};


/**
 */
ol.source.Raster.prototype.refresh = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Raster.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Raster.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Raster.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Raster.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Raster.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Raster.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Raster.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Raster.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Raster.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Raster.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Raster.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Raster.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Raster.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Raster.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.source.RasterEvent.prototype.type;


/**
 * @type {Object}
 */
ol.source.RasterEvent.prototype.target;


/**
 */
ol.source.RasterEvent.prototype.preventDefault = function() {};


/**
 */
ol.source.RasterEvent.prototype.stopPropagation = function() {};


/**
 * @param {boolean} render
 */
ol.source.Stamen.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.Stamen.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.Stamen.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.Stamen.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.Stamen.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.Stamen.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.Stamen.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.Stamen.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.Stamen.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Stamen.prototype.getTileGrid = function() {};


/**
 */
ol.source.Stamen.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Stamen.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Stamen.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Stamen.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Stamen.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Stamen.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Stamen.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Stamen.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Stamen.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Stamen.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Stamen.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Stamen.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Stamen.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Stamen.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Stamen.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Stamen.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Stamen.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Stamen.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Stamen.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.TileArcGISRest.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.TileArcGISRest.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileArcGISRest.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileArcGISRest.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.TileArcGISRest.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileArcGISRest.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.TileArcGISRest.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.TileArcGISRest.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.TileArcGISRest.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileArcGISRest.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileArcGISRest.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileArcGISRest.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileArcGISRest.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileArcGISRest.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileArcGISRest.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileArcGISRest.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileArcGISRest.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileArcGISRest.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileArcGISRest.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileArcGISRest.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileArcGISRest.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileArcGISRest.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileArcGISRest.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileArcGISRest.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileArcGISRest.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileArcGISRest.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileArcGISRest.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileArcGISRest.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileArcGISRest.prototype.unByKey = function(key) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileDebug.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileDebug.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileDebug.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileDebug.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileDebug.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileDebug.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileDebug.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileDebug.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileDebug.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileDebug.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileDebug.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileDebug.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileDebug.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileDebug.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileDebug.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileDebug.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileDebug.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileDebug.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileDebug.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileDebug.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.TileJSON.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.TileJSON.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileJSON.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileJSON.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.TileJSON.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileJSON.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.TileJSON.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.TileJSON.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.TileJSON.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileJSON.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileJSON.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileJSON.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileJSON.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileJSON.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileJSON.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileJSON.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileJSON.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileJSON.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileJSON.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileJSON.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileJSON.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileJSON.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileJSON.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileJSON.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileJSON.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileJSON.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileJSON.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileJSON.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileJSON.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.source.TileEvent.prototype.type;


/**
 * @type {Object}
 */
ol.source.TileEvent.prototype.target;


/**
 */
ol.source.TileEvent.prototype.preventDefault = function() {};


/**
 */
ol.source.TileEvent.prototype.stopPropagation = function() {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileUTFGrid.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileUTFGrid.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileUTFGrid.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileUTFGrid.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileUTFGrid.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileUTFGrid.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileUTFGrid.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileUTFGrid.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileUTFGrid.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileUTFGrid.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileUTFGrid.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileUTFGrid.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileUTFGrid.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileUTFGrid.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileUTFGrid.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileUTFGrid.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileUTFGrid.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileUTFGrid.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileUTFGrid.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileUTFGrid.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.TileWMS.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.TileWMS.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.TileWMS.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.TileWMS.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.TileWMS.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.TileWMS.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.TileWMS.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.TileWMS.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.TileWMS.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.TileWMS.prototype.getTileGrid = function() {};


/**
 */
ol.source.TileWMS.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.TileWMS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.TileWMS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.TileWMS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.TileWMS.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.TileWMS.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.TileWMS.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.TileWMS.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.TileWMS.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.TileWMS.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.TileWMS.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.TileWMS.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.TileWMS.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.TileWMS.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.TileWMS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileWMS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.TileWMS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.TileWMS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.TileWMS.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.source.VectorEvent.prototype.type;


/**
 * @type {Object}
 */
ol.source.VectorEvent.prototype.target;


/**
 */
ol.source.VectorEvent.prototype.preventDefault = function() {};


/**
 */
ol.source.VectorEvent.prototype.stopPropagation = function() {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.VectorTile.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.VectorTile.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.VectorTile.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.VectorTile.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.VectorTile.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.VectorTile.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.VectorTile.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.VectorTile.prototype.getTileGrid = function() {};


/**
 */
ol.source.VectorTile.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.VectorTile.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.VectorTile.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.VectorTile.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.VectorTile.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.VectorTile.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.VectorTile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.VectorTile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.VectorTile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.VectorTile.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.VectorTile.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.VectorTile.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.VectorTile.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.VectorTile.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.VectorTile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.VectorTile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.VectorTile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.VectorTile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.VectorTile.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.WMTS.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.WMTS.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.WMTS.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.WMTS.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.WMTS.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.WMTS.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.WMTS.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.WMTS.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.WMTS.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.WMTS.prototype.getTileGrid = function() {};


/**
 */
ol.source.WMTS.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.WMTS.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.WMTS.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.WMTS.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.WMTS.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.WMTS.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.WMTS.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.WMTS.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.WMTS.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.WMTS.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.WMTS.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.WMTS.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.WMTS.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.WMTS.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.WMTS.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.WMTS.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.WMTS.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.WMTS.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.WMTS.prototype.unByKey = function(key) {};


/**
 * @param {boolean} render
 */
ol.source.Zoomify.prototype.setRenderReprojectionEdges = function(render) {};


/**
 * @param {ol.proj.ProjectionLike} projection
 * @param {ol.tilegrid.TileGrid} tilegrid
 */
ol.source.Zoomify.prototype.setTileGridForProjection = function(projection, tilegrid) {};


/**
 * @return {ol.TileLoadFunctionType}
 */
ol.source.Zoomify.prototype.getTileLoadFunction = function() {};


/**
 * @return {ol.TileUrlFunctionType}
 */
ol.source.Zoomify.prototype.getTileUrlFunction = function() {};


/**
 * @return {!Array.<string>|null}
 */
ol.source.Zoomify.prototype.getUrls = function() {};


/**
 * @param {ol.TileLoadFunctionType} tileLoadFunction
 */
ol.source.Zoomify.prototype.setTileLoadFunction = function(tileLoadFunction) {};


/**
 * @param {ol.TileUrlFunctionType} tileUrlFunction
 * @param {string=} opt_key
 */
ol.source.Zoomify.prototype.setTileUrlFunction = function(tileUrlFunction, opt_key) {};


/**
 * @param {string} url
 */
ol.source.Zoomify.prototype.setUrl = function(url) {};


/**
 * @param {Array.<string>} urls
 */
ol.source.Zoomify.prototype.setUrls = function(urls) {};


/**
 * @return {ol.tilegrid.TileGrid}
 */
ol.source.Zoomify.prototype.getTileGrid = function() {};


/**
 */
ol.source.Zoomify.prototype.refresh = function() {};


/**
 * @return {Array.<ol.Attribution>}
 */
ol.source.Zoomify.prototype.getAttributions = function() {};


/**
 * @return {string|olx.LogoOptions|undefined}
 */
ol.source.Zoomify.prototype.getLogo = function() {};


/**
 * @return {ol.proj.Projection}
 */
ol.source.Zoomify.prototype.getProjection = function() {};


/**
 * @return {ol.source.State}
 */
ol.source.Zoomify.prototype.getState = function() {};


/**
 * @param {ol.AttributionLike|undefined} attributions
 */
ol.source.Zoomify.prototype.setAttributions = function(attributions) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.source.Zoomify.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.source.Zoomify.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.source.Zoomify.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.source.Zoomify.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.source.Zoomify.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.source.Zoomify.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.source.Zoomify.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.source.Zoomify.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.source.Zoomify.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Zoomify.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.source.Zoomify.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.source.Zoomify.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.source.Zoomify.prototype.unByKey = function(key) {};


/**
 * @type {Object}
 */
ol.reproj;


/**
 * @constructor
 */
ol.reproj.Tile = function() {};


/**
 * @return {ol.TileCoord}
 */
ol.reproj.Tile.prototype.getTileCoord = function() {};


/**
 * @type {Object}
 */
ol.renderer;


/**
 * @constructor
 */
ol.renderer.Layer = function() {};


/**
 */
ol.renderer.Layer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.Layer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.Layer.prototype.unByKey = function(key) {};


/**
 * @type {Object}
 */
ol.renderer.webgl;


/**
 * @constructor
 */
ol.renderer.webgl.Layer = function() {};


/**
 */
ol.renderer.webgl.Layer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.webgl.Layer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.webgl.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.webgl.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.webgl.Layer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.webgl.ImageLayer = function() {};


/**
 */
ol.renderer.webgl.ImageLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.webgl.ImageLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.webgl.ImageLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.ImageLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.ImageLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.webgl.ImageLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.webgl.ImageLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.webgl.TileLayer = function() {};


/**
 */
ol.renderer.webgl.TileLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.webgl.TileLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.webgl.TileLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.TileLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.TileLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.webgl.TileLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.webgl.TileLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.webgl.VectorLayer = function() {};


/**
 */
ol.renderer.webgl.VectorLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.webgl.VectorLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.webgl.VectorLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.VectorLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.webgl.VectorLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.webgl.VectorLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.webgl.VectorLayer.prototype.unByKey = function(key) {};


/**
 * @type {Object}
 */
ol.renderer.dom;


/**
 * @constructor
 */
ol.renderer.dom.Layer = function() {};


/**
 */
ol.renderer.dom.Layer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.dom.Layer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.dom.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.dom.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.dom.Layer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.dom.ImageLayer = function() {};


/**
 */
ol.renderer.dom.ImageLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.dom.ImageLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.dom.ImageLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.ImageLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.ImageLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.dom.ImageLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.dom.ImageLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.dom.TileLayer = function() {};


/**
 */
ol.renderer.dom.TileLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.dom.TileLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.dom.TileLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.TileLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.TileLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.dom.TileLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.dom.TileLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.dom.VectorLayer = function() {};


/**
 */
ol.renderer.dom.VectorLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.dom.VectorLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.dom.VectorLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.VectorLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.dom.VectorLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.dom.VectorLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.dom.VectorLayer.prototype.unByKey = function(key) {};


/**
 * @type {Object}
 */
ol.renderer.canvas;


/**
 * @constructor
 */
ol.renderer.canvas.Layer = function() {};


/**
 */
ol.renderer.canvas.Layer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.canvas.Layer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.canvas.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.canvas.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.canvas.Layer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.canvas.ImageLayer = function() {};


/**
 */
ol.renderer.canvas.ImageLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.canvas.ImageLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.canvas.ImageLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.ImageLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.ImageLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.canvas.ImageLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.canvas.ImageLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.canvas.TileLayer = function() {};


/**
 */
ol.renderer.canvas.TileLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.canvas.TileLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.canvas.TileLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.TileLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.TileLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.canvas.TileLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.canvas.TileLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.canvas.VectorLayer = function() {};


/**
 */
ol.renderer.canvas.VectorLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.canvas.VectorLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.canvas.VectorLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.VectorLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.VectorLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.canvas.VectorLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.canvas.VectorLayer.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.renderer.canvas.VectorTileLayer = function() {};


/**
 */
ol.renderer.canvas.VectorTileLayer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.renderer.canvas.VectorTileLayer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.renderer.canvas.VectorTileLayer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.VectorTileLayer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.renderer.canvas.VectorTileLayer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.renderer.canvas.VectorTileLayer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.renderer.canvas.VectorTileLayer.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.render.Event.prototype.type;


/**
 * @type {Object}
 */
ol.render.Event.prototype.target;


/**
 */
ol.render.Event.prototype.preventDefault = function() {};


/**
 */
ol.render.Event.prototype.stopPropagation = function() {};


/**
 * @type {Object}
 */
ol.pointer;


/**
 * @constructor
 */
ol.pointer.PointerEvent = function() {};


/**
 * @type {string}
 */
ol.pointer.PointerEvent.prototype.type;


/**
 * @type {Object}
 */
ol.pointer.PointerEvent.prototype.target;


/**
 */
ol.pointer.PointerEvent.prototype.preventDefault = function() {};


/**
 */
ol.pointer.PointerEvent.prototype.stopPropagation = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Base.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Base.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Base.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Base.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Base.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Base.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Base.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Base.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Base.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Base.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Base.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Base.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Base.prototype.unByKey = function(key) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Layer.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Layer.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Layer.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Layer.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Layer.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Layer.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Layer.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Layer.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Layer.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Layer.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Layer.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Layer.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Layer.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Layer.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Layer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Layer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Layer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Layer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Layer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Layer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Layer.prototype.unByKey = function(key) {};


/**
 * @param {ol.Map} map
 */
ol.layer.Vector.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.Vector.prototype.setSource = function(source) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Vector.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Vector.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Vector.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Vector.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Vector.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Vector.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Vector.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Vector.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Vector.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Vector.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Vector.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Vector.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Vector.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Vector.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Vector.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Vector.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Vector.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Vector.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Vector.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Vector.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Vector.prototype.unByKey = function(key) {};


/**
 * @return {ol.source.Vector}
 */
ol.layer.Heatmap.prototype.getSource = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.layer.Heatmap.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.layer.Heatmap.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|null|undefined} style
 */
ol.layer.Heatmap.prototype.setStyle = function(style) {};


/**
 * @param {ol.Map} map
 */
ol.layer.Heatmap.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.Heatmap.prototype.setSource = function(source) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Heatmap.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Heatmap.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Heatmap.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Heatmap.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Heatmap.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Heatmap.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Heatmap.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Heatmap.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Heatmap.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Heatmap.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Heatmap.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Heatmap.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Heatmap.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Heatmap.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Heatmap.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Heatmap.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Heatmap.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Heatmap.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Heatmap.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Heatmap.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Heatmap.prototype.unByKey = function(key) {};


/**
 * @param {ol.Map} map
 */
ol.layer.Image.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.Image.prototype.setSource = function(source) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Image.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Image.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Image.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Image.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Image.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Image.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Image.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Image.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Image.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Image.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Image.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Image.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Image.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Image.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Image.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Image.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Image.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Image.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Image.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Image.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Image.prototype.unByKey = function(key) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Group.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Group.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Group.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Group.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Group.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Group.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Group.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Group.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Group.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Group.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Group.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Group.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Group.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Group.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Group.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Group.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Group.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Group.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Group.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Group.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Group.prototype.unByKey = function(key) {};


/**
 * @param {ol.Map} map
 */
ol.layer.Tile.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.Tile.prototype.setSource = function(source) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.Tile.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.Tile.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.Tile.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.Tile.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.Tile.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.Tile.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.Tile.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.Tile.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.Tile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.Tile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.Tile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.Tile.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.Tile.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.Tile.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.Tile.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.Tile.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.Tile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Tile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.Tile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.Tile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.Tile.prototype.unByKey = function(key) {};


/**
 * @return {ol.source.Vector}
 */
ol.layer.VectorTile.prototype.getSource = function() {};


/**
 * @return {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction}
 */
ol.layer.VectorTile.prototype.getStyle = function() {};


/**
 * @return {ol.style.StyleFunction|undefined}
 */
ol.layer.VectorTile.prototype.getStyleFunction = function() {};


/**
 * @param {ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|null|undefined} style
 */
ol.layer.VectorTile.prototype.setStyle = function(style) {};


/**
 * @param {ol.Map} map
 */
ol.layer.VectorTile.prototype.setMap = function(map) {};


/**
 * @param {ol.source.Source} source
 */
ol.layer.VectorTile.prototype.setSource = function(source) {};


/**
 * @return {ol.Extent|undefined}
 */
ol.layer.VectorTile.prototype.getExtent = function() {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getMaxResolution = function() {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getMinResolution = function() {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getOpacity = function() {};


/**
 * @return {boolean}
 */
ol.layer.VectorTile.prototype.getVisible = function() {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getZIndex = function() {};


/**
 * @param {ol.Extent|undefined} extent
 */
ol.layer.VectorTile.prototype.setExtent = function(extent) {};


/**
 * @param {number} maxResolution
 */
ol.layer.VectorTile.prototype.setMaxResolution = function(maxResolution) {};


/**
 * @param {number} minResolution
 */
ol.layer.VectorTile.prototype.setMinResolution = function(minResolution) {};


/**
 * @param {number} opacity
 */
ol.layer.VectorTile.prototype.setOpacity = function(opacity) {};


/**
 * @param {boolean} visible
 */
ol.layer.VectorTile.prototype.setVisible = function(visible) {};


/**
 * @param {number} zindex
 */
ol.layer.VectorTile.prototype.setZIndex = function(zindex) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.layer.VectorTile.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.layer.VectorTile.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.layer.VectorTile.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.layer.VectorTile.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.layer.VectorTile.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.layer.VectorTile.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.layer.VectorTile.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.layer.VectorTile.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.layer.VectorTile.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.VectorTile.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.layer.VectorTile.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.layer.VectorTile.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.layer.VectorTile.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Interaction.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Interaction.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Interaction.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Interaction.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Interaction.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Interaction.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Interaction.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Interaction.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Interaction.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Interaction.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Interaction.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Interaction.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Interaction.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DoubleClickZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DoubleClickZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DoubleClickZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DoubleClickZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DoubleClickZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DoubleClickZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DoubleClickZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DoubleClickZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DoubleClickZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DoubleClickZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DoubleClickZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DoubleClickZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DoubleClickZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DoubleClickZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DoubleClickZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DoubleClickZoom.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DragAndDrop.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragAndDrop.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragAndDrop.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragAndDrop.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragAndDrop.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragAndDrop.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragAndDrop.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragAndDrop.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragAndDrop.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragAndDrop.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragAndDrop.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragAndDrop.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragAndDrop.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragAndDrop.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragAndDrop.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragAndDrop.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.interaction.DragAndDropEvent.prototype.type;


/**
 * @type {Object}
 */
ol.interaction.DragAndDropEvent.prototype.target;


/**
 */
ol.interaction.DragAndDropEvent.prototype.preventDefault = function() {};


/**
 */
ol.interaction.DragAndDropEvent.prototype.stopPropagation = function() {};


/**
 * @type {string}
 */
ol.DragBoxEvent.prototype.type;


/**
 * @type {Object}
 */
ol.DragBoxEvent.prototype.target;


/**
 */
ol.DragBoxEvent.prototype.preventDefault = function() {};


/**
 */
ol.DragBoxEvent.prototype.stopPropagation = function() {};


/**
 * @return {boolean}
 */
ol.interaction.Pointer.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Pointer.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Pointer.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Pointer.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Pointer.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Pointer.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Pointer.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Pointer.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Pointer.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Pointer.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Pointer.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Pointer.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Pointer.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Pointer.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Pointer.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Pointer.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DragBox.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragBox.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragBox.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragBox.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragBox.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragBox.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragBox.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragBox.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragBox.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragBox.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragBox.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragBox.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragBox.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragBox.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragBox.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragBox.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DragPan.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragPan.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragPan.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragPan.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragPan.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragPan.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragPan.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragPan.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragPan.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragPan.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragPan.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragPan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragPan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragPan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragPan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragPan.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DragRotateAndZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragRotateAndZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragRotateAndZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragRotateAndZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragRotateAndZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragRotateAndZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotateAndZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotateAndZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotateAndZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragRotateAndZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragRotateAndZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragRotateAndZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragRotateAndZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragRotateAndZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragRotateAndZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragRotateAndZoom.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.DragRotate.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragRotate.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragRotate.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragRotate.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragRotate.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragRotate.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotate.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotate.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragRotate.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragRotate.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragRotate.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragRotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragRotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragRotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragRotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragRotate.prototype.unByKey = function(key) {};


/**
 * @return {ol.geom.Polygon}
 */
ol.interaction.DragZoom.prototype.getGeometry = function() {};


/**
 * @return {boolean}
 */
ol.interaction.DragZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.DragZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.DragZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.DragZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.DragZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.DragZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.DragZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.DragZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.DragZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.DragZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.DragZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.DragZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.DragZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.DragZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.DragZoom.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.interaction.DrawEvent.prototype.type;


/**
 * @type {Object}
 */
ol.interaction.DrawEvent.prototype.target;


/**
 */
ol.interaction.DrawEvent.prototype.preventDefault = function() {};


/**
 */
ol.interaction.DrawEvent.prototype.stopPropagation = function() {};


/**
 * @return {boolean}
 */
ol.interaction.Draw.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Draw.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Draw.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Draw.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Draw.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Draw.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Draw.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Draw.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Draw.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Draw.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Draw.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Draw.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Draw.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Draw.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Draw.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Draw.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.KeyboardPan.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.KeyboardPan.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.KeyboardPan.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.KeyboardPan.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.KeyboardPan.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.KeyboardPan.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardPan.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardPan.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardPan.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.KeyboardPan.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.KeyboardPan.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.KeyboardPan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.KeyboardPan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.KeyboardPan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.KeyboardPan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.KeyboardPan.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.KeyboardZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.KeyboardZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.KeyboardZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.KeyboardZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.KeyboardZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.KeyboardZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.KeyboardZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.KeyboardZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.KeyboardZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.KeyboardZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.KeyboardZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.KeyboardZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.KeyboardZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.KeyboardZoom.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.interaction.ModifyEvent.prototype.type;


/**
 * @type {Object}
 */
ol.interaction.ModifyEvent.prototype.target;


/**
 */
ol.interaction.ModifyEvent.prototype.preventDefault = function() {};


/**
 */
ol.interaction.ModifyEvent.prototype.stopPropagation = function() {};


/**
 * @return {boolean}
 */
ol.interaction.Modify.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Modify.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Modify.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Modify.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Modify.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Modify.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Modify.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Modify.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Modify.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Modify.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Modify.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Modify.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Modify.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Modify.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Modify.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Modify.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.MouseWheelZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.MouseWheelZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.MouseWheelZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.MouseWheelZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.MouseWheelZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.MouseWheelZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.MouseWheelZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.MouseWheelZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.MouseWheelZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.MouseWheelZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.MouseWheelZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.MouseWheelZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.MouseWheelZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.MouseWheelZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.MouseWheelZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.MouseWheelZoom.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.PinchRotate.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.PinchRotate.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.PinchRotate.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.PinchRotate.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.PinchRotate.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.PinchRotate.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchRotate.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchRotate.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchRotate.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.PinchRotate.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.PinchRotate.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.PinchRotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.PinchRotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.PinchRotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.PinchRotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.PinchRotate.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.PinchZoom.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.PinchZoom.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.PinchZoom.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.PinchZoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.PinchZoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.PinchZoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchZoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchZoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.PinchZoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.PinchZoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.PinchZoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.PinchZoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.PinchZoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.PinchZoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.PinchZoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.PinchZoom.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.interaction.SelectEvent.prototype.type;


/**
 * @type {Object}
 */
ol.interaction.SelectEvent.prototype.target;


/**
 */
ol.interaction.SelectEvent.prototype.preventDefault = function() {};


/**
 */
ol.interaction.SelectEvent.prototype.stopPropagation = function() {};


/**
 * @return {boolean}
 */
ol.interaction.Select.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Select.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Select.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Select.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Select.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Select.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Select.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Select.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Select.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Select.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Select.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Select.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Select.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Select.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Select.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Select.prototype.unByKey = function(key) {};


/**
 * @return {boolean}
 */
ol.interaction.Snap.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Snap.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Snap.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Snap.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Snap.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Snap.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Snap.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Snap.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Snap.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Snap.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Snap.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Snap.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Snap.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Snap.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Snap.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Snap.prototype.unByKey = function(key) {};


/**
 * @type {string}
 */
ol.interaction.TranslateEvent.prototype.type;


/**
 * @type {Object}
 */
ol.interaction.TranslateEvent.prototype.target;


/**
 */
ol.interaction.TranslateEvent.prototype.preventDefault = function() {};


/**
 */
ol.interaction.TranslateEvent.prototype.stopPropagation = function() {};


/**
 * @return {boolean}
 */
ol.interaction.Translate.prototype.getActive = function() {};


/**
 * @return {ol.Map}
 */
ol.interaction.Translate.prototype.getMap = function() {};


/**
 * @param {boolean} active
 */
ol.interaction.Translate.prototype.setActive = function(active) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.interaction.Translate.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.interaction.Translate.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.interaction.Translate.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.interaction.Translate.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.interaction.Translate.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.interaction.Translate.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.interaction.Translate.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.interaction.Translate.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.interaction.Translate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Translate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.interaction.Translate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.interaction.Translate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.interaction.Translate.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.Geometry.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.Geometry.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.Geometry.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.Geometry.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.Geometry.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.Geometry.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.Geometry.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.Geometry.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.Geometry.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Geometry.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Geometry.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Geometry.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.Geometry.prototype.unByKey = function(key) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.SimpleGeometry.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.SimpleGeometry.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.SimpleGeometry.prototype.rotate = function(angle, anchor) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.SimpleGeometry.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.SimpleGeometry.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.SimpleGeometry.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.SimpleGeometry.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.SimpleGeometry.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.SimpleGeometry.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.SimpleGeometry.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.SimpleGeometry.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.SimpleGeometry.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.SimpleGeometry.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.SimpleGeometry.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.SimpleGeometry.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.SimpleGeometry.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.SimpleGeometry.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Circle.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.Circle.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Circle.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.Circle.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.Circle.prototype.simplify = function(tolerance) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.Circle.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.Circle.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.Circle.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.Circle.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.Circle.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.Circle.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.Circle.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.Circle.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.Circle.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Circle.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Circle.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Circle.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.Circle.prototype.unByKey = function(key) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.GeometryCollection.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.GeometryCollection.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.GeometryCollection.prototype.rotate = function(angle, anchor) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.GeometryCollection.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.GeometryCollection.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.GeometryCollection.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.GeometryCollection.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.GeometryCollection.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.GeometryCollection.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.GeometryCollection.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.GeometryCollection.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.GeometryCollection.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.GeometryCollection.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.GeometryCollection.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.GeometryCollection.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.GeometryCollection.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.GeometryCollection.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.GeometryCollection.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.LinearRing.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.LinearRing.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.LinearRing.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.LinearRing.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.LinearRing.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.LinearRing.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.LinearRing.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.LinearRing.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.LinearRing.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.LinearRing.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.LinearRing.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.LinearRing.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.LinearRing.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.LinearRing.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.LinearRing.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.LinearRing.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.LinearRing.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.LinearRing.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.LinearRing.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.LineString.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.LineString.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.LineString.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.LineString.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.LineString.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.LineString.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.LineString.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.LineString.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.LineString.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.LineString.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.LineString.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.LineString.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.LineString.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.LineString.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.LineString.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.LineString.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.LineString.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.LineString.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.LineString.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiLineString.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.MultiLineString.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiLineString.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.MultiLineString.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiLineString.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiLineString.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.MultiLineString.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.MultiLineString.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.MultiLineString.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.MultiLineString.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.MultiLineString.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.MultiLineString.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.MultiLineString.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.MultiLineString.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.MultiLineString.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiLineString.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiLineString.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiLineString.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.MultiLineString.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiPoint.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.MultiPoint.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiPoint.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.MultiPoint.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPoint.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPoint.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.MultiPoint.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.MultiPoint.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.MultiPoint.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPoint.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPoint.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPoint.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.MultiPoint.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.MultiPoint.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.MultiPoint.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiPoint.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiPoint.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiPoint.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.MultiPoint.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.MultiPolygon.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.MultiPolygon.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.MultiPolygon.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.MultiPolygon.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPolygon.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.MultiPolygon.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.MultiPolygon.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.MultiPolygon.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.MultiPolygon.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPolygon.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPolygon.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.MultiPolygon.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.MultiPolygon.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.MultiPolygon.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.MultiPolygon.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiPolygon.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.MultiPolygon.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.MultiPolygon.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.MultiPolygon.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Point.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.Point.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Point.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.Point.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.Point.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Point.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.Point.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.Point.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.Point.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.Point.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.Point.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.Point.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.Point.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.Point.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.Point.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Point.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Point.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Point.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.Point.prototype.unByKey = function(key) {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getFirstCoordinate = function() {};


/**
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getLastCoordinate = function() {};


/**
 * @return {ol.geom.GeometryLayout}
 */
ol.geom.Polygon.prototype.getLayout = function() {};


/**
 * @param {number} angle
 * @param {ol.Coordinate} anchor
 */
ol.geom.Polygon.prototype.rotate = function(angle, anchor) {};


/**
 * @param {ol.Coordinate} point
 * @param {ol.Coordinate=} opt_closestPoint
 * @return {ol.Coordinate}
 */
ol.geom.Polygon.prototype.getClosestPoint = function(point, opt_closestPoint) {};


/**
 * @param {ol.Extent=} opt_extent
 * @return {ol.Extent}
 */
ol.geom.Polygon.prototype.getExtent = function(opt_extent) {};


/**
 * @param {number} tolerance
 * @return {ol.geom.Geometry}
 */
ol.geom.Polygon.prototype.simplify = function(tolerance) {};


/**
 * @param {ol.proj.ProjectionLike} source
 * @param {ol.proj.ProjectionLike} destination
 * @return {ol.geom.Geometry}
 */
ol.geom.Polygon.prototype.transform = function(source, destination) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.geom.Polygon.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.geom.Polygon.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.geom.Polygon.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.geom.Polygon.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.geom.Polygon.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.geom.Polygon.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.geom.Polygon.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.geom.Polygon.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.geom.Polygon.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Polygon.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.geom.Polygon.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.geom.Polygon.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.geom.Polygon.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Filter.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Filter.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Filter.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Filter.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Filter.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Filter.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Filter.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Filter.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Filter.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Filter.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Filter.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Filter.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Filter.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.format.ogc.filter.Logical = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Logical.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Logical.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Logical.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Logical.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Logical.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Logical.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Logical.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Logical.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Logical.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Logical.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Logical.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Logical.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Logical.prototype.unByKey = function(key) {};


/**
 * @constructor
 */
ol.format.ogc.filter.LogicalBinary = function() {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.LogicalBinary.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.LogicalBinary.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.LogicalBinary.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LogicalBinary.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LogicalBinary.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LogicalBinary.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.LogicalBinary.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.LogicalBinary.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.LogicalBinary.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LogicalBinary.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LogicalBinary.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.LogicalBinary.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.LogicalBinary.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.And.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.And.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.And.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.And.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.And.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.And.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.And.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.And.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.And.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.And.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.And.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.And.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.And.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Or.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Or.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Or.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Or.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Or.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Or.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Or.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Or.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Or.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Or.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Or.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Or.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Or.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Not.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Not.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Not.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Not.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Not.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Not.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Not.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Not.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Not.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Not.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Not.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Not.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Not.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Bbox.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Bbox.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Bbox.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Bbox.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Bbox.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Bbox.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Bbox.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Bbox.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Bbox.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Bbox.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Bbox.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Bbox.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Bbox.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.Comparison.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.Comparison.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.Comparison.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Comparison.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Comparison.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.Comparison.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.Comparison.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.Comparison.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.Comparison.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Comparison.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.Comparison.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.Comparison.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.Comparison.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.ComparisonBinary.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.ComparisonBinary.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.ComparisonBinary.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.ComparisonBinary.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.ComparisonBinary.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.ComparisonBinary.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.ComparisonBinary.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.ComparisonBinary.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.EqualTo.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.EqualTo.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.EqualTo.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.EqualTo.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.EqualTo.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.EqualTo.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.EqualTo.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.EqualTo.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.EqualTo.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.EqualTo.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.EqualTo.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.EqualTo.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.EqualTo.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.NotEqualTo.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.NotEqualTo.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.NotEqualTo.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.NotEqualTo.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.NotEqualTo.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.NotEqualTo.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.NotEqualTo.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.NotEqualTo.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.NotEqualTo.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.NotEqualTo.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.NotEqualTo.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.NotEqualTo.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.NotEqualTo.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.LessThan.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.LessThan.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.LessThan.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThan.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThan.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThan.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.LessThan.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.LessThan.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.LessThan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LessThan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LessThan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.LessThan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.LessThan.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.LessThanOrEqualTo.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.GreaterThan.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.GreaterThan.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.GreaterThan.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThan.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThan.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThan.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.GreaterThan.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.GreaterThan.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.GreaterThan.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.GreaterThan.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.GreaterThan.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.GreaterThan.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.GreaterThan.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.GreaterThanOrEqualTo.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.IsNull.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.IsNull.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.IsNull.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsNull.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsNull.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsNull.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.IsNull.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.IsNull.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.IsNull.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsNull.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsNull.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.IsNull.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.IsNull.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.IsBetween.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.IsBetween.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.IsBetween.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsBetween.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsBetween.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsBetween.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.IsBetween.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.IsBetween.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.IsBetween.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsBetween.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsBetween.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.IsBetween.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.IsBetween.prototype.unByKey = function(key) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.format.ogc.filter.IsLike.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.format.ogc.filter.IsLike.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.format.ogc.filter.IsLike.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsLike.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsLike.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.format.ogc.filter.IsLike.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.format.ogc.filter.IsLike.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.format.ogc.filter.IsLike.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.format.ogc.filter.IsLike.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsLike.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.format.ogc.filter.IsLike.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.format.ogc.filter.IsLike.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.format.ogc.filter.IsLike.prototype.unByKey = function(key) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GML2.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GML3.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {Document|Node|Object|string} source
 * @param {olx.format.ReadOptions=} opt_options
 * @return {Array.<ol.Feature>}
 */
ol.format.GML.prototype.readFeatures = function(source, opt_options) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Control.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Control.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Control.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.Control.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.Control.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.Control.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.Control.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.Control.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.Control.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Control.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Control.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Control.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.Control.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Attribution.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Attribution.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.Attribution.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Attribution.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Attribution.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Attribution.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.Attribution.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.Attribution.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.Attribution.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.Attribution.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.Attribution.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.Attribution.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Attribution.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Attribution.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Attribution.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.Attribution.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.FullScreen.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.FullScreen.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.FullScreen.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.FullScreen.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.FullScreen.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.FullScreen.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.FullScreen.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.FullScreen.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.FullScreen.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.FullScreen.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.FullScreen.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.FullScreen.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.FullScreen.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.FullScreen.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.FullScreen.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.FullScreen.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.MousePosition.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.MousePosition.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.MousePosition.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.MousePosition.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.MousePosition.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.MousePosition.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.MousePosition.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.MousePosition.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.MousePosition.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.MousePosition.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.MousePosition.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.MousePosition.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.MousePosition.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.MousePosition.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.MousePosition.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.MousePosition.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.OverviewMap.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.OverviewMap.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.OverviewMap.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.OverviewMap.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.OverviewMap.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.OverviewMap.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.OverviewMap.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.OverviewMap.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.OverviewMap.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.OverviewMap.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.OverviewMap.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.OverviewMap.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.OverviewMap.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.OverviewMap.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.OverviewMap.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.OverviewMap.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Rotate.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Rotate.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.Rotate.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Rotate.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Rotate.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Rotate.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.Rotate.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.Rotate.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.Rotate.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.Rotate.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.Rotate.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.Rotate.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Rotate.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Rotate.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Rotate.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.Rotate.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ScaleLine.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.ScaleLine.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.ScaleLine.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ScaleLine.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ScaleLine.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ScaleLine.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.ScaleLine.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.ScaleLine.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.ScaleLine.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.ScaleLine.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.ScaleLine.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.ScaleLine.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ScaleLine.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ScaleLine.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ScaleLine.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.ScaleLine.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.Zoom.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.Zoom.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.Zoom.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.Zoom.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.Zoom.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.Zoom.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.Zoom.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.Zoom.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.Zoom.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.Zoom.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.Zoom.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.Zoom.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Zoom.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.Zoom.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.Zoom.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.Zoom.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ZoomSlider.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.ZoomSlider.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.ZoomSlider.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ZoomSlider.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ZoomSlider.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ZoomSlider.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.ZoomSlider.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.ZoomSlider.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.ZoomSlider.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.ZoomSlider.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.ZoomSlider.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.ZoomSlider.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ZoomSlider.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ZoomSlider.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ZoomSlider.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.ZoomSlider.prototype.unByKey = function(key) {};


/**
 * @return {ol.Map}
 */
ol.control.ZoomToExtent.prototype.getMap = function() {};


/**
 * @param {ol.Map} map
 */
ol.control.ZoomToExtent.prototype.setMap = function(map) {};


/**
 * @param {Element|string} target
 */
ol.control.ZoomToExtent.prototype.setTarget = function(target) {};


/**
 * @param {string} key
 * @return {*}
 */
ol.control.ZoomToExtent.prototype.get = function(key) {};


/**
 * @return {Array.<string>}
 */
ol.control.ZoomToExtent.prototype.getKeys = function() {};


/**
 * @return {Object.<string, *>}
 */
ol.control.ZoomToExtent.prototype.getProperties = function() {};


/**
 * @param {string} key
 * @param {*} value
 * @param {boolean=} opt_silent
 */
ol.control.ZoomToExtent.prototype.set = function(key, value, opt_silent) {};


/**
 * @param {Object.<string, *>} values
 * @param {boolean=} opt_silent
 */
ol.control.ZoomToExtent.prototype.setProperties = function(values, opt_silent) {};


/**
 * @param {string} key
 * @param {boolean=} opt_silent
 */
ol.control.ZoomToExtent.prototype.unset = function(key, opt_silent) {};


/**
 */
ol.control.ZoomToExtent.prototype.changed = function() {};


/**
 * @param {Object|ol.events.Event|string} event
 */
ol.control.ZoomToExtent.prototype.dispatchEvent = function(event) {};


/**
 * @return {number}
 */
ol.control.ZoomToExtent.prototype.getRevision = function() {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ZoomToExtent.prototype.on = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 * @return {ol.events.Key|Array.<ol.events.Key>}
 */
ol.control.ZoomToExtent.prototype.once = function(type, listener, opt_this) {};


/**
 * @param {string|Array.<string>} type
 * @param {Function} listener
 * @param {Object=} opt_this
 */
ol.control.ZoomToExtent.prototype.un = function(type, listener, opt_this) {};


/**
 * @param {ol.events.Key|Array.<ol.events.Key>} key
 */
ol.control.ZoomToExtent.prototype.unByKey = function(key) {};


/**
 * @typedef {{html: (string)}}
 */
olx.AttributionOptions;


/**
 * @typedef {{tracking: (boolean|undefined)}}
 */
olx.DeviceOrientationOptions;


/**
 * @typedef {{tracking: (boolean|undefined), trackingOptions: (GeolocationPositionOptions|undefined), projection: (ol.proj.ProjectionLike)}}
 */
olx.GeolocationOptions;


/**
 * @typedef {{href: (string), src: (string)}}
 */
olx.LogoOptions;


/**
 * @typedef {{map: (ol.Map|undefined), maxLines: (number|undefined), strokeStyle: (ol.style.Stroke|undefined), targetSize: (number|undefined)}}
 */
olx.GraticuleOptions;


/**
 * @type {Object}
 */
olx.interaction;


/**
 * @typedef {{handleEvent: (Function)}}
 */
olx.interaction.InteractionOptions;


/**
 * @typedef {{controls: (ol.Collection.<ol.control.Control>|Array.<ol.control.Control>|undefined), pixelRatio: (number|undefined), interactions: (ol.Collection.<ol.interaction.Interaction>|Array.<ol.interaction.Interaction>|undefined), keyboardEventTarget: (Element|Document|string|undefined), layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined), loadTilesWhileAnimating: (boolean|undefined), loadTilesWhileInteracting: (boolean|undefined), logo: (boolean|string|olx.LogoOptions|Element|undefined), overlays: (ol.Collection.<ol.Overlay>|Array.<ol.Overlay>|undefined), renderer: (ol.RendererType|Array.<(ol.RendererType|string)>|string|undefined), target: (Element|string|undefined), view: (ol.View|undefined)}}
 */
olx.MapOptions;


/**
 * @typedef {{id: (number|string|undefined), element: (Element|undefined), offset: (Array.<number>|undefined), position: (ol.Coordinate|undefined), positioning: (ol.OverlayPositioning|string|undefined), stopEvent: (boolean|undefined), insertFirst: (boolean|undefined), autoPan: (boolean|undefined), autoPanAnimation: (olx.animation.PanOptions|undefined), autoPanMargin: (number|undefined)}}
 */
olx.OverlayOptions;


/**
 * @typedef {{code: (string), units: (ol.proj.Units|string|undefined), extent: (ol.Extent|undefined), axisOrientation: (string|undefined), global: (boolean|undefined), metersPerUnit: (number|undefined), worldExtent: (ol.Extent|undefined), getPointResolution: (Function|undefined)}}
 */
olx.ProjectionOptions;


/**
 * @typedef {{center: (ol.Coordinate|undefined), constrainRotation: (boolean|number|undefined), enableRotation: (boolean|undefined), extent: (ol.Extent|undefined), maxResolution: (number|undefined), minResolution: (number|undefined), maxZoom: (number|undefined), minZoom: (number|undefined), projection: (ol.proj.ProjectionLike), resolution: (number|undefined), resolutions: (Array.<number>|undefined), rotation: (number|undefined), zoom: (number|undefined), zoomFactor: (number|undefined), undefined: (Object)}}
 */
olx.ViewOptions;


/**
 * @type {Object}
 */
olx.animation;


/**
 * @typedef {{resolution: (number), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.BounceOptions;


/**
 * @typedef {{source: (ol.Coordinate), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.PanOptions;


/**
 * @typedef {{rotation: (number|undefined), anchor: (ol.Coordinate|undefined), start: (number|undefined), duration: (number|undefined), easing: (Function)}}
 */
olx.animation.RotateOptions;


/**
 * @typedef {{resolution: (number), start: (number|undefined), duration: (number|undefined), easing: (Function), undefined: (Object)}}
 */
olx.animation.ZoomOptions;


/**
 * @type {Object}
 */
olx.control;


/**
 * @typedef {{className: (string|undefined), target: (Element|undefined), collapsible: (boolean|undefined), collapsed: (boolean|undefined), tipLabel: (string|undefined), label: (string|Node|undefined), collapseLabel: (string|Node|undefined), render: (Function|undefined)}}
 */
olx.control.AttributionOptions;


/**
 * @typedef {{element: (Element|undefined), render: (Function|undefined), target: (Element|string|undefined)}}
 */
olx.control.ControlOptions;


/**
 * @typedef {{attribution: (boolean|undefined), attributionOptions: (olx.control.AttributionOptions|undefined), rotate: (boolean|undefined), rotateOptions: (olx.control.RotateOptions|undefined), zoom: (boolean|undefined), zoomOptions: (olx.control.ZoomOptions|undefined)}}
 */
olx.control.DefaultsOptions;


/**
 * @typedef {{className: (string|undefined), label: (string|Node|undefined), labelActive: (string|Node|undefined), tipLabel: (string|undefined), keys: (boolean|undefined), target: (Element|undefined), source: (Element|string|undefined)}}
 */
olx.control.FullScreenOptions;


/**
 * @typedef {{className: (string|undefined), coordinateFormat: (ol.CoordinateFormatType|undefined), projection: (ol.proj.ProjectionLike), render: (Function|undefined), target: (Element|undefined), undefinedHTML: (string|undefined)}}
 */
olx.control.MousePositionOptions;


/**
 * @typedef {{collapsed: (boolean|undefined), collapseLabel: (string|Node|undefined), collapsible: (boolean|undefined), label: (string|Node|undefined), layers: (Array.<ol.layer.Layer>|ol.Collection.<ol.layer.Layer>|undefined), render: (Function|undefined), target: (Element|undefined), tipLabel: (string|undefined), view: (ol.View|undefined)}}
 */
olx.control.OverviewMapOptions;


/**
 * @typedef {{className: (string|undefined), minWidth: (number|undefined), render: (Function|undefined), target: (Element|undefined), units: (ol.control.ScaleLineUnits|string|undefined)}}
 */
olx.control.ScaleLineOptions;


/**
 * @typedef {{className: (string|undefined), label: (string|Element|undefined), tipLabel: (string|undefined), duration: (number|undefined), autoHide: (boolean|undefined), render: (Function|undefined), resetNorth: (Function|undefined), target: (Element|undefined)}}
 */
olx.control.RotateOptions;


/**
 * @typedef {{duration: (number|undefined), className: (string|undefined), zoomInLabel: (string|Node|undefined), zoomOutLabel: (string|Node|undefined), zoomInTipLabel: (string|undefined), zoomOutTipLabel: (string|undefined), delta: (number|undefined), target: (Element|undefined)}}
 */
olx.control.ZoomOptions;


/**
 * @typedef {{className: (string|undefined), duration: (number|undefined), maxResolution: (number|undefined), minResolution: (number|undefined), render: (Function|undefined)}}
 */
olx.control.ZoomSliderOptions;


/**
 * @typedef {{className: (string|undefined), target: (Element|undefined), label: (string|Node|undefined), tipLabel: (string|undefined), extent: (ol.Extent|undefined), undefined: (Object)}}
 */
olx.control.ZoomToExtentOptions;


/**
 * @type {Object}
 */
olx.format;


/**
 * @typedef {{dataProjection: (ol.proj.ProjectionLike), featureProjection: (ol.proj.ProjectionLike)}}
 */
olx.format.ReadOptions;


/**
 * @typedef {{dataProjection: (ol.proj.ProjectionLike), featureProjection: (ol.proj.ProjectionLike), rightHanded: (boolean|undefined), decimals: (number|undefined)}}
 */
olx.format.WriteOptions;


/**
 * @typedef {{defaultDataProjection: (ol.proj.ProjectionLike), geometryName: (string|undefined)}}
 */
olx.format.GeoJSONOptions;


/**
 * @typedef {{geometryName: (string|undefined)}}
 */
olx.format.EsriJSONOptions;


/**
 * @typedef {{featureClass: (undefined|Function|Function), geometryName: (string|undefined), layerName: (string|undefined), layers: (Array.<string>|undefined)}}
 */
olx.format.MVTOptions;


/**
 * @typedef {{factor: (number|undefined), geometryLayout: (ol.geom.GeometryLayout|undefined)}}
 */
olx.format.PolylineOptions;


/**
 * @typedef {{defaultDataProjection: (ol.proj.ProjectionLike)}}
 */
olx.format.TopoJSONOptions;


/**
 * @typedef {{altitudeMode: (ol.format.IGCZ|undefined)}}
 */
olx.format.IGCOptions;


/**
 * @typedef {{extractStyles: (boolean|undefined), showPointNames: (boolean|undefined), defaultStyle: (Array.<ol.style.Style>|undefined), writeStyles: (boolean|undefined)}}
 */
olx.format.KMLOptions;


/**
 * @typedef {{featureNS: (Object.<string, string>|string|undefined), featureType: (Array.<string>|string|undefined), srsName: (string), surface: (boolean|undefined), curve: (boolean|undefined), multiCurve: (boolean|undefined), multiSurface: (boolean|undefined), schemaLocation: (string|undefined)}}
 */
olx.format.GMLOptions;


/**
 * @typedef {{readExtensions: (Function|undefined)}}
 */
olx.format.GPXOptions;


/**
 * @typedef {{featureNS: (Object.<string, string>|string|undefined), featureType: (Array.<string>|string|undefined), gmlFormat: (ol.format.GMLBase|undefined), schemaLocation: (string|undefined)}}
 */
olx.format.WFSOptions;


/**
 * @typedef {{featureNS: (string), featurePrefix: (string), featureTypes: (Array.<string>), srsName: (string|undefined), handle: (string|undefined), outputFormat: (string|undefined), maxFeatures: (number|undefined), geometryName: (string|undefined), propertyNames: (Array.<string>|undefined), startIndex: (number|undefined), count: (number|undefined), bbox: (ol.Extent|undefined), filter: (ol.format.ogc.filter.Filter|undefined)}}
 */
olx.format.WFSWriteGetFeatureOptions;


/**
 * @typedef {{featureNS: (string), featurePrefix: (string), featureType: (string), srsName: (string|undefined), handle: (string|undefined), nativeElements: (Array.<Object>), gmlOptions: (olx.format.GMLOptions|undefined)}}
 */
olx.format.WFSWriteTransactionOptions;


/**
 * @typedef {{splitCollection: (boolean|undefined)}}
 */
olx.format.WKTOptions;


/**
 * @typedef {{layers: (Array.<string>|undefined), undefined: (Object)}}
 */
olx.format.WMSGetFeatureInfoOptions;


/**
 * @typedef {{altShiftDragRotate: (boolean|undefined), doubleClickZoom: (boolean|undefined), keyboard: (boolean|undefined), mouseWheelZoom: (boolean|undefined), shiftDragZoom: (boolean|undefined), dragPan: (boolean|undefined), pinchRotate: (boolean|undefined), pinchZoom: (boolean|undefined), zoomDelta: (number|undefined), zoomDuration: (number|undefined)}}
 */
olx.interaction.DefaultsOptions;


/**
 * @typedef {{duration: (number|undefined), delta: (number|undefined)}}
 */
olx.interaction.DoubleClickZoomOptions;


/**
 * @typedef {{formatConstructors: (Array.<function(new:ol.format.Feature)>|undefined), projection: (ol.proj.ProjectionLike), target: (Element|undefined)}}
 */
olx.interaction.DragAndDropOptions;


/**
 * @typedef {{className: (string|undefined), condition: (ol.events.ConditionType|undefined), boxEndCondition: (ol.interaction.DragBoxEndConditionType|undefined)}}
 */
olx.interaction.DragBoxOptions;


/**
 * @typedef {{kinetic: (ol.Kinetic|undefined)}}
 */
olx.interaction.DragPanOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), duration: (number|undefined)}}
 */
olx.interaction.DragRotateAndZoomOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), duration: (number|undefined)}}
 */
olx.interaction.DragRotateOptions;


/**
 * @typedef {{className: (string|undefined), condition: (ol.events.ConditionType|undefined), duration: (number|undefined), out: (boolean|undefined)}}
 */
olx.interaction.DragZoomOptions;


/**
 * @typedef {{clickTolerance: (number|undefined), features: (ol.Collection.<ol.Feature>|undefined), source: (ol.source.Vector|undefined), snapTolerance: (number|undefined), type: (ol.geom.GeometryType), maxPoints: (number|undefined), minPoints: (number|undefined), finishCondition: (ol.events.ConditionType|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), geometryFunction: (ol.interaction.DrawGeometryFunctionType|undefined), geometryName: (string|undefined), condition: (ol.events.ConditionType|undefined), freehandCondition: (ol.events.ConditionType|undefined), wrapX: (boolean|undefined)}}
 */
olx.interaction.DrawOptions;


/**
 * @typedef {{features: (ol.Collection.<ol.Feature>|undefined), layers: (undefined|Array.<ol.layer.Layer>|Function)}}
 */
olx.interaction.TranslateOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), duration: (number|undefined), pixelDelta: (number|undefined)}}
 */
olx.interaction.KeyboardPanOptions;


/**
 * @typedef {{duration: (number|undefined), condition: (ol.events.ConditionType|undefined), delta: (number|undefined)}}
 */
olx.interaction.KeyboardZoomOptions;


/**
 * @typedef {{condition: (ol.events.ConditionType|undefined), deleteCondition: (ol.events.ConditionType|undefined), pixelTolerance: (number|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), features: (ol.Collection.<ol.Feature>), wrapX: (boolean|undefined)}}
 */
olx.interaction.ModifyOptions;


/**
 * @typedef {{duration: (number|undefined), useAnchor: (boolean|undefined)}}
 */
olx.interaction.MouseWheelZoomOptions;


/**
 * @typedef {{duration: (number|undefined), threshold: (number|undefined)}}
 */
olx.interaction.PinchRotateOptions;


/**
 * @typedef {{duration: (number|undefined)}}
 */
olx.interaction.PinchZoomOptions;


/**
 * @typedef {{handleDownEvent: (Function|undefined), handleDragEvent: (Function|undefined), handleEvent: (Function|undefined), handleMoveEvent: (Function|undefined), handleUpEvent: (Function|undefined)}}
 */
olx.interaction.PointerOptions;


/**
 * @typedef {{addCondition: (ol.events.ConditionType|undefined), condition: (ol.events.ConditionType|undefined), layers: (undefined|Array.<ol.layer.Layer>|Function), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), removeCondition: (ol.events.ConditionType|undefined), toggleCondition: (ol.events.ConditionType|undefined), multi: (boolean|undefined), features: (ol.Collection.<ol.Feature>|undefined), filter: (ol.interaction.SelectFilterFunction|undefined), wrapX: (boolean|undefined)}}
 */
olx.interaction.SelectOptions;


/**
 * @typedef {{features: (ol.Collection.<ol.Feature>|undefined), edge: (boolean|undefined), vertex: (boolean|undefined), pixelTolerance: (number|undefined), source: (ol.source.Vector|undefined), undefined: (Object)}}
 */
olx.interaction.SnapOptions;


/**
 * @type {Object}
 */
olx.layer;


/**
 * @typedef {{opacity: (number|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), zIndex: (number|undefined), minResolution: (number|undefined), maxResolution: (number|undefined)}}
 */
olx.layer.BaseOptions;


/**
 * @typedef {{opacity: (number|undefined), source: (ol.source.Source|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), zIndex: (number|undefined), minResolution: (number|undefined), maxResolution: (number|undefined)}}
 */
olx.layer.LayerOptions;


/**
 * @typedef {{opacity: (number|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), zIndex: (number|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
 */
olx.layer.GroupOptions;


/**
 * @typedef {{gradient: (Array.<string>|undefined), radius: (number|undefined), blur: (number|undefined), shadow: (number|undefined), weight: (string|Function), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), opacity: (number|undefined), source: (ol.source.Vector), visible: (boolean|undefined)}}
 */
olx.layer.HeatmapOptions;


/**
 * @typedef {{opacity: (number|undefined), source: (ol.source.Image), map: (ol.Map|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined)}}
 */
olx.layer.ImageOptions;


/**
 * @typedef {{opacity: (number|undefined), preload: (number|undefined), source: (ol.source.Tile), map: (ol.Map|undefined), visible: (boolean|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), useInterimTilesOnError: (boolean|undefined)}}
 */
olx.layer.TileOptions;


/**
 * @typedef {{renderOrder: (Function), map: (ol.Map|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), opacity: (number|undefined), renderBuffer: (number|undefined), source: (ol.source.Vector), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), updateWhileAnimating: (boolean|undefined), updateWhileInteracting: (boolean|undefined), visible: (boolean|undefined)}}
 */
olx.layer.VectorOptions;


/**
 * @typedef {{renderBuffer: (number|undefined), renderMode: (ol.layer.VectorTileRenderType|string|undefined), renderOrder: (Function), map: (ol.Map|undefined), extent: (ol.Extent|undefined), minResolution: (number|undefined), maxResolution: (number|undefined), opacity: (number|undefined), source: (ol.source.VectorTile|undefined), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined), updateWhileAnimating: (boolean|undefined), updateWhileInteracting: (boolean|undefined), visible: (boolean|undefined), undefined: (Object)}}
 */
olx.layer.VectorTileOptions;


/**
 * @type {Object}
 */
olx.render;


/**
 * @typedef {{size: (ol.Size|undefined), pixelRatio: (number|undefined), undefined: (Object)}}
 */
olx.render.ToContextOptions;


/**
 * @type {Object}
 */
olx.source;


/**
 * @typedef {{cacheSize: (number|undefined), culture: (string|undefined), key: (string), imagerySet: (string), maxZoom: (number|undefined), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.BingMapsOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), distance: (number|undefined), extent: (ol.Extent|undefined), geometryFunction: (undefined|Function), format: (ol.format.Feature|undefined), logo: (string|undefined), projection: (ol.proj.ProjectionLike), source: (ol.source.Vector), wrapX: (boolean|undefined)}}
 */
olx.source.ClusterOptions;


/**
 * @typedef {{jsonp: (boolean|undefined), preemptive: (boolean|undefined), tileJSON: (TileJSON|undefined), url: (string|undefined)}}
 */
olx.source.TileUTFGridOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), opaque: (boolean|undefined), projection: (ol.proj.ProjectionLike), reprojectionErrorThreshold: (number|undefined), state: (ol.source.State|undefined), tileClass: (Function|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), tilePixelRatio: (number|undefined), tileUrlFunction: (ol.TileUrlFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.TileImageOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), format: (ol.format.Feature|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), state: (ol.source.State|undefined), tileClass: (Function|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), tilePixelRatio: (number|undefined), tileUrlFunction: (ol.TileUrlFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.VectorTileOptions;


/**
 * @typedef {{url: (string|undefined), displayDpi: (number|undefined), metersPerUnit: (number|undefined), hidpi: (boolean|undefined), useOverlay: (boolean|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), imageLoadFunction: (ol.ImageLoadFunctionType|undefined), params: (Object|undefined)}}
 */
olx.source.ImageMapGuideOptions;


/**
 * @typedef {{cacheSize: (number|undefined), layer: (string), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined)}}
 */
olx.source.MapQuestOptions;


/**
 * @typedef {{projection: (ol.proj.ProjectionLike), tileGrid: (ol.tilegrid.TileGrid|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.TileDebugOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), maxZoom: (number|undefined), opaque: (boolean|undefined), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.OSMOptions;


/**
 * @typedef {{attributions: (Array.<ol.Attribution>|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), imageLoadFunction: (ol.ImageLoadFunctionType|undefined), params: (Object.<string, *>|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), url: (string|undefined)}}
 */
olx.source.ImageArcGISRestOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), canvasFunction: (ol.CanvasFunctionType), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), state: (ol.source.State|undefined)}}
 */
olx.source.ImageCanvasOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), source: (ol.source.Vector), style: (ol.style.Style|Array.<ol.style.Style>|ol.style.StyleFunction|undefined)}}
 */
olx.source.ImageVectorOptions;


/**
 * @typedef {{sources: (Array.<ol.source.Source>), operation: (ol.raster.Operation|undefined), lib: (Object|undefined), threads: (number|undefined), operationType: (ol.raster.OperationType|undefined)}}
 */
olx.source.RasterOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), crossOrigin: (null|string|undefined), hidpi: (boolean|undefined), serverType: (ol.source.wms.ServerType|string|undefined), imageLoadFunction: (ol.ImageLoadFunctionType|undefined), logo: (string|olx.LogoOptions|undefined), params: (Object.<string, *>), projection: (ol.proj.ProjectionLike), ratio: (number|undefined), resolutions: (Array.<number>|undefined), url: (string|undefined)}}
 */
olx.source.ImageWMSOptions;


/**
 * @typedef {{cacheSize: (number|undefined), layer: (string), minZoom: (number|undefined), maxZoom: (number|undefined), opaque: (boolean|undefined), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined)}}
 */
olx.source.StamenOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), crossOrigin: (null|string|undefined), imageExtent: (ol.Extent), imageLoadFunction: (ol.ImageLoadFunctionType|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), imageSize: (ol.Size|undefined), url: (string)}}
 */
olx.source.ImageStaticOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), params: (Object.<string, *>|undefined), logo: (string|olx.LogoOptions|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), projection: (ol.proj.ProjectionLike), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined), wrapX: (boolean|undefined), urls: (Array.<string>|undefined)}}
 */
olx.source.TileArcGISRestOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), jsonp: (boolean|undefined), reprojectionErrorThreshold: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string), wrapX: (boolean|undefined)}}
 */
olx.source.TileJSONOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), params: (Object.<string, *>), crossOrigin: (null|string|undefined), gutter: (number|undefined), hidpi: (boolean|undefined), logo: (string|olx.LogoOptions|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), maxZoom: (number|undefined), projection: (ol.proj.ProjectionLike), reprojectionErrorThreshold: (number|undefined), serverType: (ol.source.wms.ServerType|string|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.TileWMSOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), features: (Array.<ol.Feature>|ol.Collection.<ol.Feature>|undefined), format: (ol.format.Feature|undefined), loader: (ol.FeatureLoader|undefined), logo: (string|olx.LogoOptions|undefined), strategy: (ol.LoadingStrategy|undefined), url: (string|ol.FeatureUrlFunction|undefined), useSpatialIndex: (boolean|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.VectorOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (string|null|undefined), logo: (string|olx.LogoOptions|undefined), tileGrid: (ol.tilegrid.WMTS), projection: (ol.proj.ProjectionLike), reprojectionErrorThreshold: (number|undefined), requestEncoding: (ol.source.WMTSRequestEncoding|string|undefined), layer: (string), style: (string), tileClass: (Function|undefined), tilePixelRatio: (number|undefined), version: (string|undefined), format: (string|undefined), matrixSet: (string), dimensions: (Object|undefined), url: (string|undefined), maxZoom: (number|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.WMTSOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), opaque: (boolean|undefined), projection: (ol.proj.ProjectionLike), reprojectionErrorThreshold: (number|undefined), maxZoom: (number|undefined), minZoom: (number|undefined), tileGrid: (ol.tilegrid.TileGrid|undefined), tileLoadFunction: (ol.TileLoadFunctionType|undefined), tilePixelRatio: (number|undefined), tileSize: (number|ol.Size|undefined), tileUrlFunction: (ol.TileUrlFunctionType|undefined), url: (string|undefined), urls: (Array.<string>|undefined), wrapX: (boolean|undefined)}}
 */
olx.source.XYZOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), projection: (ol.proj.ProjectionLike), maxZoom: (number|undefined), minZoom: (number|undefined), wrapX: (boolean|undefined), config: (Object|undefined), map: (string|undefined), account: (string)}}
 */
olx.source.CartoDBOptions;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined), cacheSize: (number|undefined), crossOrigin: (null|string|undefined), logo: (string|olx.LogoOptions|undefined), reprojectionErrorThreshold: (number|undefined), url: (string), tierSizeCalculation: (string|undefined), size: (ol.Size), undefined: (Object)}}
 */
olx.source.ZoomifyOptions;


/**
 * @type {Object}
 */
olx.style;


/**
 * @typedef {{fill: (ol.style.Fill|undefined), radius: (number), snapToPixel: (boolean|undefined), stroke: (ol.style.Stroke|undefined), atlasManager: (ol.style.AtlasManager|undefined)}}
 */
olx.style.CircleOptions;


/**
 * @typedef {{color: (ol.Color|ol.ColorLike|undefined)}}
 */
olx.style.FillOptions;


/**
 * @typedef {{anchor: (Array.<number>|undefined), anchorOrigin: (ol.style.IconOrigin|undefined), anchorXUnits: (ol.style.IconAnchorUnits|undefined), anchorYUnits: (ol.style.IconAnchorUnits|undefined), color: (ol.Color|string|undefined), crossOrigin: (null|string|undefined), img: (Image|HTMLCanvasElement|undefined), offset: (Array.<number>|undefined), offsetOrigin: (ol.style.IconOrigin|undefined), opacity: (number|undefined), scale: (number|undefined), snapToPixel: (boolean|undefined), rotateWithView: (boolean|undefined), rotation: (number|undefined), size: (ol.Size|undefined), imgSize: (ol.Size|undefined), src: (string)}}
 */
olx.style.IconOptions;


/**
 * @typedef {{fill: (ol.style.Fill|undefined), points: (number), radius: (number|undefined), radius1: (number|undefined), radius2: (number|undefined), angle: (number|undefined), snapToPixel: (boolean|undefined), stroke: (ol.style.Stroke|undefined), rotation: (number|undefined), rotateWithView: (boolean|undefined), atlasManager: (ol.style.AtlasManager|undefined)}}
 */
olx.style.RegularShapeOptions;


/**
 * @typedef {{color: (ol.Color|string|undefined), lineCap: (string|undefined), lineJoin: (string|undefined), lineDash: (Array.<number>|undefined), miterLimit: (number|undefined), width: (number|undefined)}}
 */
olx.style.StrokeOptions;


/**
 * @typedef {{font: (string|undefined), offsetX: (number|undefined), offsetY: (number|undefined), scale: (number|undefined), rotation: (number|undefined), text: (string|undefined), textAlign: (string|undefined), textBaseline: (string|undefined), fill: (ol.style.Fill|undefined), stroke: (ol.style.Stroke|undefined)}}
 */
olx.style.TextOptions;


/**
 * @typedef {{geometry: (undefined|string|ol.geom.Geometry|ol.style.GeometryFunction), fill: (ol.style.Fill|undefined), image: (ol.style.Image|undefined), stroke: (ol.style.Stroke|undefined), text: (ol.style.Text|undefined), zIndex: (number|undefined), undefined: (Object)}}
 */
olx.style.StyleOptions;


/**
 * @type {Object}
 */
olx.tilegrid;


/**
 * @typedef {{extent: (ol.Extent|undefined), minZoom: (number|undefined), origin: (ol.Coordinate|undefined), origins: (Array.<ol.Coordinate>|undefined), resolutions: (Array.<number>), tileSize: (number|ol.Size|undefined), tileSizes: (Array.<(number|ol.Size)>|undefined)}}
 */
olx.tilegrid.TileGridOptions;


/**
 * @typedef {{extent: (ol.Extent|undefined), origin: (ol.Coordinate|undefined), origins: (Array.<ol.Coordinate>|undefined), resolutions: (Array.<number>), matrixIds: (Array.<string>), sizes: (Array.<ol.Size>|undefined), tileSize: (number|ol.Size|undefined), tileSizes: (Array.<(number|ol.Size)>|undefined), widths: (Array.<number>|undefined)}}
 */
olx.tilegrid.WMTSOptions;


/**
 * @typedef {{extent: (ol.Extent|undefined), maxZoom: (number|undefined), minZoom: (number|undefined), tileSize: (number|ol.Size|undefined), undefined: (Object)}}
 */
olx.tilegrid.XYZOptions;


/**
 * @type {Object}
 */
olx.view;


/**
 * @typedef {{padding: (!Array.<number>|undefined), constrainResolution: (boolean|undefined), nearest: (boolean|undefined), minResolution: (number|undefined), maxZoom: (number|undefined)}}
 */
olx.view.FitOptions;


/**
 * @typedef {{pixelRatio: (number), time: (number), viewState: (olx.ViewState)}}
 */
olx.FrameState;


/**
 * @typedef {{center: (ol.Coordinate), projection: (ol.proj.Projection), resolution: (number), rotation: (number)}}
 */
olx.ViewState;


/**
 * @typedef {{initialSize: (number|undefined), maxSize: (number|undefined), space: (number|undefined)}}
 */
olx.style.AtlasManagerOptions;


/**
 * @typedef {string}
 */
ol.OverlayPositioning;


/**
 * @typedef {string|Array.<string>|ol.Attribution|Array.<ol.Attribution>}
 */
ol.AttributionLike;


/**
 * @typedef {Function}
 */
ol.CanvasFunctionType;


/**
 * @typedef {Array.<number>}
 */
ol.Color;


/**
 * @typedef {string|CanvasPattern|CanvasGradient}
 */
ol.ColorLike;


/**
 * @typedef {Array.<number>}
 */
ol.Coordinate;


/**
 * @typedef {Function}
 */
ol.CoordinateFormatType;


/**
 * @typedef {Array.<number>}
 */
ol.Extent;


/**
 * @typedef {Function}
 */
ol.FeatureLoader;


/**
 * @typedef {Function}
 */
ol.FeatureStyleFunction;


/**
 * @typedef {Function}
 */
ol.FeatureUrlFunction;


/**
 * @typedef {Function}
 */
ol.ImageLoadFunctionType;


/**
 * @typedef {Function}
 */
ol.LoadingStrategy;


/**
 * @typedef {Array.<number>}
 */
ol.Pixel;


/**
 * @typedef {Function}
 */
ol.PreRenderFunction;


/**
 * @typedef {Array.<number>}
 */
ol.Size;


/**
 * @typedef {Array.<number>}
 */
ol.TileCoord;


/**
 * @typedef {Function}
 */
ol.TileLoadFunctionType;


/**
 * @typedef {Function}
 */
ol.TileUrlFunctionType;


/**
 * @typedef {Function}
 */
ol.TransformFunction;


/**
 * @typedef {Object}
 */
ol.WFSFeatureCollectionMetadata;


/**
 * @typedef {Object}
 */
ol.WFSTransactionResponse;


/**
 * @typedef {Function}
 */
ol.events.ConditionType;


/**
 * @typedef {Object}
 */
ol.events.Key;


/**
 * @typedef {Function|Function}
 */
ol.events.ListenerFunctionType;


/**
 * @typedef {Function}
 */
ol.interaction.DragBoxEndConditionType;


/**
 * @typedef {Function}
 */
ol.interaction.DrawGeometryFunctionType;


/**
 * @typedef {Function}
 */
ol.interaction.SelectFilterFunction;


/**
 * @typedef {ol.proj.Projection|string|undefined}
 */
ol.proj.ProjectionLike;


/**
 * @type {Object}
 */
ol.raster;


/**
 * @typedef {Function}
 */
ol.raster.Operation;


/**
 * @typedef {Array.<number>}
 */
ol.raster.Pixel;


/**
 * @typedef {Function}
 */
ol.style.GeometryFunction;


/**
 * @typedef {Function}
 */
ol.style.StyleFunction;


/**
 * @typedef {string}
 */
ol.style.IconAnchorUnits;


/**
 * @typedef {string}
 */
ol.style.IconOrigin;


/**
 * @typedef {string}
 */
ol.source.State;


/**
 * @type {Object}
 */
ol.source.wms;


/**
 * @typedef {string}
 */
ol.source.wms.ServerType;


/**
 * @typedef {string}
 */
ol.source.WMTSRequestEncoding;


/**
 * @typedef {string}
 */
ol.RendererType;


/**
 * @typedef {string}
 */
ol.raster.OperationType;


/**
 * @typedef {string}
 */
ol.proj.Units;


/**
 * @typedef {string}
 */
ol.layer.VectorTileRenderType;


/**
 * @typedef {string}
 */
ol.geom.GeometryType;


/**
 * @typedef {string}
 */
ol.geom.GeometryLayout;


/**
 * @typedef {string}
 */
ol.format.IGCZ;


/**
 * @typedef {string}
 */
ol.control.ScaleLineUnits;


/**
 * No `@api` annotation for `ol.style.ImageOptions`, use `Object`.
 * @typedef {Object}
 */
ol.style.ImageOptions;


/**
 * No `@api` annotation for `ol.SourceImageOptions`, use `Object`.
 * @typedef {Object}
 */
ol.SourceImageOptions;


/**
 * No `@api` annotation for `ol.SourceSourceOptions`, use `Object`.
 * @typedef {Object}
 */
ol.SourceSourceOptions;


/**
 * No `@api` annotation for `ol.SourceTileOptions`, use `Object`.
 * @typedef {Object}
 */
ol.SourceTileOptions;

