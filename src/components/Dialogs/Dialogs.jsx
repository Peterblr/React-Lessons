import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogsReducer";
import Button from "../Button/Button";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.state.messagesData.map(text => <MessageItem message={text.message}/>);

    let newMessageText = props.state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.text_input}>
                    <div>
                        <div>
                            <textarea placeholder={"Enter your message"}
                                      className={s.textarea_Dialogs}
                                      onChange={onMessageChange}
                                      ref={newMessageElement}
                                      value={newMessageText}/>
                        </div>
                        <Button onClick={addMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;