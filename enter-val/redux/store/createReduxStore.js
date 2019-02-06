import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import fbConfig from '../../config/fbConfig';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase'
import 'firebase/firestore'


const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware([thunk.withExtraArgument(getFirebase)]),
        // createFirestoreInstance(fbConfig),
        // ReactReduxFirebaseProvider(fbConfig)
    )
);

export default store;