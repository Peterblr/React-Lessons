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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Name 1" id="1"/>
                <DialogItem name="Name 2" id="2"/>
                <DialogItem name="Name 3" id="3"/>
                <DialogItem name="Name 4" id="4"/>
                <DialogItem name="Name 5" id="5"/>
                <DialogItem name="Name 6" id="6"/>
                <DialogItem name="Name 7" id="7"/>
            </div>
            <div className={s.messages}>
                <MessageItem message={"Hello!"}/>
                <MessageItem message={"How are you?"}/>
                <MessageItem message={"Are you fine?"}/>
                <MessageItem message={"Yes. But..."}/>

            </div>
        </div>
    )
};

export default Dialogs;