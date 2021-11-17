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

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/Profile" render={() => <Profile postData={props.appState.postData}/>}/>
                    <Route exact path="/Dialogs" render={() =>
                        <Dialogs dialogsData={props.appState.dialogsData}
                                 messagesData={props.appState.messagesData}
                        />
                    }/>
                    <Route exact path="/Music" render={() => <Music/>}/>
                    <Route exact path="/News" render={() => <News/>}/>
                    <Route exact path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
