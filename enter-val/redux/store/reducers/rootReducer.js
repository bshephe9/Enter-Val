import authReducer from './authReducer';
import taskReducer from './taskReducer';
import { combineReducers } from 'redux';

//Will know about the task and change the state
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer, //property called auth
    task: taskReducer,
    // firestore: firestoreReducer, //gonna sync the property, depending of the data that component needs. 
    // firebase: firebaseReducer //see all the states of the user (SignIn or no)
});

export default rootReducer;

