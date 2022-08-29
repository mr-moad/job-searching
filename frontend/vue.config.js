const path = require('path');

if( process.env.NODE_ENV === "production") {
  module.exports = {
    assetsDir: '',
    publicPath: '/static',
    outputDir:'../backend/static',
    indexPath: '../templates/index.html',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
  };
}