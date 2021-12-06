import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// function MyPostsContainer(props) {
//   let state = props.store.getState();
//
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };
//
//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };
//
//   return (
//     <MyPosts
//       updateNewPostTextActionCreator={onPostChange}
//       addPost={addPost}
//       postData={state.profilePage.postData}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// }

const mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreator: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
