// define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const addMessage = (message) => ({type: ADD, message});

function messageReducer (state = [], action) {
    if (action.type === ADD) {
        return [...state, action.message];
    };
    return state;
}

const store = Redux.createStore(messageReducer);
