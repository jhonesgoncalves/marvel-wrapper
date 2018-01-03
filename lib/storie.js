"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function storie() {
  var _this = this,
      _this2 = this;

  return {
    getStorie: function getStorie(id) {
      return _this.request(_this.apiURL + "/stories/" + id);
    },
    getStories: function getStories() {
      return _this.request(_this.apiURL + "/stories");
    },
    getCharacters: function getCharacters(id) {
      return _this.request(_this.apiURL + "/stories/" + id + "/characters");
    },
    getComics: function getComics(id) {
      return _this.request(_this.apiURL + "/stories/" + id + "/comics");
    },
    getCreators: function getCreators(id) {
      return _this.request(_this.apiURL + "/stories/" + id + "/creators");
    },
    getEvents: function getEvents(id) {
      return _this.request(_this.apiURL + "/stories/" + id + "/events");
    },
    getSeries: function getSeries(id) {
      return _this.request(_this.apiURL + "/stories/" + id + "/series");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/stories?nameStartsWith=" + _search + "&");
    }
  };
}
exports.default = storie;