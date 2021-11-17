import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.state.messagesData.map(text => <MessageItem message={text.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;