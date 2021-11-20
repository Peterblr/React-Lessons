import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.state.messagesData.map(text => <MessageItem message={text.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        // props.addMessage();
        props.dispatch({type: "ADD-MESSAGE"});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        // props.updateNewMessageText(text);
        let action = {type: "UPDATE-NEW-MESSAGE-TEXT", newText: text};
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
                            <textarea className={s.textarea}
                                      onChange={onMessageChange}
                                      ref={newMessageElement}
                                      value={props.newMessageText}/>
                        </div>
                        <div>
                            <button className={s.btn} onClick={addMessage}>Add Message</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Dialogs;