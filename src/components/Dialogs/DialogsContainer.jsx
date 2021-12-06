import React from "react";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();
//
//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };
//
//   let onMessageChange = (action) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(action));
//   };
//
//   return (
//     <Dialogs
//       updateNewMessageTextActionCreator={onMessageChange}
//       addMessageActionCreator={addMessage}
//       dialogsPage={state.dialogsPage}
//     />
//   );
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
     }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextActionCreator: (action) => {
            dispatch(updateNewMessageTextActionCreator(action))
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
