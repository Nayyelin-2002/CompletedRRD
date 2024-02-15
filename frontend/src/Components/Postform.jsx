import React from "react";
import { Form, redirect } from "react-router-dom";
import { Link, useActionData } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import uuid from "react-uuid";
function Postform({ header, btn, olddata, method }) {
  const data = useActionData();
  console.log(method);
  return (
    <section className="formsection">
      <p>{header}</p>
      <Link to={"/"}>
        <ArrowLeftIcon className="arrowleft" />
      </Link>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      )}
      <Form method={method}>
        <div className="form-inp">
          <label htmlFor="form-title">Title</label>
          <input
            type="text"
            id="form-title"
            name="title"
            defaultValue={olddata ? olddata.title : " "}
          />
        </div>
        <div className="form-inp">
          <label htmlFor="form-image">Image</label>
          <input
            type="url"
            id="form-image"
            name="image"
            defaultValue={olddata ? olddata.image : ""}
          />
        </div>
        <div className="form-inp">
          <label htmlFor="form-date">Date</label>
          <input
            type="date"
            id="form-date"
            name="date"
            defaultValue={olddata ? olddata.date : ""}
          />
        </div>
        <div className="form-inp">
          <label htmlFor="form-description">Description</label>

          <textarea
            name="description"
            id="form-description"
            cols="80"
            rows="10"
            className="area"
            defaultValue={olddata ? olddata.description : ""}
          ></textarea>
        </div>
        <button className="btn">{btn}</button>
      </Form>
    </section>
  );
}

export default Postform;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const postdatas = {
    id: uuid(),
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };
  let url = "http://localhost:8080/posts";
  const method = request.method;

  if (method === "PATCH") {
    const id = params.id;
    url = `http://localhost:8080/posts/${id}`;
  }
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postdatas),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw new Error("Error in creating your post");
    // return null;
  } else {
    return redirect("/");
  }
};
