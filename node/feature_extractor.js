const constants = require('../common/constants');
const features = require('../common/features');

const fs = require('fs');
console.log('Extracting sample features\n');


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
const featureNames = ['Path Count', 'Point Count'];
fs.writeFileSync(
    constants.FEATURES,
    JSON.stringify({
        featureNames,
        samples
    }

    )
);
console.log('Done\n');