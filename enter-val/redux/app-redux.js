import { createStore, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';

//Initial state of the application

const initialState = {
    startTime: '',
    endTime: '',
    task: '',
    body: ''
}

//Reducers take an action manipulate the state depending of the action. 

const reducer = (state = initialState, action ) => {
 return state;
}

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddlware));


export {store};



//create store is in the app-redux file

