const rollup = require('rollup');
const handlebars = require('rollup-plugin-handlebars-plus');
const rootImport = require('rollup-plugin-root-import');

const partialRoots = [
  `${__dirname}/src/client/js/views/`,
  `${__dirname}/src/common/views/`
];

rollup({
  entry: 'main.js',
  plugins: [
    // Required by use of `partialRoot` below.
    rootImport({
      root: partialRoots
    }),
    handlebars({
      // helpers: resolve('src/scripts/helpers/handlebars/index.js'),
      jquery: 'jquery',
      partialRoot: partialRoots,
    }),
  ]
})