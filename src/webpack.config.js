module.exports = {
  entry: {
    background: 'src/background.js',
    'content-script': 'src/content-script.js',
  },
  optimization: {
    runtimeChunk: false,
  },
}