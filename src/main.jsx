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


// Hook para alterar o título da aba
const usePageTitle = (title) => {
  const location = useLocation();

  React.useEffect(() => {
    document.title = title;
  }, [location, title]);
};

function HomeWithTitle() {
  usePageTitle('ZARQA Project | Home');
  return <Home />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeWithTitle/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);