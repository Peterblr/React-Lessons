import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaWqRLK82DhCclXVBt9QpcmSeSqBXEW_u5Q&usqp=CAU"
            // "https://thelibertarianrepublic.com/wp-content/uploads/2017/04/WALL-E-1.jpg"
          }
          alt="img"
          width="800px"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
