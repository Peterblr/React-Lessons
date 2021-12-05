import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts(props) {
  let postsElement = props.postData.map((post) => (
    <Post message={post.message} id={post.id} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextActionCreator(text);
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder={"Enter your message"}
            className={s.textarea_MyPosts}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={s.btn_MyPosts} onClick={onAddPost}>
            Add Post
          </button>
        </div>
      </div>
      <div>
        New posts
        {postsElement}
      </div>
    </div>
  );
}

export default MyPosts;
