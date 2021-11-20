import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";
import SidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hello!", likesCount: 45},
                {id: 2, message: "It's my favorite course.", likesCount: 71},
                {id: 3, message: "It's cool", likesCount: 55},
            ],
            newPostText: "",
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Name 1"},
                {id: 2, name: "Name 2"},
                {id: 3, name: "Name 3"},
                {id: 4, name: "Name 4"},
                {id: 5, name: "Name 5"},
                {id: 6, name: "Name 6"},
                {id: 7, name: "Name 7"},
                {id: 8, name: "Name 8"},
            ],
            messagesData: [
                {id: 1, message: "Hello!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Are you fine?"},
                {id: 4, message: "Yes. But..."},
            ],
            newMessageText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("Update!");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;