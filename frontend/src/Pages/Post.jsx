import React from "react";
import { useLoaderData } from "react-router-dom";
import PostItems from "../Components/PostItems";
import env from "react-dotenv";
function Post() {
  const posts = useLoaderData(); //ouk ka loader htl ka data ko pyn khw
  // console.log(posts); //array  m loh loop pek pee htoke pyy ya ml

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return <PostItems posts={post} key={post.id} />;
        })}
    </>
  );
}

export default Post;

export const loader = async () => {
  const response = await fetch(`${env.API_URL}/posts`);
  if (!response.ok) {
    throw new Error("Loading error");
  } else {
    const data = await response.json();
    return data.posts;
  }
};
