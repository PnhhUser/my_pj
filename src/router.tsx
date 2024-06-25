import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PATH_ALL, PATH_INDEX, PATH_LOGIN } from "./common/constants/path";
import Login from "./pages/login/login";
import Layout from "./layout/layout";
import Authen from "./components/authen";
import NotFound from "./pages/notFound/notFound";
import Index from "./pages/index";

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
        </Route>

        <Route path={PATH_LOGIN} element={<Login />} />
        <Route path={PATH_ALL} element={<NotFound />} />
      </>
    )
  );
  return <RouterProvider router={routerApp} />;
}

export default Router;
