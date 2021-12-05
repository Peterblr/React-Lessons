import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {
  let state = props.store.getState();

  // postData={props.state.postData}
  //       newPostText={props.state.newPostText}
  //       dispatch={props.dispatch}

  let addPost = () => {
    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostTextActionCreator={onPostChange}
      addPost={addPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
