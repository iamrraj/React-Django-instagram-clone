import React, { useState } from "react";
import { forgetPassword } from "../Service/Auth";

function ForgetPassword() {
  const baseUrl = process.env.PUBLIC_URL;

  const [password, setPassword] = useState({
    email: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    forgetPassword(password, password.email).then((data) => {
      setPassword(data);
    });
  };

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
            placeholder="Email@gmail.com"
            type="email"
            onChange={handleInputChange}
            name="email"
          />

          <input
            type="submit"
            value="Forget Password"
            onClick={handleChangePassword}
          />

          <div class="divider">
            <b>OR</b>
          </div>

          <div class="forgotwrapper">
            <div class="forgot">
              <a href={baseUrl + "/"}>Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
