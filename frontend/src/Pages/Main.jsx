import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Main() {
  return (
    <section className="main">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default Main;
