import { useCouter, useFetch } from '../hooks/';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';



export const MultipleCustomHooks = () => {

    const {increment, counter} = useCouter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; //se utiliza cuando la data es un arreglo y no un objeto lo que se regresa

    //console.log({ data, isLoading, hasError });

    return (
        <>
            <h1>Braking Bad Hooks</h1>
            <hr />

            {
                isLoading ? <LoadingQuote/> : <Quote author = { author } quote = { quote }/>
                    
            }

            <button className="btn btn-primary" onClick={ () => increment(1)}>
                Next quote
            </button>
        </>
    )
}
