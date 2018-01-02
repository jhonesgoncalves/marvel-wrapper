export default function character() {
  return {
    getCharacter: id => this.request(`${this.apiURL}/characters/${id}`),
    getCharacters: () => this.request(`${this.apiURL}/characters`),
    getComics: id => this.request(`${this.apiURL}/characters/${id}/comics`),
    getEvents: id => this.request(`${this.apiURL}/characters/${id}/events`),
    getSeries: id => this.request(`${this.apiURL}/characters/${id}/series`),
    getStories: id => this.request(`${this.apiURL}/characters/${id}/stories`),
    search: search => this.requestSearch(`${this.apiURL}/characters?nameStartsWith=${search}&`),
  };
}
