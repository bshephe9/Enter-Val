const initState = {
    tasks: [
        {id: '1', startTime: '11:30', endTime: '12:30' , task: 'Laundry', body:'Buy more soap to clean the sheets'},
        {id: '2', startTime: '13:30', endTime: '14:30' , task: 'Lunch', body:'Pasta with salsa Alfredo for the kids'}
    ]
};

const taskReducer = (state= initState , action ) => {
    return state;
}


export default taskReducer;