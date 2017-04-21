var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	devtool: 'eval-source-map',
	entry: {
    	app: './src/main.js'//已多次提及的唯一入口文件
  	},
	output: {
	  path: __dirname + "/public",//打包后的文件存放的地方
	  filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/, //exclude 表示哪些目录中的 .js 文件不要进行 babel-loader
				loader: 'babel-loader',
				query: {
			      presets: ['es2015', 'react']
			    }
			},
		    {
		    	test: /\.css$/, 
		    	loader: 'style-loader!css-loader' 
		    },
		    {
		        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		          limit: 10000 // [name] 就是入口指定文件名的变量
		        }
		    }
		],
		plugins: [
			new uglifyJsPlugin({
		      compress: {
		        warnings: false
		      }
		    })
		]
	}
}