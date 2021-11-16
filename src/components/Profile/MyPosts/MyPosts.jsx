import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
    let postData = [
        {id: 1, message: "Hello!", likesCount: 45},
        {id: 2, message: "It's my favorite course.", likesCount: 71},
        {id: 3, message: "It's cool", likesCount: 55},
    ]

    let postsElement = postData.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);

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
            {postsElement}
        </div>
    );
}

export default MyPosts;
