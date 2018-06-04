const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/app'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './src/index.temp.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            }, {
                test: /\.less?$/,
                loader: 'style-loader!css-loader!less-loader',
                include: [
                    path.join(__dirname, 'src', 'less'),
                ]
            }, {
                test: /\.css$/,
                include: path.join(__dirname, './node_modules/antd'),
                loader: 'style-loader!css-loader'
            }, {
                test: /\.png$/,
                loader: 'file-loader'
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
}
