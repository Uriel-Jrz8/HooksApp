import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

const [formState, setformState] = useState({
    userName:'strider',
    email : 'uriel@corma.com'
})

    const { userName, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ] : value,
        })
    }


    useEffect(() => {
        console.log('useEffect se llamo');
    },[])

    useEffect(() => {
        console.log('se dispra cuando detecta un cambio en el form');
    },[formState])

    useEffect(() => {
        console.log('Se dispara cuando cambia el email')
    }, [email])

    return (
        <>
        <h1>formulario simple</h1>
        <hr/>

        <input type="text" className="form-control mt-2"  placeholder="UserName" name="userName" value = { userName } onChange = {onInputChange}/>
        {
            userName === 'strider2' && <Message/>
        }
        <input type="email" className="form-control mt-2"  placeholder="uriel@gmail.com" name="email" value = { email } onChange = {onInputChange}/>
            
        </>
    )
}
