import { nanoid } from "nanoid";
import { compareWins } from "./CompareWins";

export const updateLeaderboard = (username) => {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));

  if (leaderboard) {
    let found = false;

    const newLeaderboard = leaderboard.map((entry) => {
      if (entry.username === username) {
        found = true;
        return { ...entry, wins: entry.wins + 1 };
      } else {
      }
      return entry;
    });

    if (!found) {
      newLeaderboard.push({ id: nanoid(), username: username, wins: 1 });
    }

    newLeaderboard.sort(compareWins);
    localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
  } else {
    localStorage.setItem(
      "leaderboard",
      JSON.stringify([{ id: nanoid(), username: username, wins: 1 }])
    );
  }
};
