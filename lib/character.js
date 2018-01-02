"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = character;
function character() {
  var _this = this;

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
    }
  };
}