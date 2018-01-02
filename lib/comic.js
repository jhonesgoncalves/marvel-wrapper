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
    }
  };
}