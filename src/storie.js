export default function storie() {
  return {
    getStorie: id => this.request(`${this.apiURL}/stories/${id}`),
    getStories: () => this.request(`${this.apiURL}/stories`),
    getCharacters: id => this.request(`${this.apiURL}/stories/${id}/characters`),
    getComics: id => this.request(`${this.apiURL}/stories/${id}/comics`),
    getCreators: id => this.request(`${this.apiURL}/stories/${id}/creators`),
    getEvents: id => this.request(`${this.apiURL}/stories/${id}/events`),
    getSeries: id => this.request(`${this.apiURL}/stories/${id}/series`),
    search: search => this.requestSearch(`${this.apiURL}/stories?nameStartsWith=${search}&`),
  };
}
