import React, { useState, useEffect, Suspense } from "react";
import { getUserDetail } from "../../Service/User";

import "./Profile.css";
const url = "https://inback.herokuapp.com";

// const ImageResource = unstable_createResource(
//   (src) =>
//     new Promise((resolve) => {
//       const img = new Image();
//       img.src = src;
//       img.onload = resolve;
//     })
// );

function Profile() {
  const [name, setName] = useState([]);
  const [post, setPost] = useState([]);
  //   const baseUrl = process.env.PUBLIC_URL;
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getUserDetail(localStorage.getItem("Username")).then((data) => {
      setName(data);
      setPost(data.user_posts);
    });
  };

  // const OriImg = ({ src, alt }) => {
  //   ImageResource.read(src);

  //   return <img src={src} alt={alt} />;
  // };

  // const placeholder = generatePlaceholder(ratio, "black");

  return (
    <div className="">
      <main class="bg-gray-100 bg-opacity-25">
        <div class="lg:w-8/12 lg:mx-auto mb-8">
          <header class="flex flex-wrap items-center p-4 md:py-8">
            <div class="md:w-3/12 md:ml-16">
              {/* <!-- profile image --> */}
              <img
                class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-pink-600 p-1"
                src={
                  name.profile_pic
                    ? name.profile_pic
                    : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                }
                alt="profile"
              />
            </div>

            {/* <!-- profile meta --> */}
            <div class="w-8/12 md:w-7/12 ml-4">
              <div class="md:flex md:flex-wrap md:items-center mb-4">
                <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {name.username}
                </h2>

                {/* <!-- badge --> */}
                <span
                  style={{ marginTop: "15px" }}
                  class="inline-block fas fa-certificate fa-lg text-blue-500 
                               relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    class="fas fa-check text-white text-xs absolute inset-x-0
                               ml-1 mt-px"
                  ></i>
                </span>

                {/* <!-- follow button --> */}

                <span
                  className="block text-center 
                        sm:inline-block block"
                >
                  <span>
                    {localStorage.getItem("Username") === name.username ? (
                      <a
                        href="# "
                        class="bg-white-500 px-2 py-1 
                        text-black border font-semibold text-sm rounded "
                      >
                        Edit Profile
                      </a>
                    ) : (
                      <a
                        href="# "
                        class="bg-blue-500 px-2 py-1  p-2 
                        text-white font-semibold text-sm rounded block text-center 
                        sm:inline-block block"
                      >
                        Follow
                      </a>
                    )}
                  </span>
                  <button
                    class="btn profile-settings-btn"
                    aria-label="profile settings"
                  >
                    <i
                      class="fas fa-cog "
                      aria-hidden="true"
                      style={{ fontSize: "20px" }}
                    ></i>
                  </button>
                </span>
              </div>

              {/* <!-- post, following, followers list for medium screens --> */}
              <ul class="hidden md:flex space-x-8 mb-4">
                <li>
                  <span class="font-semibold">
                    {" "}
                    {name.number_of_posts ? name.number_of_posts : 0}{" "}
                  </span>
                  posts
                </li>

                <li>
                  <span class="font-semibold">
                    {name.number_of_followers ? name.number_of_followers : 0}{" "}
                  </span>
                  followers
                </li>
                <li>
                  <span class="font-semibold">
                    {name.number_of_following ? name.number_of_following : 0}{" "}
                  </span>
                  following
                </li>
              </ul>

              {/* <!-- user meta form medium screens --> */}
              <div class="hidden md:block">
                <h6 class="font-semibold">
                  {name.fullname ? name.fullname : name.username}
                </h6>

                <p>{name.bio ? name.bio : ""}</p>
              </div>
            </div>

            {/* <!-- user meta form small screens --> */}
            <div class="md:hidden text-sm my-2">
              <h6 class="font-semibold">
                {" "}
                {name.fullname ? name.fullname : name.username}
              </h6>
              <p>{name.bio ? name.bio : ""}</p>
            </div>
          </header>

          {/* <!-- posts --> */}
          <div class="px-px md:px-3">
            {/* <!-- user following for mobile only --> */}
            <ul
              class="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span class="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_posts ? name.number_of_posts : 0}{" "}
                </span>
                posts
              </li>

              <li>
                <span class="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_followers ? name.number_of_followers : 0}{" "}
                </span>
                followers
              </li>
              <li>
                <span class="font-semibold text-gray-800 block">
                  {" "}
                  {name.number_of_following ? name.number_of_following : 0}{" "}
                </span>
                following
              </li>
            </ul>

            {/* <!-- insta freatures --> */}
            <ul
              class="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest font-semibold text-xs text-gray-600
                    border-t"
            >
              {/* <!-- posts tab is active --> */}
              <li class="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a class="inline-block p-3" href="# ">
                  <i class="fas fa-th-large text-xl md:text-xs"></i>
                  <span class="hidden md:inline">post</span>
                </a>
              </li>
              <li>
                <a class="inline-block p-3" href="# ">
                  <i class="far fa-square text-xl md:text-xs"></i>
                  <span class="hidden md:inline">igtv</span>
                </a>
              </li>
              <li>
                <a class="inline-block p-3" href="# ">
                  <i
                    class="fas fa-user border border-gray-500
                             px-1 pt-1 rounded text-xl md:text-xs"
                  ></i>
                  <span class="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>
            {/* <!-- flexbox grid --> */}
            <div class="flex flex-wrap -mx-px md:-mx-3">
              {/* <!-- column --> */}

              {post.map((c, i) => (
                <div class="w-1/3 p-px md:px-3" key={i + 1}>
                  <a href="# ">
                    <article class="post bg-gray-100 text-white relative pb-full md:mb-6">
                      <Suspense
                        fallback={
                          <img
                            src="https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                            alt="sdsd"
                          />
                        }
                      >
                        <img
                          class="w-full h-full absolute left-0 top-0 object-cover"
                          src={
                            c.photo
                              ? url + c.photo
                              : "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg"
                          }
                          alt="Logo"
                        />
                      </Suspense>

                      {/* <i class="fas fa-video absolute right-0 top-0 m-1"></i> */}

                      {/* <!-- overlay--> */}
                      <div
                        class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                                left-0 top-0 hidden"
                      >
                        <div
                          class="flex justify-center items-center 
                                    space-x-4 h-full"
                        >
                          <span class="p-2 font-bold">
                            <i class="fas fa-heart"></i> {c.number_of_likes}
                          </span>

                          <span class="p-2 font-bold">
                            <i class="fas fa-comment"></i>{" "}
                            {c.number_of_comments}
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
