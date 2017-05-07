var config = {
	entry: './main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3001
	},
	module: {
		loaders: [
			{
				test: /.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					preset: ['es2015', 'react']
				}
			}
		]
	}
};
module.exports = config;
//entry: 指定打包的入口文件 main.js。
//output：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称。
//devServer：设置服务器端口号为 7777，端口后你可以自己设定 。
//module：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。
//exclude 过滤该指定的路径不需要进行babel处理转化es5
//include 表示哪些目录中的 .js 文件需要进行 babel-loader
//exclude 表示哪些目录中的 .js 文件不要进行 babel-loader
//现在打开 package.json 文件，找到 “scripts” 中的 “test” “echo \”Error: no test specified\” && exit 1″ 使用以下代码替换：
//
//"start": "webpack-dev-server --hot"