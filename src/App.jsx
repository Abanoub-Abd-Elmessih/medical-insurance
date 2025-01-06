import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Hospitals from "./Pages/Hospitals";
import Employees from "./Pages/Employees";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "/hospitals",
          element: <Hospitals />,
        },
      ],
    },
  ]);
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
