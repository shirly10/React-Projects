import React, {useState} from "react";
import Boton from "./Boton.jsx";
import "../styles/App.css";
import Pantalla from "./Pantalla.jsx";
import {evaluate} from "mathjs";

function App() {

    const [operacion, cambiarOperacion] = useState("");

    const agregarCaracter = (caracter) => {
        cambiarOperacion( operacion + caracter );
    }

    const borrarTodo = () => {
        cambiarOperacion("");
    }

    const borrarUltimoCaracter = () => {
        cambiarOperacion(operacion.slice(0, -1));
    }

    const evaluarResultado = () => {
        cambiarOperacion(evaluate(operacion));
    }

    return (
        <div className="App">
            <h1>Calculadora Shirly</h1>
            <div className="contenedor">
                <Pantalla entrada={operacion}/>
                <div className="fila">
                    <Boton hacerClick={agregarCaracter}>{"("}</Boton>
                    <Boton hacerClick={agregarCaracter}>{")"}</Boton>
                    <Boton hacerClick={borrarUltimoCaracter}>&#9003;</Boton>
                    <Boton hacerClick={agregarCaracter}>/</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClick={agregarCaracter}>7</Boton>
                    <Boton hacerClick={agregarCaracter}>8</Boton>
                    <Boton hacerClick={agregarCaracter}>9</Boton>
                    <Boton hacerClick={agregarCaracter}>*</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClick={agregarCaracter}>4</Boton>
                    <Boton hacerClick={agregarCaracter}>5</Boton>
                    <Boton hacerClick={agregarCaracter}>6</Boton>
                    <Boton hacerClick={agregarCaracter}>-</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClick={agregarCaracter}>1</Boton>
                    <Boton hacerClick={agregarCaracter}>2</Boton>
                    <Boton hacerClick={agregarCaracter}>3</Boton>
                    <Boton hacerClick={agregarCaracter}>+</Boton>
                </div>
                <div className="fila">
                    <Boton hacerClick={borrarTodo}>AC</Boton>
                    <Boton hacerClick={agregarCaracter}>0</Boton>
                    <Boton hacerClick={agregarCaracter}>.</Boton>
                    <Boton hacerClick={evaluarResultado}>=</Boton>
                </div>
            </div>
        </div>
    );
}

export default App;