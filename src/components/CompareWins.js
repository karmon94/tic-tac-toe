export function compareWins(a, b) {
  if (a.wins > b.wins) {
    return -1;
  }

  if (a.wins < b.wins) {
    return 1;
  }

  return 0;
}
