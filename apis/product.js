//const { axios } = require("~/nuxt.config")

export default axios => ({
  new: (payload, uid, id_token) => {
    let config = {
      headers: {
        UID: uid,
        ID_TOKEN: id_token
      }
    };
    return axios
      .post("/v1/product/new", payload, config)
      .then(res => res.data)
      .catch(err => console.error(err));
  },
  all: (uid, id_token) => {
    let config = {
      headers: {
        UID: uid,
        ID_TOKEN: id_token
      }
    };
    return axios
      .get("/v1/product/all", config)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
});
