const constants = require('../common/constants');
const features = require('../common/features');

const fs = require('fs');
const samples = JSON.parse(
    fs.readFileSync(constants.SAMPLES)
);
for (const sample of samples) {
    const paths = JSON.parse(
        fs.readFileSync(
            constants.JSON_DIR + '/' + sample.id + ".json"
        )
    );
    sample.point = [features.getPathCount(paths),
    features.getPointCount(paths)];
}
