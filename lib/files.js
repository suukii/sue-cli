const path = require('path')
const fs = require('fs')
const _ = require('lodash');

function getCurrentDirecotryBase() {
    return path.basename(process.cwd())
}

function directoryExists(filePath) {
    return fs.existsSync(filePath)
}

function overwritePackageJSON(path, options) {
    let pkg = require(path);
    pkg = _.merge(pkg, options);
    fs.writeFileSync(path, JSON.stringify(pkg, null, 4), 'utf-8');
}

module.exports = {
    getCurrentDirecotryBase,
    directoryExists,
    overwritePackageJSON,
};