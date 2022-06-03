import React, { useState } from "react";
function Contador() {
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState("black");
    const [texto, setTexto] = useState("aprieta los botones");

    const aumentar = () => {
        setContador(contador >= 10 ? contador : contador + 1);
        setColor(contador >= 10 ? "red" : "black");
        setTexto(contador >= 10 ? "llego a 10" : "aumentando");
    };

    const disminuir = () => {
        setContador(contador <= 0 ? contador : contador - 1);
        setColor(contador <= 0 ? "green" : "black");
        setTexto(contador <= 0 ? "llego a 0" : "disminuyendo");
    };

    return (
        <div>
            <h1 style={{ color: color }}>{texto}</h1>

            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <h1>{contador}</h1>
        </div>
    );
}
export default Contador;
