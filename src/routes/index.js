import Home from "../pages/Home";
import Product from "../pages/Product";
const routes = [
  {
    component: <Home />,
    path: "/",
    layout: "main",
  },
  {
    component: <Product />,
    path: "/product/:id",
    layout: "main",
  },
];
export default routes;
