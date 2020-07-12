import config from "../Config/Config";
import Swal from "sweetalert2";
import axios from "axios";
// import ls from "local-storage";
const baseUrl = process.env.PUBLIC_URL;

var CLIENT_ID = "instagram";
var GRANT_TYPE = "password";

export async function Register(product) {
  let country = new Promise((resolve, reject) => {
    axios({
      url: config.apiUrl.register,
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: product,
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: "Register Error !",
            icon: "error",
            text: "Error While Register  ??",
            timer: 2000,
          });
        } else {
          Swal.fire({
            title: "Register SuccessFully ",
            icon: "success",
            text: "Now you can login !!",
            showConfirmButton: false,
            timer: 7000,
          });
        }

        window.location.href = baseUrl + "/";
        resolve(response.json());
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
  return country;
}

export async function getLogin(username, password) {
  let country = new Promise((resolve, reject) => {
    axios({
      url: config.apiUrl.login,
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: `grant_type=${GRANT_TYPE}&username=${username}&password=${password}&client_id=${CLIENT_ID}`,
    })
      .then((response) => {
        var ls = require("local-storage");
        ls.set("Token", response.data["access_token"]);
        ls.set("RefreshToken", response.data["refresh_token"]);
        if (response.ok) {
          Swal.fire({
            title: "Register SuccessFully ",
            icon: "success",
            text: "Now you can login !!",
            showConfirmButton: false,
            timer: 7000,
          });
        } else {
          Swal.fire({
            title: "Register Error !",
            icon: "error",
            text: "Error While Register  ??",
            timer: 2000,
          });
        }

        resolve(response.json());
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
  return country;
}
