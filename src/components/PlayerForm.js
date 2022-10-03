import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Fab } from "@mui/material";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Leaderboard from "./Leaderboard";

import "./PlayerForm.css";

const PlayerForm = () => {
  const navigation = useNavigate();
  const [player, setPlayer] = useState({
    playerOne: "",
    playerTwo: "",
  });
  const [openLeaderboardDialog, setOpenLeaderboardDialog] = useState(false);

  const onChangeHandler = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const backHandler = (e) => {
    e.preventDefault();
    navigation("/");
  };

  const startHandler = (e) => {
    e.preventDefault();

    if (player.playerOne && player.playerTwo) {
      localStorage.setItem("player1", player.playerOne);
      localStorage.setItem("player2", player.playerTwo);
      navigation("/game");
    }
  };

  const leaderHandler = (e) => {
    e.preventDefault();
    setOpenLeaderboardDialog(true);
  };

  const exitLeaderboardHandler = () => {
    setOpenLeaderboardDialog(false);
  };

  return (
    <div className="page-container">
      <div className="buttons-container">
        <Fab aria-label="back" onClick={backHandler}>
          <ArrowBackIcon />
        </Fab>

        <Fab aria-label="back" onClick={leaderHandler}>
          <LeaderboardIcon />
        </Fab>
      </div>
      <form className="form-container">
        <div className="player-input">
          <label htmlFor="playerOne">Player 1</label>
          <input
            type="text"
            name="playerOne"
            autoComplete="off"
            value={player.playerOne}
            onChange={onChangeHandler}
          />
        </div>

        <div className="player-input">
          <label htmlFor="playerTwo">Player 2</label>
          <input
            type="text"
            name="playerTwo"
            autoComplete="off"
            value={player.playerTwo}
            onChange={onChangeHandler}
          />
        </div>

        <button
          className="play-button"
          type="button"
          onClick={startHandler}
          disabled={
            player.playerOne.length === 0 || player.playerTwo.length === 0
          }
        >
          Play
        </button>
      </form>

      <Leaderboard
        id="leaderdialog"
        open={openLeaderboardDialog}
        onExit={exitLeaderboardHandler}
      />
    </div>
  );
};

export default PlayerForm;
