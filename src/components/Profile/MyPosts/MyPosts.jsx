import React from "react";
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

function MyPosts(props) {
    let postsElement = props.postData.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText("");
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div>new posts</div>
            {postsElement}
        </div>
    );
}

export default MyPosts;
