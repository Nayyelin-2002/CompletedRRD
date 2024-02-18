import React from "react";
import Authform from "../Components/Authform";
import { redirect } from "react-router-dom";

const Auth = () => {
  return <Authform />;
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("");
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // " Authorization": "Bearer " + token,
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("");
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expDate = new Date(); //js ka supp dk current time ko milisec  nk ya
  expDate.setHours(expDate.getHours() + 1); //hours pyn change
  localStorage.setItem("exp", expDate.toISOString());
  // console.log(token);
  return redirect("/");
};
