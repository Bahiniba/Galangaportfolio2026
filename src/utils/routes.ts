import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Stack from "../pages/Stack";
import Contact from "../pages/Contact";
import MasterFramer from "../pages/MasterFramer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/projects/:id",
    Component: ProjectDetail,
  },
  {
    path: "/stack",
    Component: Stack,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/master-framer",
    Component: MasterFramer,
  },
]);