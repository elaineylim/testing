//const { axios } = require("~/nuxt.config")

export default axios => ({
  new: payload => {
    return axios
      .post("v1/product/new", payload)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
});
