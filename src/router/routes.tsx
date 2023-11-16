import { RouteObject } from "react-router-dom";
import App from "../App";
import routeNames from "./routeNames";

const routes: RouteObject[] = [
  {
    path: routeNames.home,
    element: <App />,
    children: [
      {
        index: true,
        path: routeNames.about,
        lazy: () => import("../features/AboutMe"),
      },
      {
        path: routeNames.techStack,
        lazy: () => import("../features/TechStack"),
      },
      {
        path: routeNames.myProjects,
        lazy: () => import("../features/MyProjects"),
      },
      {
        path: routeNames.certificates,
        lazy: () => import("../features/Certificates"),
      },
    ],
  },
];

export default routes;
