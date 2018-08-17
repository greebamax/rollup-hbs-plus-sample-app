const rollup = require('rollup');
const handlebars = require('rollup-plugin-handlebars-plus');
const rootImport = require('rollup-plugin-root-import');

const partialRoots = [
  `${__dirname}/src/client/js/views/`,
  `${__dirname}/src/common/views/`
];

module.exports = {
  input: 'src/main.js',
  output: {
    name: 'build/main.js',
    format: 'iife'
  },
  plugins: [
    // Required by use of `partialRoot` below.
    rootImport({
      root: partialRoots
    }),
    handlebars({
      templateExtension: '.html',
      jquery: 'jquery',
      partialRoot: partialRoots,
    })
  ]
};