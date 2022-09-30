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
      newLeaderboard.push({ username: username, wins: 1 });
    }

    localStorage.setItem("leaderboard", JSON.stringify(newLeaderboard));
  } else {
    localStorage.setItem(
      "leaderboard",
      JSON.stringify([{ username: username, wins: 1 }])
    );
  }
};
