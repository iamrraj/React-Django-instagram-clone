import React, { useState } from "react";
import { Register } from "../Service/Auth";

function SignUp() {
  const [product, setProduct] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    Register(product).then((data) => {
      setProduct(data);
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
  const baseUrl = process.env.PUBLIC_URL;
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

        <form>
          <input
            placeholder="Username"
            onChange={handleInputChange}
            type="text"
            name="username"
          />
          <input
            placeholder="Email"
            onChange={handleInputChange}
            type="email"
            name="email"
          />
          <input
            placeholder="Password"
            onChange={handleInputChange}
            type="password"
            name="password"
          />

          <input type="submit" value="Sign Up" onClick={handleSignUp} />
          <br />
        </form>

        <div class="divider">
          <b>OR</b>
        </div>

        <div class="forgotwrapper">
          <div class="forgot">
            <a href="https://instagram.com">Forgot password?</a>
          </div>
        </div>
      </div>
      <div class="infobox">
        <p>
          Don't have an account? <a href={baseUrl + "/"}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
