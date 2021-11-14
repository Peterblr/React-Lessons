import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src={"https://tinypng.com/images/social/website.jpg"} alt="img" />
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>new posts</div>
        <div className={s.item}>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
