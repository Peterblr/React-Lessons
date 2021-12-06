import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redaxStore";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        store={store}
        appState={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
      {/*updateNewPostText={store.updateNewPostText.bind(store)}*/}
      {/*addMessage={store.addMessage.bind(store)}*/}
      {/*updateNewMessageText={store.updateNewMessageText.bind(store)}/>*/}
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
