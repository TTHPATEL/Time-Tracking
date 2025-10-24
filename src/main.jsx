import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Dashboard from "./component/Dashboard.jsx";
import Home from "./component/Home.jsx";
import CreateUser from "./component/CreateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "create-user", element: <CreateUser /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
  // </StrictMode>
);
