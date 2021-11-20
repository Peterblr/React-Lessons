import React from 'react';
import s from "./Button.module.css";
// import {addMessageActionCreator} from "../../redux/dialogsReducer";
// import store from "../../redux/storeRedux";

// const Button = () => {
//     let addMessage = () => {
//         store.dispatch(addMessageActionCreator());
//     }
//
//     return (
//         <div>
//             <button className={s.btn} onClick={addMessage} >Add Message</button>
//         </div>
//     );
// };

const Button = ({onClick}) => {
    return (
        <div>
            <button className={s.btn} onClick={onClick} >Add Message</button>
        </div>
    );
};

export default Button;