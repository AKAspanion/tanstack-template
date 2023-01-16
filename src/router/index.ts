import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import React from "react";
import Root from "./root";

const rootRoute = createRouteConfig({
  component: Root,
});

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: React.lazy(() => import("../views/home")),
});

const usersRoute = rootRoute.createRoute({
  path: "/users",
  component: React.lazy(() => import("../views/users")),
});

const postsRoute = rootRoute.createRoute({
  path: "/posts",
  component: React.lazy(() => import("../views/posts")),
});

const createRoute = postsRoute.createRoute({
  path: "/create",
  component: React.lazy(() => import("../views/posts/create")),
});

const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: React.lazy(() => import("../views/about")),
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  usersRoute,
  aboutRoute,
  postsRoute.addChildren([createRoute]),
]);

const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

export default router;
