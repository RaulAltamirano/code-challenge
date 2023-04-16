export function winner(choices: string[], p1: string, p2: string): string {
  const indexP1 = choices.indexOf(p1);
  const indexP2 = choices.indexOf(p2);

  if (indexP1 === -1 || indexP2 === -1) return "Draw!";
  if (indexP1 === indexP2) return "Draw!";

  const N = choices.length;
  const diff = (indexP2 - indexP1 + N) % N;
  const half = Math.floor(N / 2);

  if (N % 2 === 1) {
    return diff <= half ? "Player 2 won!" : "Player 1 won!";
  } else {
    if (diff < half) return "Player 2 won!";
    if (diff === half) return "Draw!";
    return "Player 1 won!";
  }
}




const choices = ['Mario', 'Sonic', 'Goku', 'Batman', 'Spiderman', 'Elsa'];


const Player1Test = winner(choices, 'Mario', 'Spiderman') //Player 1
const Player2Test = winner(choices, 'Batman', 'Spiderman') //Player 2
const DrawnTest = winner(choices, 'Goku', 'Elsa') // Drawn


console.log({Player1Test});
console.log({Player2Test});
console.log({DrawnTest});