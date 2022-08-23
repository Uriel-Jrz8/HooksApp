import { useEffect } from "react"









export const Message = () => {

    useEffect(() => {
        console.log('El componente se monto');
        return () => {
            console.log('El componente se desmonto');
        }
    }, [])
    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
