var webpack = require('webpack');
var path = require('path');

var args = process.argv;


var config = {
	entry: {
		ui: './ui/app.js'
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].bundle.js',
		publicPath: './public/'
	},
	'devtool': 'source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			// exclude: /(node_modules|bower_components)/,
			loaders: ['style', 'css']
		}, {
			test: /\.(jpe?g|png|gif|svg)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]
		}, {
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		}, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "url-loader?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file-loader"
		}]
	},
	resolve: {
		extensions: ['', '.js', '.json', 'css', 'scss']
	},
	resolveLoader: {
		fallback: path.join(__dirname, 'node_modules')
	}
}

if (process.env.NODE_ENV == 'production') {
	config.devtool = undefined;
	config.plugins = config.plugins.concat([
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]);
}

module.exports = config;
