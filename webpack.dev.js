/*
 * @Author: your name
 * @Date: 2020-05-28 15:14:36
 * @LastEditTime: 2020-05-28 16:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \decorator\webpack.dev.js
 */ 
const path = require('path')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bound.js'
	},
	module: {
		rules: [
		{
			test: /\.js?$/,
			use: ['babel-loader']
		}
		]
	},
}