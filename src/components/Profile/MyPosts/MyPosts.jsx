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
      <Post message="Hello!" likesCount=" 0" />
      <Post message="It's my favorite course." likesCount=" 10" />
      <Post message="It's beautifule." likesCount=" 17" />
    </div>
  );
}

export default MyPosts;
