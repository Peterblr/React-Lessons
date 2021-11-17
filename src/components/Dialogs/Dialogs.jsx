import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Name 1"},
        {id: 2, name: "Name 2"},
        {id: 3, name: "Name 3"},
        {id: 4, name: "Name 4"},
        {id: 5, name: "Name 5"},
        {id: 6, name: "Name 6"},
        {id: 7, name: "Name 7"},
        {id: 8, name: "Name 8"},
    ]

    let messagesData = [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Are you fine?"},
        {id: 4, message: "Yes. But..."},
    ]

    let dialogElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = messagesData.map(text => <MessageItem message={text.message}/>);

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