/* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'jquery/dist/jquery.min.js',
    // 'owl.carousel/dist/owl.carousel.min.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    'src/img/*.{png,svg,jpg}': 'img/',
    'src/fonts/SF-UI-Display-*.{woff,woff2}': 'fonts/',
    'node_modules/jquery/dist/jquery.min.js': 'js/',
    'node_modules/owl.carousel/dist/owl.carousel.min.js': 'js/',
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css': 'css/',
    // 'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  }
};

module.exports = config;
