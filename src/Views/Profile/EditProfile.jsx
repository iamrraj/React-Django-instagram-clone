import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUser, EditUser } from "../../Service/User";
function EditProfile() {
  const [name, setName] = useState([]);
  const [product, setProduct] = useState({
    email: "",
    username: "",
    phone_number: "",
    website: "",
    fullname: "",
    bio: "",
    // profile_pic: null,
  });

  useEffect(() => {
    handleUser();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    EditUser(product).then((data) => {});
  };

  const handleUser = () => {
    getUser().then((data) => {
      console.log(data);
      setName(data);
      setProduct({
        ...product,
        // profile_pic: data.profile_pic,
        email: data.email,
        username: data.username,
        emailNew: data.email,
        phone_number: data.phone_number,
        website: data.website,
        fullname: data.fullname,
        bio: data.bio,
      });
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  //const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="">
      <div class="login" style={{ height: "560px", width: "500px" }}>
        <h4 className="text-center" style={{ marginTop: "10px" }}>
          Edit Profile
        </h4>
        <hr></hr>
        <div className="card-header d-flex  align-items-center bg-white">
          <Link to="" className="my-1 ml-2">
            <img
              className="img-fluid border rounded-circle"
              style={{ width: "70px" }}
              src={
                name.profile_pic
                  ? name.profile_pic
                  : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
              }
              alt=""
            />
          </Link>
          <div className="ml-3">
            <Link
              to={""} //{`/profile/${photo.author.username}`}
              className="text-decoration-none"
            >
              <h6 className="font-weight-bold text-dark m-0">
                {product.fullname}
              </h6>
              <h6 className="font-weight-bold  text-secondary m-0">
                {product.username}
              </h6>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={product.fullname}
            onChange={handleInputChange}
            type="text"
            style={{ width: "430px" }}
            name="fullname"
          />
          <input
            placeholder="Username"
            value={product.username}
            onChange={handleInputChange}
            type="text"
            style={{ width: "430px" }}
            name="username"
          />

          <input
            placeholder="Website"
            value={product.website}
            onChange={handleInputChange}
            type="text"
            style={{ width: "430px" }}
            name="website"
          />

          <input
            placeholder="Biography"
            value={product.bio}
            onChange={handleInputChange}
            type="text"
            style={{ width: "430px", height: "70px" }}
            row={2}
            name="bio"
          />

          <input
            placeholder="Email"
            value={product.email}
            onChange={handleInputChange}
            type="email"
            style={{ width: "430px" }}
            name="email"
          />
          <input
            placeholder="Phone Number"
            value={product.phone_number}
            onChange={handleInputChange}
            type="text"
            style={{ width: "430px" }}
            name="phone_number"
          />

          <input
            type="submit"
            value="Save changes"
            style={{ width: "430px" }}
          />
          <br />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
