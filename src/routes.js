import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { UnprotectedRoute } from "./routes/UnprotectedRoutes";

import Boards from "./pages/boards/boards";

// TODO: Add the pages on the designated places as you create them, other paths and routes shall be added as we progress through the app
// TODO: Create proteced routes which will render if private is true
export const ROUTES = [
  {
    path: "",
    component: () => <Redirect to="boards"></Redirect>,
    exact: true,
  },
  {
    path: "boards",
    component: Boards,
    exact: true,
  },
];

const createRoute = (routeProps) => {
  return (
    <UnprotectedRoute key={routeProps.path} {...routeProps}></UnprotectedRoute>
  );
};

const mapRoutes = (routes, path = "") => {
  return routes.reduce((acc, route) => {
    const newPath = `${path}/${route.path}`;
    if (route.component) acc.push(createRoute({ ...route, path: newPath }));
    if (route.routes) {
      acc = acc.concat(mapRoutes(route.routes, newPath));
    }
    return acc;
  }, []);
};

export const Routes = () => {
  return <Switch>{mapRoutes(ROUTES)}</Switch>;
};
