import { useCouter } from "../hooks/useCounter"







export const CounterWithCustomHook = () => {

    const { counter,increment,decrement,reset } = useCouter();
    return (
        <>
            <h1>Counter con Hook: {counter}</h1>
            <hr/>
            <button className="btn btn-primary" onClick = {() => increment(2) }> +1</button>
            <button className="btn btn-primary" onClick = {reset}> Reset</button>
            <button className="btn btn-primary" onClick = {decrement}> -1</button>
        </>
    )
}
