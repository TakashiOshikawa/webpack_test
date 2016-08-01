module.exports = {
  entry: {
    app: ["./src/entry.js"]
  },
  output: {
    filename: "build/app.js"
  },
  resolve: {
    extentions: ['', '.js', '.jsx', '.coffee', '.css', '.styl']
  },
};
