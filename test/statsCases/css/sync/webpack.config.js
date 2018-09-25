module.exports = {
	mode: "development",
	entry: "./index",
	output: {
		filename: "bundle.js"
	},
	stats: {
		reasons: false,
		chunks: true,
		chunkModules: true,
		chunkOrigins: true,
		modules: false,
		publicPath: true
	},
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named'
  }
};