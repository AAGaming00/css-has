const { Plugin } = require('powercord/entities');
const has = require('./polyfill.js');
module.exports = class CSSHas extends Plugin {
  startPlugin () {
    has();
  }
};
