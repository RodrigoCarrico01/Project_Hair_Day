const path = require("path")

module.exports = {
  target: "web",
  mode: "development",
  // Ponto de entrada
  entry: path.resolve(__dirname, "src", "main.js"),
  // Ponto de saida
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  }
}