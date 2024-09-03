import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { Home } from "./routes/home";
import { Project } from "./routes/project";

// Hook para alterar o título da aba dinamicamente
const usePageTitle = (title) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
};

// Componente Home com título dinâmico
function HomeWithTitle() {
  usePageTitle('ZARQA Project | Home');
  return <Home />;
}

// Componente Project com título dinâmico
function ProjectWithTitle() {
  usePageTitle('ZARQA Project | Project');
  return <Project />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeWithTitle />,
      },
      {
        path: "project",
        element: <ProjectWithTitle />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
