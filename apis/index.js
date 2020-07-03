import dashboardApiFactory from "./dashboard";
import productApiFactory from "./product";

const apiFactory = axios => ({
  dashboard: dashboardApiFactory(axios),
  product: productApiFactory(axios)
});

export default apiFactory;
