'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _comic = require('./comic');

var _comic2 = _interopRequireDefault(_comic);

var _character = require('./character');

var _character2 = _interopRequireDefault(_character);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MarvelWrapper = function () {
  function MarvelWrapper(options) {
    _classCallCheck(this, MarvelWrapper);

    this.apiURL = options.apiURL || _config2.default;
    this.privateKey = options.privateKey;
    this.publicKey = options.publicKey;
    this.limit = options.limit;
    this.ts = new Date().getTime();
    this.hash = (0, _md2.default)('' + this.ts + this.privateKey + this.publicKey);

    this.comic = _comic2.default.bind(this)();
    this.character = _character2.default.bind(this)();
  }

  _createClass(MarvelWrapper, [{
    key: 'request',
    value: function request(url) {
      if (this.limit) {
        return fetch(url + '?limit=' + this.limit + '&ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash).then(_utils2.default);
      }

      return fetch(url + '?ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash).then(_utils2.default);
    }
  }]);

  return MarvelWrapper;
}();

exports.default = MarvelWrapper;