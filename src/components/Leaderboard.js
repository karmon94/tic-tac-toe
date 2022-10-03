import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Tooltip,
} from "@mui/material";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import LeaderboardTable from "./LeaderboardTable";

const Leaderboard = (props) => {
  const { onExit, open } = props;
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    setLeaderboard(leaderboard);
  }, [open]);

  const resetLeaderHandler = () => {
    localStorage.removeItem("leaderboard");
    setLeaderboard(null);
  };

  const exitHandler = () => {
    onExit();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "90%", maxHeight: "500px" } }}
      maxWidth="md"
      open={open}
      onClose={exitHandler}
    >
      <DialogTitle className="dialog-title" sx={{ fontWeight: "bolder" }}>
        Leaderboard{" "}
        <IconButton
          aria-label="close"
          onClick={exitHandler}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className="dialog-content">
        <LeaderboardTable leaderboard={leaderboard} />
      </DialogContent>
      <DialogActions>
        {leaderboard && (
          <div className="dialog-actions">
            <Tooltip title="Clear leaderboard">
              <Fab
                aria-label="play again"
                color="error"
                onClick={resetLeaderHandler}
              >
                <AutoDeleteIcon />
              </Fab>
            </Tooltip>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Leaderboard;
