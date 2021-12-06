import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div>
      <button className={s.btn} onClick={onClick}>
        Add Message
      </button>
    </div>
  );
};

export default Button;
