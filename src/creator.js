export default function creator() {
  return {
    getCreator: id => this.request(`${this.apiURL}/creators/${id}`),
    getCreators: () => this.request(`${this.apiURL}/creators`),
    getComics: id => this.request(`${this.apiURL}/creators/${id}/comics`),
    getEvents: id => this.request(`${this.apiURL}/creators/${id}/events`),
    getSeries: id => this.request(`${this.apiURL}/creators/${id}/series`),
    getStories: id => this.request(`${this.apiURL}/creators/${id}/stories`),
    search: search => this.requestSearch(`${this.apiURL}/creators?nameStartsWith=${search}&`),
  };
}
