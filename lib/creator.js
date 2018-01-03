"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function creator() {
  var _this = this,
      _this2 = this;

  return {
    getCreator: function getCreator(id) {
      return _this.request(_this.apiURL + "/creators/" + id);
    },
    getCreators: function getCreators() {
      return _this.request(_this.apiURL + "/creators");
    },
    getComics: function getComics(id) {
      return _this.request(_this.apiURL + "/creators/" + id + "/comics");
    },
    getEvents: function getEvents(id) {
      return _this.request(_this.apiURL + "/creators/" + id + "/events");
    },
    getSeries: function getSeries(id) {
      return _this.request(_this.apiURL + "/creators/" + id + "/series");
    },
    getStories: function getStories(id) {
      return _this.request(_this.apiURL + "/creators/" + id + "/stories");
    },
    search: function search(_search) {
      return _this2.requestSearch(_this2.apiURL + "/creators?nameStartsWith=" + _search + "&");
    }
  };
}
exports.default = creator;