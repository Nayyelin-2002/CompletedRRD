import React from "react";
import Postform from "../Components/Postform";

function create() {
  return (
    <div>
      <Postform header={"Create your post here"} btn={"Post"} method={"POST"} />
    </div>
  );
}

export default create;
