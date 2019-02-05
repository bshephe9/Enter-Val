import { createStore, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';

//Initial state of the application

const initialState = {
    startTime: '',
    endTime: '',
    task: '',
    body: ''
}

//Reducers 

const reducer = (state = initialState, action ) => {
 return state;
}

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddlware));


export {store};