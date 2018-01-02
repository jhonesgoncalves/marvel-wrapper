"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function character() {
  var _this = this,
      _this2 = this;

  return {
    getCharacter: function getCharacter(id) {
      return _this.request(_this.apiURL + "/characters/" + id);
    },
    getCharacters: function getCharacters() {
      return _this.request(_this.apiURL + "/characters");
    },
    getComics: function getComics(id) {
      return _this.request(_this.apiURL + "/characters/" + id + "/comics");
    },
    getEvents: function getEvents(id) {
      return _this.request(_this.apiURL + "/characters/" + id + "/events");
    },
    getSeries: function getSeries(id) {
      return _this.request(_this.apiURL + "/characters/" + id + "/series");
    },
    getStories: function getStories(id) {
      return _this.request(_this.apiURL + "/characters/" + id + "/stories");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/characters?nameStartsWith=" + _search + "&");
    }
  };
}
exports.default = character;