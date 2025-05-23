import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import ButtonDemo from "@pages/ButtonDemo";
import BadgeDemo from "@pages/BadgeDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/button-demo",
    element: React.createElement(ButtonDemo),
  },
  {
    path: "/badge-demo",
    element: React.createElement(BadgeDemo),
  },
]);

export default router;
