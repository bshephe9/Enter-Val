export const createTaskAct = task => {

};





     //return a function but with thunk we can return a function
    //getFirebase and getFirestore is to work with the database
    // return (dispatch, getState,  getFirestore ) => {
    //     const firestore = getFirestore();
    //     //this allows to add a new document to the firestore collection
    //     firestore.collection('tasks').add({
    //         ...task
    //     }).then(() => {
    //         dispatch({ type: 'CREATE_TASK', task })
    //     }).catch(err => {
    //         dispatch({ type: 'CREATE_TASK_ERROR', err })
    //     })
    // }
// dispatches an action to the reducer. 
