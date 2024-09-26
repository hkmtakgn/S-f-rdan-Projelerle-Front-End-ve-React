const ADD = "ADD_task";
const REMOVE = "REMOVE_task";
const CLEAR = "CLEAR_tasks"
const initialTodo = {todos:[]};

function todoReducer (state,action) {

switch(action.type){
    case ADD:
        return {...state,todos:[...state.todos,{id:action.payload.id,title:action.payload.title}]}
        case REMOVE:
            return { ...state, todos: state.todos.filter(item => item.id !== action.payload) };
            case CLEAR:
                return initialTodo
                default:
                    return state
}


};

export {todoReducer,ADD,REMOVE,CLEAR,initialTodo}
