//Dynamic data, data manipualation should be outside of a component. 
//Mapping state from the store we can get it in the component. 
//Action from the component and will describe the action that we want to happen, in our case first it would be Add. 
//Dispatch action and have 
//Take the action

const initState = {
    tasks: [
        {id: '1', startTime: '9:00am' , endTime: '10:00am', task: 'Reading', body: 'Read You are a badass at making money'},
        {id: '2', startTime: '12:00pm' , endTime: '2:00pm', task: 'Meeting', body: 'Meeting at the Atlanta Center'}

    ]
};

// Now we want to take the action
const taskReducer = (state = initState, action) => {
    // switch (action.type) {
    //     case 'CREATE_TASK':
    //         console.log('Task added', action.task)
    //         return state;

    //     case 'CREATE_TASK_ERROR':
    //         console.log('error', action.err)
    //         return state;
    //     default:
    //         return state;
    // }
    return state;
}


export default taskReducer;