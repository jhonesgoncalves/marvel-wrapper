export default function event() {
  return {
    getEvent: id => this.request(`${this.apiURL}/events/${id}`),
    getEvents: () => this.request(`${this.apiURL}/events`),
    getCharacters: id => this.request(`${this.apiURL}/events/${id}/characters`),
    getComics: id => this.request(`${this.apiURL}/events/${id}/comics`),
    getCreators: id => this.request(`${this.apiURL}/events/${id}/creators`),
    getSeries: id => this.request(`${this.apiURL}/events/${id}/series`),
    getStories: id => this.request(`${this.apiURL}/events/${id}/stories`),
    search: search => this.requestSearch(`${this.apiURL}/events?nameStartsWith=${search}&`),
  };
}
