import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    Name1
                </div>
                <div className={s.dialog}>
                    Name2
                </div>
                <div className={s.dialog}>
                    Name3
                </div>
                <div className={s.dialog}>
                    Name4
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hi!</div>
            </div>
        </div>
    )
};

export default Dialogs;