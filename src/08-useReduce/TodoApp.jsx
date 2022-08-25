import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {

    const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo,  todosCount, pendingTodosCount } = useTodos();

    return (
        <>
            <h1>Todo APP</h1>
            <hr />
            <h1>Total de Tareas: {todosCount} <small>Pendientes: {pendingTodosCount}</small></h1>
            <div className="row">
                <div className="col-7">
                    <TodoList todos = { todos } onDeleteTodo = { id => handleDeleteTodo( id ) } onToggleTodo = { id => handleToggleTodo( id ) } />
                </div>

                <div className="col-5">
                    <h4>Agregar a TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo = {handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
