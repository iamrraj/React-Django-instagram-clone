import config from "../Config/Config";
import Swal from "sweetalert2";
import axios from "axios";
let authToken = localStorage.getItem("Token");

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
          console.log("err");
        } else {
          Swal.fire({
            title: "Register SuccessFully ",
            icon: "success",
            text: "Email sent to your register email to confirm account !!",
            showConfirmButton: false,
            timer: 4000,
          });
        }
        resolve(response.json());
      })
      .catch((reject) => {
        if (reject.response) {
          Swal.fire({
            title: " Error !",
            icon: "error",
            text: reject.response.data.email
              ? reject.response.data.email
              : reject.response.data.username,
            timer: 2000,
          });
          // console.log("Err", reject.response.data);
        } else {
          console.log("Error", reject.message);
        }
      });
  });
  return country;
}

export async function forgetPassword(product, email) {
  let country = new Promise((resolve, reject) => {
    axios({
      url: config.apiUrl.forget,
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
            title: "Email Sent ",
            icon: "success",
            text: "Email sent to" + email + "Forget Password",
            showConfirmButton: false,
            timer: 4000,
          });
        } else {
          Swal.fire({
            title: " Error !",
            icon: "error",
            text: "Please Check Your email id??",
            timer: 2000,
          });
          Swal.fire({
            title: "Email Sent ",
            icon: "success",
            text: "Email sent to " + email + " Forget Password",
            showConfirmButton: false,
            timer: 4000,
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

export async function changePassword(product) {
  let country = new Promise((resolve, reject) => {
    axios({
      url: config.apiUrl.change_password,
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(authToken),
      },
      data: product,
    })
      .then((response) => {
        if (!response.ok) {
          Swal.fire({
            title: "Change Password ",
            icon: "success",
            text: "Passoword Change",
            showConfirmButton: false,
            timer: 4000,
          });
        } else {
          console.log("ss");
        }
        resolve(response.json());
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            title: " Error !",
            icon: "error",
            text: error.response.data.old_password
              ? "Old password " + error.response.data.old_password
              : error.response.data.new_password,
            timer: 2000,
          });
          console.log("Err", error.response.data);
        } else {
          console.log("Error", error.message);
        }
      });
  });
  return country;
}

// console.log(error.response);
// if (error.response) {
//   console.log(error.response);
//   console.log(error.response.data);
//   console.log(error.response.status);
//   console.log(error.response.headers);
// } else if (error.request) {
//   console.log(error.request);
// } else {
//   console.log("Error", error.message);
// }
// console.log(error.config);
