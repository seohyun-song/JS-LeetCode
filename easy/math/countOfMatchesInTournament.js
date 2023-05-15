/**
 * 1688. Count of Matches in Tournament
 * You are given an integer n, the number of teams in a tournament that has strange rules:

  ● If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
  ● If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
  
  Return the number of matches played in the tournament until a winner is decided.
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let total = 0;
  if (n == 1) return 0;
  while (n >= 2) {
    if (n % 2 == 0) {
      total += n / 2;
      n = n / 2;
    } else {
      total += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  return total;
};

// 다른 사람 풀이 1
const numberOfMatches = (n) => n - 1;
