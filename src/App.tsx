import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./screens/Login";
import Main from "./screens/Main";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
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