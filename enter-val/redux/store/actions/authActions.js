
// import { ReactReduxFirebaseProvider, firebaseReducer, getFirebase } from 'react-redux-firebase'

// import firebaseApp from '../../../firebase'
// export const signIn = credentials => {
//     return (dispatch, getState ) => {
//         // console.log('HELLO THIS IS A TEST: ', getFirebase);
//         // const firebase = getFirebase(); //comunicate with the project
//         firebaseApp.auth().signInWithEmailAndPassword(
//             credentials.email,
//             credentials.password
//         ).then(() => {
//             dispatch({ type: 'LOGIN_SUCCESS' })
//         }).catch(err => {
//             dispatch({ type: 'LOGIN_ERROR' }, err)
//         })
//     }
// }