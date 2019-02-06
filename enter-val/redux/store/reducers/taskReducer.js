//Dynamic data, data manipualation should be outside of a component. 
//Mapping state from the store we can get it in the component. 
//Action from the component and will describe the action that we want to happen, in our case first it would be Add. 
//Dispatch action and have 
//Take the action

const initState = {
    tasks: []
};

// Now we want to take the action
const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('Task added', action.task)
            return state;

        case 'CREATE_TASK_ERROR':
            console.log('error', action.err)
            return state;
        default:
            return state;
    }
}


export default taskReducer;