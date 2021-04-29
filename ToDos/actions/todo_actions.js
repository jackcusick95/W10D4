export const RECIEVE_TODO = "RECIEVE_TODO"
export const RECIEVE_TODOS = "RECIEVE_TODOS"

export const recieveTodos = (todos) =>{
    return {
        type: RECIEVE_TODOS,
        todos,  
    };
};

export const recieveTodo = (todo) => {
    return {
        type: RECIEVE_TODO,
        todo,
    };
};