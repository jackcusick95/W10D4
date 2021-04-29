import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);    
    const nextState2 = Object.assign({}, state);    
    // debugger
    switch (action.type) {
        case RECEIVE_TODOS:   
            // debugger
            nextState[action.todos.id] = action.todos;
            return nextState;
        case RECEIVE_TODO:
            // debugger
            nextState2[action.todo.id] = action.todo;
            return nextState2;
        default:
            // debugger
            return state;
    }
  };
  
  export default todosReducer;
