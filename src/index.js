import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redaxStore";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
            {/*<App*/}
            {/*    store={store}*/}
            {/*    appState={store.getState()}*/}
            {/*    dispatch={store.dispatch.bind(store)}*/}
            {/*/>*/}
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// });

reportWebVitals();
