import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  PATH_ABOUT_ME,
  PATH_ALL,
  PATH_INDEX,
  PATH_PROJECTS,
  PATH_SKILLS,
} from "./common/constants/path";
import Layout from "./layout/layout";
import Authen from "./components/authen";
import NotFound from "./pages/notFound/notFound";
import Index from "./pages/index";
import AboutMe from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";

function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={PATH_INDEX}
          element={
            <Authen>
              <Layout />
            </Authen>
          }
        >
          <Route index element={<Index />} />
          <Route path={PATH_ABOUT_ME} element={<AboutMe />} />
          <Route path={PATH_PROJECTS} element={<Projects />} />
          <Route path={PATH_SKILLS} element={<Skills />} />
        </Route>

        <Route path={PATH_ALL} element={<NotFound />} />
      </>
    )
  );
  return <RouterProvider router={routerApp} />;
}

export default Router;
