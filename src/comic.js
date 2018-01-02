export default function comic() {
  return {
    getComic: id => this.request(`${this.apiURL}/comics/${id}`),
    getComics: () => this.request(`${this.apiURL}/comics`),
  };
}
