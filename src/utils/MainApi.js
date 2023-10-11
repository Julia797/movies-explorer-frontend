
export const BASE_URL = 'https://api.bestfilms.julia.nomoredomainsicu.ru';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (username, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      email: email,
      password: password,
    })
  })
  .then(res => checkResponse(res))
};

export const autorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
  .then(res => checkResponse(res))
};

export const getUserContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
  })
  .then(res => checkResponse(res))
};

export const setUserInfo = (username, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({
      name: username,
      email: email,
    })
  })
  .then(res => checkResponse(res))
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    },
  })
  .then(res => checkResponse(res))
};

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
  .then(res => checkResponse(res))
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
  .then(res => checkResponse(res))
}
