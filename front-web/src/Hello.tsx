import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }: Props) {

    useEffect(() => {
        //console.log('componente iniciou');
        // chamada para API para buscar os produtos
    }, []);
    
    return(
    <h1>Hello {message}!</h1>
    )
}

export default Hello;