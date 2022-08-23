import { useState } from "react"



export const useCouter = (initialValue = 1) => {
    
    const [counter, setcounter] = useState(initialValue);

    const increment = (value) => {
        setcounter(counter + value);
        
    }  //funcion para el primer ejemplo

/*     const increment = () => {
        setcounter(counter + 1);
    } */ //funcion para el segundo ejemplo

    const decrement = () => {
        setcounter(counter - 1);
    }

    const reset = () => {
        setcounter(initialValue);
    }
    
    return{
        counter,
        increment,
        decrement,
        reset,
    }
}