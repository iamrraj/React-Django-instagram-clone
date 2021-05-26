import React from "react";

function ResetPassword() {
  const [password, setPassword] = useState({
    new_password: "",
    confirm_password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    changePassword(password).then((data) => {
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
            placeholder="Old Password"
            type="password"
            onChange={handleInputChange}
            name="old_password"
          />

          <input
            placeholder="New Password"
            type="password"
            onChange={handleInputChange}
            name="new_password"
          />

          {PasswordStrength(password.new_password)}

          <input
            placeholder="Confirm Password"
            type="password"
            onChange={handleInputChange}
            name="confirm_password"
          />

          <input
            type="submit"
            value="Change Password"
            onClick={handlePasswordChange}
          />
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
