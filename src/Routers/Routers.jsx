import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardCard from "../Pages/DashboardCard/DashboardCard";
import SecondChart from "../Pages/SecondChart/SecondChart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <DashboardCard></DashboardCard>,
      },
      {
        path: "/",
        element: <SecondChart></SecondChart>,
      },
    ],
  },
]);
