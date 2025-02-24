import React from "react";
import "../styles/Boton.css";

function Boton(props) {
        const esOperador = (valor) => {
            if( Number.isInteger( Number.parseInt(valor) ) ) {
                return "";
            }
            return "operador";
        }

        const esBorrar = (valor) => {
            if(valor == "AC") {
                return " borrador";
            }
            return "";
        }

        return(
        <button className={`${esOperador(props.children)}${esBorrar(props.children)}`}
        onClick={
            () => {
                props.hacerClick(props.children)
            }
        }
        >
            {props.children}
        </button>
        )
}

export default Boton;