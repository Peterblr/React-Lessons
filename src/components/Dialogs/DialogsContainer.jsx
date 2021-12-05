import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (action) => {
    props.store.dispatch(updateNewMessageTextActionCreator(action));
  };

  return (
    <Dialogs
      updateNewMessageTextActionCreator={onMessageChange}
      addMessageActionCreator={addMessage}
      dialogsPage={state.dialogsPage}
    />
  );
};

export default DialogsContainer;
