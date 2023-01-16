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

const aboutRoute = rootRoute.createRoute({
  path: "/about",
  component: React.lazy(() => import("../views/about")),
});

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

export default router;
