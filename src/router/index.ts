import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import ButtonDemo from "@pages/ButtonDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/button-demo",
    element: React.createElement(ButtonDemo),
  },
]);

export default router;
