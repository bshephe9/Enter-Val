const initState = {
    tasks: [
        {id: '1', startTime: '11:30', endTime: '12:30' , task: 'Laundry', body:'Dark'},
        {id: '2', startTime: '13:30', endTime: '14:30' , task: 'Lunch', body:'Pasta'}
    ]
};

const taskReducer = (state= initState , action ) => {
    return state;
}


export default taskReducer;