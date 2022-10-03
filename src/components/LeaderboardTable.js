import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const LeaderboardTable = ({ leaderboard }) => {
  if (!leaderboard) {
    return <h4>No data available</h4>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="leaderboard table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "black" }}>
            <TableCell
              align="center"
              sx={{ color: "white", fontWeight: "bolder" }}
            >
              Position
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontWeight: "bolder" }}
            >
              Username
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: "white", fontWeight: "bolder" }}
            >
              Wins
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard.map((entry, index) => (
            <TableRow key={entry.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{entry.username}</TableCell>
              <TableCell align="center">{entry.wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
