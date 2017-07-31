const merge = require('webpack-merge');

const commonConfig = require('./webpack/common');
const developmentConfig = require('./webpack/development');
const productionConfig = require('./webpack/production');

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return merge(commonConfig, productionConfig);
    case 'development':
      return merge(commonConfig, developmentConfig);
    default:
      console.warn('No webpack configuration was found for NODE_ENV=' + process.env.NODE_ENV + '.');
      console.warn('Defaulting to development.\n');
      return merge(commonConfig, developmentConfig);
  }
};
