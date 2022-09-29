import { useState } from "react";
import Casilla from "./Casilla";

import "./Tablero.css";

const Tablero = ({ figura }) => {
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [turnoX, setTurnoX] = useState(true);
  const turnoActual = "Turno de jugador: " + (turnoX ? "X" : "O");

  const handleClick = (i) => {
    const newCasillas = casillas.slice();
    newCasillas[i] = turnoX ? "X" : "O";

    setCasillas(newCasillas);
    setTurnoX(!turnoX);
  };

  return (
    <div>
      <div className="turno-actual">{turnoActual}</div>
      <div className="tablero-row">
        {casillas.map((casilla, index) => (
          <Casilla
            key={index}
            valor={casillas[index]}
            indice={index}
            onClickCasilla={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Tablero;
