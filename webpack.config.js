const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // React entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Matches all .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpile JSX and ES6 to JavaScript
                },
            },
            {
                test: /\.css$/, // For CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve .js and .jsx files
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // The HTML template
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'), // Change contentBase to static
        port: 3000,
    },
};