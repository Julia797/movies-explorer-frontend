class MoviesApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'Authorization' : `Bearer ${token}`,
      }
    })
    .then(this._checkResponse)
  };
};

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;