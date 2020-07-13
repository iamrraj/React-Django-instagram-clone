import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getUserDetail } from "../../Service/User";

function Header(props) {
  const [name, setName] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getUserDetail(localStorage.getItem("Username")).then((data) => {
      setName(data);
    });
  };

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.history.push(baseUrl);
    window.location.reload(); // Page reload
  };
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <div className="">
      {/* <!-- nav --> */}
      <nav class="border-b px-4 py-2 bg-white">
        <div class="flex flex-wrap items-center justify-between md:justify-around">
          {/* <!-- logo --> */}
          <img
            class="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
            alt="instagram"
          />

          {/* <!-- search--> */}
          <div class="relative hidden sm:block text-gray-500">
            <input
              class="search-bar max-w-xs border rounded bg-gray-200 px-4
            text-center outline-none focus:border-gray-400"
              type="search"
              placeholder="Search"
            />
            <i class="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>
          </div>

          {/* <a
            class="inline-block  px-0 py-0 text-white font-semibold 
                           text-sm rounded"
            href={baseUrl + "/user/" + name.username + "/"}
          >
            <i className="fas fa-trash"></i>
          </a> */}

          <div class="space-x-4">
            <a
              style={{ position: "relative", top: "-10px" }}
              class="inline-block  text-dark font-semibold 
                           text-sm rounded"
              href={baseUrl + "/feed/"}

              // onClick={onLogout}
            >
              {window.location.pathname === baseUrl + "/feed/" ? (
                <i
                  class="fa fa-home "
                  aria-hidden="true"
                  style={{ fontSize: "25px" }}
                ></i>
              ) : (
                <i
                  class="fa fa-home text-secondary"
                  aria-hidden="true"
                  style={{ fontSize: "25px" }}
                ></i>
              )}
            </a>
            <a
              class="inline-block  px-0 py-0 text-white font-semibold 
                           text-sm rounded"
              href={baseUrl + "/user/" + name.username + "/"}

              // onClick={onLogout}
            >
              <img
                class="w-20 h-20 md:w-10 md:h-10 object-cover rounded-full
                     border-2 border-pink-600 p-1 header_photo"
                src={
                  name.profile_pic
                    ? name.profile_pic
                    : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                }
                alt="profile"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);
