"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function comic() {
  var _this = this,
      _this2 = this;

  return {
    getComic: function getComic(id) {
      return _this.request(_this.apiURL + "/comics/" + id);
    },
    getComics: function getComics() {
      return _this.request(_this.apiURL + "/comics");
    },
    getCharacters: function getCharacters(id) {
      return _this.request(_this.apiURL + "/comics/" + id + "/characters");
    },
    getEvents: function getEvents(id) {
      return _this.request(_this.apiURL + "/comics/" + id + "/events");
    },
    getCreators: function getCreators(id) {
      return _this.request(_this.apiURL + "/comics/" + id + "/creators");
    },
    getStories: function getStories(id) {
      return _this.request(_this.apiURL + "/comics/" + id + "/stories");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/comics?titleStartsWith=" + _search + "&");
    }
  };
}
exports.default = comic;