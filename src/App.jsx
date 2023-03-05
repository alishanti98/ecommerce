import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Sidebar } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
};

export default App;
