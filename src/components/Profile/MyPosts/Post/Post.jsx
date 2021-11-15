import React from "react";
import ss from "./Post.module.css";

function Post() {
  return (
    <div className={ss.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1GxBgXGsMmeEqRJfxG2z0n3vc_OFa-lxXw&usqp=CAU"
        alt="img"
      />
      Post 1
      <div>
        <button>Like</button>
      </div>
    </div>
  );
}

export default Post;
