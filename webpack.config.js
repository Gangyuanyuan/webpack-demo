const path = require('path')
module.exports = {
  entry:  './src/js/app.js', // 入口文件配置
  output: { // 出口文件配置
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist/js/') // 输出文件夹，须使用绝对地址
  },
  module: {
		rules: [
			{
				test: /\.js$/, // 以.js结尾的文件
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader', // 就使用babel-loader编译
					options: {
						presets: ['@babel/preset-env']
	        }
	      }
	    },
	    {
	      test: /\.scss$/,
	      use: [{ // 顺序自下而上
	        loader: "style-loader" // 将 JS 字符串生成为 style 节点
	      }, {
	        loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
	        options: { importLoaders: 1 }
	      }, {
	      	loader: "postcss-loader" // 为 CSS 添加前缀
	      }, {
	        loader: "sass-loader" // 将 Sass 编译成 CSS
	      }]
	    }
	  ]
	}
}