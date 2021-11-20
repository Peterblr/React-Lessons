import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElement = props.postData.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
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
