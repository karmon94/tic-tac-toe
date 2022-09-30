import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Tooltip,
} from "@mui/material";

import ReplayIcon from "@mui/icons-material/Replay";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "./WinnerDialog.css";

const WinnerDialog = (props) => {
  const { onPlayAgain, ganador, onExit, open, ...other } = props;

  const playAgainHandler = () => {
    onPlayAgain();
  };

  const exitHandler = () => {
    onExit();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle className="dialog-title">Tenemos un ganador!!</DialogTitle>
      <DialogContent dividers className="dialog-content">
        <p>{ganador} es el ganador en esta ronda!</p>
      </DialogContent>
      <DialogActions>
        <div className="dialog-actions">
          <Tooltip title="Play again">
            <Fab aria-label="play again" onClick={playAgainHandler}>
              <ReplayIcon />
            </Fab>
          </Tooltip>

          <Tooltip title="Exit">
            <Fab aria-label="exit" onClick={exitHandler}>
              <ExitToAppIcon />
            </Fab>
          </Tooltip>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default WinnerDialog;
