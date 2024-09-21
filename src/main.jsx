import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Home/Home";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />, // Ensure you have this component
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
