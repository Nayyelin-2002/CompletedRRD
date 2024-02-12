import React from "react";
import { Form } from "react-router-dom";
function Postform() {
  return (
    <section className="formsection">
      <p>Create Your Post Here</p>
      <Form method="post">
        <div className="form-inp">
          <label htmlFor="form-title">Title</label>
          <input type="text" id="form-title" name="title" />
        </div>
        <div className="form-inp">
          <label htmlFor="form-image">Image</label>
          <input type="url" id="form-image" name="image" />
        </div>
        <div className="form-inp">
          <label htmlFor="form-date">Date</label>
          <input type="date" id="form-date" name="date" />
        </div>
        <div className="form-inp">
          <label htmlFor="form-description">Description</label>

          <textarea
            name="description"
            id="form-description"
            cols="80"
            rows="10"
            className="area"
          ></textarea>
        </div>
        <button className="btn">Post</button>
      </Form>
    </section>
  );
}

export default Postform;
