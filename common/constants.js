const constants = {};
constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + '/raw';
constants.DATSET_DIR = constants.DATA_DIR + '/dataset';
constants.JSON_DIR = constants.DATSET_DIR + '/json';
constants.IMG_DIR = constants.DATSET_DIR + '/img';
constants.SAMPLES = constants.DATSET_DIR + "/samples.json";
constants.JS_OBJECTS = '../common/js_objects';
constants.SAMPLES_JS = constants.JS_OBJECTS + '/samples.js';
constants.FEATURES = constants.DATSET_DIR + '/features.json';
constants.FEATURES_JS = constants.JS_OBJECTS + '/features.js';

if (typeof module !== 'undefined')
    module.exports = constants;