import React from "react";

function Testimonio(props) {
  return (
    <div className="cardtestimonio">
      <img src={require (`../img/persona-${props.imgNum}.png`)} alt="imagen de una persona" className="imagenTestimonio" />
      <div className="contenedor-testimonio">
        <header className="nombre-testimonio"><strong>{props.name}</strong> en {props.country}</header>
        <p className="cargo-testimonio">{props.role} at <strong>{props.company}</strong></p>
        <p className="textoTestimonio">"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimonio;