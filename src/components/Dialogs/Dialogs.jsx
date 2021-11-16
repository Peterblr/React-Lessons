import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessageItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
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
    //     [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
    //     <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
    //     <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>,
    //     <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>,
    //     <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>,
    //     <DialogItem name={dialogsData[7].name} id={dialogsData[7].id}/>,
    // ]

    let messageElements = messagesData.map(text => <MessageItem message={text.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                {/*<MessageItem message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<MessageItem message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<MessageItem message={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<MessageItem message={messagesData[3].message} id={messagesData[3].id}/>*/}
            </div>
        </div>
    )
};

export default Dialogs;