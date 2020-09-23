import React from "react";
import { Header } from "../components/Header";
import { Description } from "../components/Description";

export default function Ppicontainer() {
  return (
    <div className="Ppicontainer">
      <Header />,
      <img className="Logo" src="./img/Logo2.png" alt="Logo" />
      <Description title="Los árboles son el trono exterior de la magneficencia divina" />
      <div>
        <button type="button" class="btn btn-secondary btn-lg">
          INICIAR SESIÓN
        </button>
      </div>
    </div>
  );
}
