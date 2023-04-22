"use strict";

const { Fighter } = require('./src/Fighter.js');

const heracles = new Fighter("🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);

let i = 1;
while(lion.isAlive() && heracles.isAlive()) {
    console.log(`Round ${i}`)
    heracles.fight(lion);
    lion.fight(heracles);
    if (lion.life <= 0 || heracles.life <= 0) {
        let winner = heracles.winner() + lion.winner();
        let looser = heracles.looser() + lion.looser();
        console.log(`🏆 The winner is ${winner} 🏆 💀 The looser is ${looser} 💀`)
    }
    i++;
}
