import about, {
  About,
  AboutContact,
  AboutCulture,
  AboutJoin,
} from "../pages/about";
import home from "../pages/home";
import noMatch from "../pages/noMatch";
import profile from "../pages/profile";
import user from "../pages/user";
import login from "../pages/login";
import product from "../pages/product";

const routes = [
  {
    path: "/",
    exact: true,
    component: home,
  },
  {
    path: "/about",
    component: about,
    routes: [
      {
        path: "/about",
        exact: true,
        component: About,
      },
      {
        path: "/about/culture",
        component: AboutCulture,
      },
      {
        path: "/about/contact",
        component: AboutContact,
      },
      {
        path: "/about/join",
        component: AboutJoin,
      },
    ],
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/user",
    component: user,
  },
  {
    path: "/noMatch",
    component: noMatch,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/product",
    component: product,
  },
];

export default routes;
