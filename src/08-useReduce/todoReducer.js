


export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] add Todo':
            //throw new Error ('Action.type = ABC no esta implementado')
            return [...initialState, action.payload];

        case '[TODO] Remove todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return  todo;
            }) ;
            
        default:
            return initialState;
    }

}