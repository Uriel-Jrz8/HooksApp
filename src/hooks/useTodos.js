import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReduce/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) ||  [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]) 
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo
        }
        //console.log({todo});
        dispatch(action);
    }

    const handleDeleteTodo = ( (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        });
    })

    const  handleToggleTodo = ( (id) =>{
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });

    });

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
        
    }
}
