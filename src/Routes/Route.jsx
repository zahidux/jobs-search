import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/Home/Features/JobDeails";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import ApplyNow from "../Pages/Home/Features/ApplyNow";
import PrivetRoute from "./PrivetRoute";
import Server from "../Pages/Home/Category/server";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: (
          <PrivetRoute>
            <AppliedJobs />
          </PrivetRoute>
        ),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singUp",
        element: <SignUp />,
      },
      {
        path: "server",
        element: <Server />,
      },
      {
        path: "applyNow",
        element: (
          <PrivetRoute>
            <ApplyNow />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
