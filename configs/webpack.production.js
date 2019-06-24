const path = require('path');

const exposeExternals = (acc, key) => {
  acc[key] = { commonjs: key };
  return acc;
};

const productionOptions = {
  // meant to create a file lib.js to expose the code
  // entry: {
  //   lib: path.resolve(__dirname, '..', 'src', 'lib.js')
  // },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  externals: [
    'react',
    'react-dom',
    'classnames',
    'prop-types'
  ].reduce(exposeExternals, {})
};

module.exports = productionOptions;
