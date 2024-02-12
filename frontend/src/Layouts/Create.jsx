import React from "react";
import Postform from "../Components/Postform";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";
function create() {
  return (
    <div>
      <Postform />
    </div>
  );
}

export default create;
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const postdatas = {
    id: uuid(),
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };
  console.log(postdatas);
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postdatas),
  });
  if (!response.ok) {
    throw new Error("Error in creating your post");
    // return null;
  } else {
    return redirect("/");
  }
};
