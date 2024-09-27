import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const coreRoutes = [
  {
    path: "/",
    title: "HomePage",
    component: HomePage,
  },
  {
    path: "*",
    title: "NotFoundPage",
    component: NotFoundPage,
  },
];

const routes = [...coreRoutes];

export default routes;
