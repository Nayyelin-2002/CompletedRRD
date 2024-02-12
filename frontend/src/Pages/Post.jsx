import React from "react";
import { useLoaderData } from "react-router-dom";
import PostItems from "../Components/PostItems";

function Post() {
  const posts = useLoaderData(); //ouk ka loader htl ka data ko pyn khw
  console.log(posts); //array  m loh loop pek pee htoke pyy ya ml

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return <PostItems posts={post} />;
        })}
    </>
  );
}

export default Post;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw new Error("Loading error");
  } else {
    const data = await response.json();
    return data.posts;
  }
};
