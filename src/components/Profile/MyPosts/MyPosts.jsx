import React from "react";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>new posts</div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default MyPosts;
