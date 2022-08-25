

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo => (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                            <span onClick={() => onToggleTodo(todo.id)}
                                className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }`}>
                                {todo.description}
                            </span>
                            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger"> Eliminar </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
