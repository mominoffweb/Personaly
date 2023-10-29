import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maqolalar from "./components/Maqolalar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Men_haqimda from "./components/Men_haqimda";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "ma",
      element: <Maqolalar />,
    },
    {
      path: "I",
      element: <Men_haqimda />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
