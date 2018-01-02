export default function comic() {
  return {
    getComic: id => this.request(`${this.apiURL}/comics/${id}`),
    getComics: () => this.request(`${this.apiURL}/comics`),
    getCharacters: id => this.request(`${this.apiURL}/comics/${id}/characters`),
    getEvents: id => this.request(`${this.apiURL}/comics/${id}/events`),
    getCreators: id => this.request(`${this.apiURL}/comics/${id}/creators`),
    getStories: id => this.request(`${this.apiURL}/comics/${id}/stories`),
  };
}
