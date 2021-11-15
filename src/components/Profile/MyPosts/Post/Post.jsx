import React from "react";
import ss from "./Post.module.css";

function Post(props) {
  return (
    <div className={ss.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1GxBgXGsMmeEqRJfxG2z0n3vc_OFa-lxXw&usqp=CAU"
        alt="img"
      />
      {props.message}
      <div>
        <span>Like</span>
        {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
