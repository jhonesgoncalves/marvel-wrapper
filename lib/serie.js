"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function serie() {
  var _this = this,
      _this2 = this;

  return {
    getSerie: function getSerie(id) {
      return _this.request(_this.apiURL + "/series/" + id);
    },
    getSeries: function getSeries() {
      return _this.request(_this.apiURL + "/series");
    },
    getCharacters: function getCharacters(id) {
      return _this.request(_this.apiURL + "/series/" + id + "/characters");
    },
    getComics: function getComics(id) {
      return _this.request(_this.apiURL + "/series/" + id + "/comics");
    },
    getCreators: function getCreators(id) {
      return _this.request(_this.apiURL + "/series/" + id + "/creators");
    },
    getEvents: function getEvents(id) {
      return _this.request(_this.apiURL + "/series/" + id + "/events");
    },
    getStories: function getStories(id) {
      return _this.request(_this.apiURL + "/series/" + id + "/stories");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/series?nameStartsWith=" + _search + "&");
    }
  };
}
exports.default = serie;