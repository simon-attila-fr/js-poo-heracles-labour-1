"use strict";

const MAX_LIFE = 100;

class Fighter {

    constructor(name, strength, dexterity, life = MAX_LIFE) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }

    // Methods
    fight(defender) {
        function calculateDamage(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        if (this.life <= 0) {
            return console.log(`${this.name} is dead.`)
        }
        let damagePts = calculateDamage(1, this.strength) - defender.dexterity;
        damagePts = damagePts <= 0 ? 0 : damagePts;
        if (defender.life - damagePts <= 0) {
            defender.life = 0;
        } else {
            defender.life = defender.life - damagePts;
        }
        console.log(`${this.name} damaged ${defender.name} by ${damagePts}.`);
        console.log(`${defender.name}'s new life: ${defender.life}.`);
    }

    isAlive() {
        if (this.life > 0) {
            return true
        }
        return false
    }

    winner() {
        if(this.life > 0) {
            return this.name
        }
        return "";
    }

    looser() {
        if(this.life <= 0) {
            return this.name
        }
        return "";
    }
};

module.exports = {
    Fighter,
};