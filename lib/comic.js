"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = comic;
function comic() {
  var _this = this;

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
    }
  };
}