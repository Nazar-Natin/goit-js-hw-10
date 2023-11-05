import axios, { AxiosHeaders } from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nNGkMsGWNsgxmI5Xyz8SwrYV1fH9T6ToywxFOszmJ54FqXlPP21ncp3sqT5SY3M4';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?x-api-key=${AxiosHeaders}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    } else {
      return resp.json();
    }
  });
}

export function fetchCatByBreed(id) {
  return fetch(`${BASE_URL}/images/${id}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    } else {
      return resp.json();
    }
  });
}