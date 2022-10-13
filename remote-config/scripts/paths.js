require('dotenv').config();
const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    appBuild: resolveApp('build'),
    appSrc: resolveApp('src'),
    appPublic: resolveApp('public'),
    appIndexEntry: resolveApp('src/index.tsx')
};
