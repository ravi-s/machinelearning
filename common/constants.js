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
constants.TRAINING = constants.DATSET_DIR + '/training.json';
constants.TESTING = constants.DATSET_DIR + '/testing.json';
constants.FEATURES_JS = constants.JS_OBJECTS + '/features.js';
constants.TRAINING_JS = constants.JS_OBJECTS + '/training.js';
constants.TESTING_JS = constants.JS_OBJECTS + '/testing.js';
constants.MIN_MAX_JS = constants.JS_OBJECTS + '/minmax.js';


if (typeof module !== 'undefined')
    module.exports = constants;