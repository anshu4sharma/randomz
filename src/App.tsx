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
import { useEffect } from "react";
import Aos from "aos";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Navbar from "./components/Navbar";
import Team from "./screens/Team";
import Sale from "./components/Sale";
import { Signup } from "./screens/Signup";
const queryClient = new QueryClient();

const Root = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
};
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sale" element={<Sale />} />
      <Route element={<Layout />}>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
