import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import NegativeTable from "./TablesComponents/NegativeTable";
import reportWebVitals from "./reportWebVitals";

import ResponsiveAppBar from "./Components/HeaderComponnent";

import MenuButtons from "./Components/MenuButtons";
import FooterComponent from "./Components/FooterComponent";
import DelayingAppearance from "./Components/DelayingAppearanceComponent";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import MultilineTextFields from "./Components/CommentComponent";

export const RouterElement = () => {
  return (
    <>
      <ResponsiveAppBar />
      <FooterComponent />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/data_visualization" element={<RouterElement />}>
      <Route index element={<MenuButtons />} />
      <Route path="dashboard" element={<DelayingAppearance />} />
      <Route path="singleComment" element={<MultilineTextFields />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
