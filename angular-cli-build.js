/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var AppShellPlugin = require('angular2-broccoli-prerender').AppShellPlugin;
var mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var ngTree = new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js'
    ]
  });

  var appShell = new AppShellPlugin(ngTree, 'index.html', 'main-app-shell');
  return mergeTrees([ngTree, appShell], {
    overwrite: true
  });
};
