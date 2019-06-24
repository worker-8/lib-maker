const path = require('path');
const productionOptions = require('./configs/webpack.production');

module.exports = (env) => {
  const defaultOptions = {
    mode: env.mode,
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
      enforceModuleExtension: false
    }
  };

  const additionalOptions = env.mode === 'production' ? productionOptions : {};
  return Object.assign({}, defaultOptions, additionalOptions);
};
