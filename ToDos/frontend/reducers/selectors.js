export const allTodos = ( state ) => {
    
    // Object.keys(todos).map(id => todos[id]
    
    return Object.values(state.todos)    
    
}

// export const allTodos = ({ todos }) => (
// 	Object.keys(todos).map(id => todos[id])
// );

// export const allTodos = ({ todos }) => {
// 	let result = [];
	
// 	return result.push(todos[id]);
// };