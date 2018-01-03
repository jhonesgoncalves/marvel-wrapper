"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function event() {
  var _this = this,
      _this2 = this;

  return {
    getEvent: function getEvent(id) {
      return _this.request(_this.apiURL + "/events/" + id);
    },
    getEvents: function getEvents() {
      return _this.request(_this.apiURL + "/events");
    },
    getCharacters: function getCharacters(id) {
      return _this.request(_this.apiURL + "/events/" + id + "/characters");
    },
    getComics: function getComics(id) {
      return _this.request(_this.apiURL + "/events/" + id + "/comics");
    },
    getCreators: function getCreators(id) {
      return _this.request(_this.apiURL + "/events/" + id + "/creators");
    },
    getSeries: function getSeries(id) {
      return _this.request(_this.apiURL + "/events/" + id + "/series");
    },
    getStories: function getStories(id) {
      return _this.request(_this.apiURL + "/events/" + id + "/stories");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/events?nameStartsWith=" + _search + "&");
    }
  };
}
exports.default = event;