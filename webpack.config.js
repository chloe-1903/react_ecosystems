const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                    plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    },
                },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: "only",
        static : {
          directory : path.join(__dirname, "public/")
        },
        port: 3000,
        devMiddleware:{
           publicPath: "https://localhost:3000/dist/",
        }
    },
    plugins: [isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
};