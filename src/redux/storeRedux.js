import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./sidebarReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
});

let store = createStore(reducers);

export default store;