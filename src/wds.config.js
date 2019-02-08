module.exports = {
	entry: `./src/web4webpack.js`,
	target: 'web',
	mode: 'development',
	output: {
		path: process.cwd() +'/SKYNovel',
		filename: 'index.js',
	},

	devServer: {
		contentBase: './SKYNovel',
		port: 8082,
		openPage: 'tag.htm#development=1',
		watchContentBase: true,
		open: true
	},
};
