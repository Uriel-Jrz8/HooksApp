


export const todoReducer = ( initialState = [], action ) =>{

    switch (action.type) {
        case '[TODO] add Todo':
            //throw new Error ('Action.type = ABC no esta implementado')
            return [...initialState, action.payload];
        default:
            return initialState;
    }

}