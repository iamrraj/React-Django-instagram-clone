const api = `https://inback.herokuapp.com/api/1/`;

let authToken = localStorage.getItem("Token");

const config = {
  apiUrl: {
    login: `${api}oauth/token/`,
    register: `${api}user/register/`,
    user: `${api}user/`,
  },

  head: {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },

  headPost: {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },
  headOption: {
    method: "OPTIONS",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },
};

export default config;
