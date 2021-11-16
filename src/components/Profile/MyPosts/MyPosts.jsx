import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
    let postData = [
        {id: 1, message: "Hello!", likesCount: 45},
        {id: 2, message: "It's my favorite course.", likesCount: 71},
        {id: 3, message: "It's cool", likesCount: 55},
    ]

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div>new posts</div>
            <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} id={postData[2].id} likesCount={postData[2].likesCount}/>

        </div>
    );
}

export default MyPosts;
