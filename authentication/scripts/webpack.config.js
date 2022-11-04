const HTMLWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const publicPath = '';

module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: ['@babel/polyfill', paths.appIndexEntry],
    output: {
        path: paths.appBuild,
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: publicPath,
        crossOriginLoading: 'anonymous'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-react']
                }
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        open: true,
        hot: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: paths.appPublic + '/index.html',
            filename: './index.html',
            chunksSortMode: 'none'
        })
    ]
};
