import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
    {id: 1, message: "Hello!", likesCount: 45},
    {id: 2, message: "It's my favorite course.", likesCount: 71},
    {id: 3, message: "It's cool", likesCount: 55},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData}/>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
