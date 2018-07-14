const path = require('path');

// 路径常量
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: [
        path.resolve(SRC_PATH, 'entry.js')
    ],
    output: {
        path: DIST_PATH,
        filename: 'index.js',
        chunkFilename: 'index.js'
    }
}
