const { merge } = require('webpack-merge');
 const common = require('../config/webpack.config.dev.js');

     module.exports = merge(common, {
       mode: 'production',
     });