const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '*', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            },
        })
    ]
};
