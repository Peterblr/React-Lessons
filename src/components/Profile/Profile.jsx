import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    let postData = [
        {id: 1, message: "Hello!", likesCount: 45},
        {id: 2, message: "It's my favorite course.", likesCount: 71},
        {id: 3, message: "It's cool", likesCount: 55},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
}

export default Profile;
