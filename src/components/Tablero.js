import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Casilla from "./Casilla";
import { verificarGanador } from "./CheckWinner";

import { Fab, Tooltip } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./Tablero.css";
import WinnerDialog from "./WinnerDialog";
import { updateLeaderboard } from "./UpdateLeaderboard";

const Tablero = ({ figura }) => {
  const navigation = useNavigate();
  const [casillas, setCasillas] = useState(Array(9).fill(null));
  const [turnoX, setTurnoX] = useState(true);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [openWinnerDialog, setOpenWinnerDialog] = useState(false);
  const [ganador, setGanador] = useState(null);

  const turnoActual = "Turno de jugador: " + (turnoX ? playerOne : playerTwo);

  useEffect(() => {
    if (localStorage.getItem("player1") && localStorage.getItem("player2")) {
      setPlayerOne(localStorage.getItem("player1"));
      setPlayerTwo(localStorage.getItem("player2"));
    } else {
      navigation("/players");
    }
  }, [navigation]);

  useEffect(() => {
    if (ganador) {
      updateLeaderboard(ganador);
    }
  }, [ganador]);

  const handleClick = (i) => {
    const newCasillas = casillas.slice();
    newCasillas[i] = turnoX ? "X" : "O";

    setCasillas(newCasillas);
    setTurnoX(!turnoX);

    let ganador = verificarGanador(newCasillas);

    if (ganador) {
      let username = ganador === "X" ? playerOne : playerTwo;
      setGanador(username);
      setOpenWinnerDialog(true);
    }
  };

  const backHandler = (e) => {
    e.preventDefault();
    navigation("/players", { replace: true });
  };

  const leaderHandler = () => {};

  const playAgainHandler = () => {
    setOpenWinnerDialog(false);
    resetGame();
  };

  const exitHandler = () => {
    localStorage.removeItem("player1");
    localStorage.removeItem("player2");
    setOpenWinnerDialog(false);
    navigation("/", { replace: true });
  };

  const resetGame = () => {
    setCasillas(Array(9).fill(null));
    setGanador(null);
  };

  return (
    <div className="tablero-containter">
      <div className="buttons-container">
        <Tooltip title="Back">
          <Fab aria-label="back" onClick={backHandler}>
            <ArrowBackIcon />
          </Fab>
        </Tooltip>

        <Tooltip title="Leaderboard">
          <Fab aria-label="leaderboard" onClick={leaderHandler}>
            <LeaderboardIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className="turno-actual">
        {!ganador && <p>{turnoActual}</p>}
        {ganador && <p>No más turnos</p>}
      </div>
      <div className="tablero-row">
        {casillas.map((casilla, index) => (
          <Casilla
            key={index}
            valor={casillas[index]}
            indice={index}
            ganador={ganador}
            onClickCasilla={handleClick}
          />
        ))}
      </div>

      <WinnerDialog
        id="winnerdialog"
        keepMounted
        open={openWinnerDialog}
        onPlayAgain={playAgainHandler}
        onExit={exitHandler}
        ganador={ganador}
      />
    </div>
  );
};

export default Tablero;
