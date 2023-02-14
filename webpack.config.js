const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        devtool: 'eval-source-map',
        rules: {

            test: /\.ts$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src')]
        }
    },
    resolve: {
        extensions: ['.ts', '.js']},
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')

    }
}