const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
        contentBase: './dist'
    },

    module: {
        rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                  
                    {
                        test: /\.html$/,
                        use:['html-loader']
                    }, 
                    {
                        test: /\.(jpg|png)$/, 
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name].[ext]',
                                    outputPath: '_assets/images/',
                                    publicPath: '_assets/images/'
                                }
                            }
                        ]
                    }
            
                ]
             },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html', 
            filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                filename: '_assets/styles/styles.css',
                template: 'src/_assets/styles/styles.css', 
        
            }), 
            new CleanWebpackPlugin(['dist']),
            new CopyWebpackPlugin([
                {from: 'src/_assets/images', to: '_assets/images/'}
            ])
          
    ],
}

