import apiFactory from "~/apis";

// https://github.com/nuxt-community/axios-module/pull/102

export default ({ $axios }, inject) => {
  $axios.setHeader("Content-Type", "application/json");
  const apis = apiFactory($axios);
  inject("apis", apis);
};
