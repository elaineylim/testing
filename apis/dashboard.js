export default axios => ({
  revenue: (uid, id_token) => {
    let config = {
      headers: {
        UID: uid,
        ID_Token: id_token
      }
    };
    return axios
      .get("/v1/dashboard/revenue/", config)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
});
