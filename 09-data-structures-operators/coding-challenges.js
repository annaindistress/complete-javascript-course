'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #1

/*
// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored:`);
  for (let i = 0; i < players.length; i++) {
    console.log(`    - ${players[i]}`);
  }
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

// Coding Challenge #2

/*
// 1.
for (const [i, name] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${name}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) average += odd;
average /= odds.length;

console.log(`Average odd: ${average}`);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
const scorers = {};

for (const scorer of game.scored)
  scorers[scorer] = Object.keys(scorers).includes(scorer)
    ? ++scorers[scorer]
    : 1;

console.log(scorers);
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Coding challenge #3

/*
// 1.
const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()][gameEvents.size - 1];

console.log(
  `An event happend, on average, every ${
    (time > 90 ? time : 90) / gameEvents.size
  } minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const halfStr = key < 45 ? 'FIRST' : 'SECOND';
  console.log(`[${halfStr} HALF] ${key}: ${value}`);
}
*/

// Coding challenge #4

const convertion = input => {
  const rows = input.toLowerCase().split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output.padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');

document.querySelector('button').addEventListener('click', () => {
  if (textarea.value !== '') convertion(textarea.value);
});
