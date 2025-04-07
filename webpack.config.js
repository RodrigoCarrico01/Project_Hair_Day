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
  }
}