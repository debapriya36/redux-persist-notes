const initialdata={
    tasklist : [ "Let Me Love You","Perfect","Ashes","Popstar"]
}


function taskReducer(state=initialdata, action)
{
    switch(action.type)
    {
        case 'ADD_TASK': return {
            ...state ,
            tasklist : [...state.tasklist , action.payload]
        }
        default : {
            return state;
        }
    }
}

export default taskReducer;

