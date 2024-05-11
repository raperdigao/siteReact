// DIGITAR rsc criar funcao

import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    function handleIncremento() {
        setContador((num) => num + 1)
    }

    function handleDecremento() {

        contador === 0 ? alert("Não é possível decrementar menor que 0!!!") : setContador((num) => num - 1)

    }

    return (
        <div>
            <h1>Número Atual</h1>
            <span>{contador}</span>
            <button onClick={() => handleIncremento()}>
                Incrementar
            </button>

            <button onClick={() => handleDecremento()}>
                Decrementar
            </button>
        </div>
    );
};

export default Contador;