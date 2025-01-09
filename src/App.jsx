import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Hospitals from "./Pages/Hospitals";
import Employees from "./Pages/Employees";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ForgetPassword from "./Pages/ForgetPassword";
import AddEmployee from "./Pages/AddEmployee";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/hospitals",
          element: <Hospitals />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "addEmployee",
          element: <AddEmployee />,
        },
      ],
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'registration',
      element:<Registration/>
    },
    {
      path:'forgetPassword',
      element:<ForgetPassword/>
    },
  ]);
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
