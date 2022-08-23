import { useRef } from "react"






export const FocusScream = () => {

    const inputRef = useRef();

    const onClick =() =>{
        inputRef.current.select();
    }

    return (
        <>
        <h1>Focus Scream</h1>
        <hr/>
        <input className="form-control" 
        ref={inputRef}
        type="text"
        placeholder="Ingresa tu nombre"/>
            
            <button className="btn btn-primary mt-2"
                    onClick={onClick}>
                Focus
            </button>
        </>
    )
}
