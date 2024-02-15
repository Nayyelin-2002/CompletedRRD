import React from "react";
import Postform from "../Components/Postform";
import { useRouteLoaderData } from "react-router-dom";

function Edit() {
  const post = useRouteLoaderData("postdetail");
  return (
    <section>
      <Postform
        header={"Edit Your post here"}
        btn={"Update"}
        olddata={post}
        method={"PATCH"}
      />
    </section>
  );
}

export default Edit;
