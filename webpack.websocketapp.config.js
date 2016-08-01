module.exports = {
  entry: {
    app: ["./src/socketapp/entry.js"]
  },
  output: {
    filename: "build/websocketapp/app.js"
  },
  resolve: {
    extentions: ['', '.js', '.jsx', '.coffee', '.css', '.styl']
  },
};
