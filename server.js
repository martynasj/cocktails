/**
 * Created by martynasjankauskas on 14/04/16.
 */
// This is used instead of running webpack-dev-server from the command line

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});