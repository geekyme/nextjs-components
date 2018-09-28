/* global __dirname, require, module*/

const webpack = require("webpack");
const path = require("path");
const env = require("yargs").argv.env; // use --env with webpack 2
const pkg = require("./package.json");
const nodeExternals = require("webpack-node-externals");

let libraryName = "button-lib";

let outputFile, mode;

if (env === "build") {
  mode = "production";
  outputFile = libraryName + ".min.js";
} else {
  mode = "development";
  outputFile = libraryName + ".js";
}

const config = {
  mode: mode,
  entry: __dirname + "/src/index.js",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    libraryTarget: "umd",
    // The umd target generates invalid code for running inside a Node.js.
    // It generates 'window' as the global object.
    // Workaround:
    // https://webpack.js.org/configuration/output/#output-librarytarget
    // https://github.com/webpack/webpack/issues/6677
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  externals: {
    // Don't bundle the 'react' npm package with the component.
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    // Include empty string '' to resolve files by their explicit extension
    // (e.g. require('./somefile.ext')).
    // Include '.js', '.jsx' to resolve files by these implicit extensions
    // (e.g. require('underscore')).
    extensions: ["*", ".js", ".jsx"]
  }
};

module.exports = config;
