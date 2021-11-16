import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div >
      <div>
        <img
          src={
            ""
            // "https://thelibertarianrepublic.com/wp-content/uploads/2017/04/WALL-E-1.jpg"
          }
          alt="img"
          width="900px"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
