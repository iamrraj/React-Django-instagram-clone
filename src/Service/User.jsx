import config from "../Config/Config";

export async function getUserDetail(name) {
  let products = new Promise((resolve, reject) => {
    fetch(`${config.apiUrl.user}${name}/`, config.head)
      .then((response) => {
        resolve(response.json());
      })
      .catch((reject) => console.log(reject));
  });
  return products;
}
