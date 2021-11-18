import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Profile" render={() => <Profile
                        state={props.appState.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route exact path="/Dialogs" render={() => <Dialogs
                        state={props.appState.dialogsPage}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route exact path="/Music" render={() => <Music/>}/>
                    <Route exact path="/News" render={() => <News/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                    <Route exact path="/Friends" render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
