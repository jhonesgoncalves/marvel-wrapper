export default function serie() {
  return {
    getSerie: id => this.request(`${this.apiURL}/series/${id}`),
    getSeries: () => this.request(`${this.apiURL}/series`),
    getCharacters: id => this.request(`${this.apiURL}/series/${id}/characters`),
    getComics: id => this.request(`${this.apiURL}/series/${id}/comics`),
    getCreators: id => this.request(`${this.apiURL}/series/${id}/creators`),
    getEvents: id => this.request(`${this.apiURL}/series/${id}/events`),
    getStories: id => this.request(`${this.apiURL}/series/${id}/stories`),
    search: search => this.requestSearch(`${this.apiURL}/series?nameStartsWith=${search}&`),
  };
}
