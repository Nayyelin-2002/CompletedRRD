import React, { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getExpDuration } from "../util/getToken";
import { Loadercss } from "../Components/Loadercss";

function Main() {
  const token = useLoaderData();
  const submit = useSubmit();
  const isLoaind = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "Token Expired") {
      submit(null, { action: "/logout", method: "post" });
    }

    const duration = getExpDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, [duration]);
    console.log(duration);
  }, [token, submit]);

  return (
    <section className="main">
      <Navbar />
      {isLoaind.state === "loading" ? <Loadercss /> : <Outlet />}
    </section>
  );
}

export default Main;
