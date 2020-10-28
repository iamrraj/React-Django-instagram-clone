const api = `https://inback.herokuapp.com/api/1/`;

let authToken = localStorage.getItem("Token");

const config = {
  apiUrl: {
    login: `${api}oauth/token/`,
    register: `${api}user/register/`,
    user: `${api}user/`,
    comment: `${api}post/comment/`,
    post: `${api}post/`,
    feed: `${api}post/feed/`,
    edit: `${api}user/edit/me/`,
    like: `${api}post/like/`,
    change_password: `${api}user/change/password/`,
    forget: `https://inback.herokuapp.com/users/password-reset/`,
  },

  blog: {
    blog_list: `${api}blog/`,
    user_blog_list: `${api}user/blog/`,
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

  headDelete: {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },
  headPut: {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": window.localStorage.i18nextLng,
      Authorization: "Bearer " + JSON.parse(authToken),
    },
  },
};

export default config;
