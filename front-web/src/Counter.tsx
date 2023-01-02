import { useState } from 'react';
// 3 -----------------------------------------------------------------
function Counter() {
    //conceito de estado para mudar os valores no form com useState
const [counter, setCounter] = useState(0);

// 2 -----------------------------------------------------------------
const handleIncrease = () => {
    setCounter(counter + 1);
}

const handleDecrease = () => {
    setCounter(counter - 1);
}

    return(
// 1 -----------------------------------------------------------------    
    //Quando clicar neste botão chamar a função handlerIncrease,handleDecrease
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
            <h1>Valor do contador: {counter}</h1>
        </div>
    )
}export default Counter;