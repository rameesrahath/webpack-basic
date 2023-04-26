const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts')
    },
    devtool: 'source-map',
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        assetModuleFilename:'asset_[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
            
            },
            {
               
                    test: /\.(png:|svg|jpg|jpeg|gif)$/i,
                    type:'asset/resource'
              
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        }),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};