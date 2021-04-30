import ToDoList from './todo_list'
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveToDo: (toDo) => {
            dispatch(receiveToDo(too))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList); 
