/*
Nuxt.js module for neka-confirm-plugin
Usage:
    - Install neka-confirm-plugin package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'neka-confirm-plugin/nuxt'
            // Optionally passing options in module configuration
            ['neka-confirm-plugin/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        NekaConfirmPlugin: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.NekaConfirmPlugin, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'neka-confirm-plugin-plugin.template.js.tpl'),
    fileName: 'neka-confirm-plugin-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
