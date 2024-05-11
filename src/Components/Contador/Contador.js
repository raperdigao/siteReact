// DIGITAR rsc criar funcao

import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    function handleIncremento() {
        setContador(contador + 1)
    }

    function handleDecremento() {

        if (setContador < -1) {
            alert("O valor")
        } else {
            setContador(contador - 1)
        }
        
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