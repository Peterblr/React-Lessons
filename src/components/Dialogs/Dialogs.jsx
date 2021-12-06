import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messageElements = state.messagesData.map(text => <MessageItem message={text.message}/>);
    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessageActionCreator();
    };

    let onMessageChange = () => {
        let action = newMessageElement.current.value;
        props.updateNewMessageTextActionCreator(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>{dialogElements}</div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.text_input}>
                    <div>
                        <div>
              <textarea
                  placeholder={"Enter your message"}
                  className={s.textarea_Dialogs}
                  onChange={onMessageChange}
                  ref={newMessageElement}
                  value={newMessageText}
              />
                        </div>
                        <div>
                            <button className={s.btn_Dialogs} onClick={addMessage}>
                                Add Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
