import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Casilla from "./Casilla";

import "./Tablero.css";

const Tablero = ({ figura }) => {
  const navigation = useNavigate();
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [turnoX, setTurnoX] = useState(true);
  const turnoActual = "Turno de jugador: " + (turnoX ? "X" : "O");

  useEffect(() => {}, []);

  const handleClick = (i) => {
    const newCasillas = casillas.slice();
    newCasillas[i] = turnoX ? "X" : "O";

    setCasillas(newCasillas);
    setTurnoX(!turnoX);
  };

  const veriricarGanador = (casillas) => {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];

      if (
        casillas[a] &&
        casillas[a] === casillas[b] &&
        casillas[a] === casillas[c]
      ) {
        return casillas[a];
      }
    }

    return null;
  };

  const ganador = veriricarGanador(casillas);

  console.log(ganador);

  return (
    <div className="tablero-containter">
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
