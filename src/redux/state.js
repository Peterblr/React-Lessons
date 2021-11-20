const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hello!", likesCount: 45},
                {id: 2, message: "It's my favorite course.", likesCount: 71},
                {id: 3, message: "It's cool", likesCount: 55},
            ],
            newPostText: "Insert Message",
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
            newMessageText: "Insert Text Message",
        }
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

    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     };
    //
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //
    //     this._callSubscriber(this._state);
    // },

    // addMessage() {
    //     let newMessage = {
    //         id: 5,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.newMessageText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST:
                let newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageText,
                };
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;

            default:
                console.log("Not found method!");
        }
        // if (action.type === "ADD-POST") {
        //     let newPost = {
        //         id: 4,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //     };
        //
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPostText = "";
        //     this._callSubscriber(this._state);
        // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.newText;
        //
        //     this._callSubscriber(this._state);
        // }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;