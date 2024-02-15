import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import Postdetail from "../Components/Postdetail";

function Details() {
  const post = useRouteLoaderData("postdetail");
  console.log(post);
  return (
    <section>
      <Postdetail post={post} />
    </section>
  );
}

export default Details;
export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};

//delete loke dk   method
export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });
  if (!response.ok) {
  } else {
    return redirect("/");
  }
};
