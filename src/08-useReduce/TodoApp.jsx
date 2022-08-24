import { useReducer } from 'react'
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma ',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Tiempo',
        done: false,
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo
        }
        //console.log({todo});
        dispatch(action);
    }

    return (
        <>
            <h1>Todo APP</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos = { todos }/>
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
