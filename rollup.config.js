const rollup = require('rollup');
const handlebars = require('rollup-plugin-handlebars-plus');
const rootImport = require('rollup-plugin-root-import');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

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
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    rootImport({
      useEntry: 'prepend',
      extensions: ['.js', '.html'],
      root: partialRoots
    }),
    handlebars({
      templateExtension: '.html',
      jquery: 'jquery',
      isPartial: (name) => name.startsWith('_'),
      partialRoot: partialRoots
    })
  ]
};