import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8_TWxeHBvh7xlY5jv4EG9KcIArgKIKKgcA&usqp=CAU"
        }
        alt="img"
      />
    </header>
  );
}

export default Header;
