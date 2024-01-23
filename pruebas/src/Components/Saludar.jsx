import React from "react";

export default function Saludar(props) {

    return (
        <div>
            <h2>Hola {props.usuarioInfo.nombre} tu edad es {props.usuarioInfo.edad} y tu color es {props.usuarioInfo.color}</h2>
        </div>
    )

}