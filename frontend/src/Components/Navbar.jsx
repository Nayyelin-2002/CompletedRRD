import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        {" "}
        <h2 className="head">My Blogs</h2>
      </Link>
      <div className="nav">
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/createposts"}>Create Posts</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
