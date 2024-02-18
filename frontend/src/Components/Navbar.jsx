import React from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";

function Navbar() {
  const isToken = useRouteLoaderData("root");
  return (
    <nav>
      <Link to={"/"}>
        <h2 className="head">My Blogs</h2>
      </Link>
      <div className="nav">
        <NavLink to={"/"}>Posts</NavLink>
        {isToken && <NavLink to={"/createposts"}>Create Posts</NavLink>}
        {!isToken && <NavLink to={"/auth?mode=login"}>Login</NavLink>}
        {isToken && <NavLink to={"/logout"}>Logout</NavLink>}
      </div>
    </nav>
  );
}

export default Navbar;
