import { bindActionCreators, createStore } from "redux";

function todoReducer(state, action){
    if(action.type == 'add_todo'){
        const todoText = action.payload.todoText;
        return [
            ...state,
            {text: todoText, isFinished: false, id:(state.length == 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    }else if(action.type == 'delete_todo'){
        const todoId = action.payload.todoId;
        return state.filter(t => t.id != todoId);
    }else if(action.type == 'edit_todo'){
        const todo = action.payload.todo;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if(t.id == todo.id){
                t.text = todoText;
            }
            return t
        })
    }
    return state
}

const addTodo = (todoText) => ({type:'add_todo', payload: {todoText}})
const deleteTodo = (todoId) => ({type:'delete_todo', payload: {todoId: 1}})

const {dispatch, subscribe, getState, replaceReducer} = createStore(todoReducer, [])
subscribe(() => console.log(getState()))

const actions = bindActionCreators({addTodo, deleteTodo}, dispatch)

actions.addTodo('todo 1');
actions.addTodo('todo 2');
actions.addTodo('todo 3');
actions.deleteTodo(1);
