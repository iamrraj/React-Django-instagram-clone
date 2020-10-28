import React, { useState, useEffect } from "react";
import config from "../Config/Config";
import Swal from "sweetalert2";
import axios from "axios";
import ls from "local-storage";
import "./Login.css";

var CLIENT_ID = "Instagram";
var GRANT_TYPE = "password";
const baseUrl = process.env.PUBLIC_URL;

function Login(props) {
  const [product, setProduct] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let authToken = localStorage.getItem("Token");
    axios({
      method: "post",
      url: config.apiUrl.login,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + JSON.parse(authToken),
      },
      data: `grant_type=${GRANT_TYPE}&username=${product.username}&password=${product.password}&client_id=${CLIENT_ID}`,
    })
      .then((response) => {
        var ls = require("local-storage");
        ls.set("Token", response.data["access_token"]);
        ls.set("RefreshToken", response.data["refresh_token"]);
        localStorage.setItem("Username", product.username);
        Swal.fire({
          title: "Log In",
          icon: "success",
          text: "Login Successful",
          showConfirmButton: false,
          timer: 3000,
        });
        redirect();
      })
      .catch((response) => {
        console.log(response);
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Error",
          timer: 2000,
        });
      });
  };
  const redirect = () => {
    if (ls.get("Token")) {
      props.history.push(baseUrl + "feed/");
      window.location.reload(1);
    }
  };

  useEffect(() => {
    redirect();
  });

  return (
    <div className="login_section">
      <div class="login">
        <h1>
          <img
            src="https://i.imgur.com/wvLiKam.png"
            width="200px"
            alt="Logo"
            height="68px"
            className="mx-auto"
          />
        </h1>

        <form action="" method="POST">
          <input
            placeholder="Phone number, username, or email"
            type="text"
            onChange={handleInputChange}
            name="username"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleInputChange}
          />

          <input type="submit" value="Log In" onClick={handleSubmit} />
          <br />
        </form>

        <div class="divider">
          <b>OR</b>
        </div>

        <div class="forgotwrapper">
          <div class="forgot">
            <a href={baseUrl + "/forget/password"}>Forgot password?</a>
          </div>
        </div>
      </div>
      <div class="infobox">
        <p>
          Don't have an account? <a href={baseUrl + "/register/"}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
