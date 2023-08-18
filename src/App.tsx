import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./screens/Hero";
import { Login } from "./screens/Login";
import Navbar from "./components/Navbar";
import Main from "./screens/Main";

const Root = () => {
  return (
    <Outlet />
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route
        path="/login"
        element={<Login />}
      />
    </Route>
  )
);


const App = () => <RouterProvider router={router} />;

export default App