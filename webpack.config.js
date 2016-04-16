
console.log(22222222222222);

console.log(process.env.npm_config_argv);
console.log(1111111111111);
var webpack = require('webpack');
var fontLoader ='url?name=../build/fonts/[name].[ext]&prefix=font/&limit=10000';
module.exports = {
  entry: './js/main.js',
  output: {
    path: './build', // This is where images AND js will go
    //publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.scss$/, loader: 'style!css!sass' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style!css' },
       { test   : /\.woff|\.woff2|\.svg|.eot|.otf|\.ttf/, loader : fontLoader},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};