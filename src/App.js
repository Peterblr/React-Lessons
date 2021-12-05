import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import { BrowserRouter, Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/Profile"
            render={() => (
              <Profile
                store={props.store}
                // state={props.appState.profilePage}
                // dispatch={props.dispatch}
              />
            )}
          />
          <Route
            exact
            path="/Dialogs"
            render={() => (
              <DialogsContainer
                store={props.store}
                // state={props.appState.dialogsPage}
                // dispatch={props.dispatch}
              />
            )}
          />
          <Route exact path="/Music" render={() => <Music />} />
          <Route exact path="/News" render={() => <News />} />
          <Route exact path="/Settings" render={() => <Settings />} />
          <Route exact path="/Friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
