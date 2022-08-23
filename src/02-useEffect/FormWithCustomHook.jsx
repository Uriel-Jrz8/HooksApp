import { useEffect } from "react"
import { useForm } from "../hooks/useForm";




export const FormWithCustomHook = () => {


    const { formState, onInputChange, userName, email, password, onReset } = useForm({
        userName: '',
        email: '',
        password: '',
    });
    //const { userName, email, password } = formState;

    return (
        <>
            <h1>formulario con Custom Hook</h1>
            <hr />

            <input type="text" className="form-control mt-2" placeholder="UserName" name="userName" value={userName} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="uriel@gmail.com" name="email" value={email} onChange={onInputChange} />
            <input type="password" className="form-control mt-2" placeholder="Contraseña" name="password" value={password} onChange={onInputChange} />
            <button className="btn btn-primary mt-2" onClick={onReset}> Reset </button>

        </>
    )
}
