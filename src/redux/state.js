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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("Update!");
    },

    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;

        this._callSubscriber(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;

        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;