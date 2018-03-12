
import { addRandomBasicParticle } from './Functions';

export class String {
    constructor(name, strings) {
        this.name = name;
        this.strings = strings;
    }

    cost(player) {
        console.log("Strings Cost")
        addRandomBasicParticle(player, 1, 1, 0.09);
        return false;
    }

    convertString(player) {
        console.log('string conversion')
        if (player.Strings > 1) {
            addRandomBasicParticle(player, 1, 1, 0.09);
        }
    }
}



//Particles

export class Particle {
    constructor (name, reward, ups, downs) {
        this.name = name;
        this.reward = reward;
        this.ups = ups;
        this.downs = downs;
    }

    cost(player) { 
        console.log('particle cost')
        if (player.Ups >= this.ups && player.Downs >= this.downs) {
            console.warn('calculation in progress')
            player[this.name] += this.reward;
            player.Ups -= this.ups;
            player.Downs -= this.downs;
        }
    }
}

// Atoms

export class Atom {
    constructor (name, reward, protons, electrons, neutrons) {
        this.name = name;
        this.reward = reward;
        this.protons = protons;
        this.electrons = electrons;
        this.neutrons = neutrons;
    }

    cost(player) {
        console.log('atom cost')
        if (player.Electrons >= this.electrons && player.Neutrons >= this.neutrons && player.Protons >= this.protons) {
            console.warn('calculation in progress')
            player[this.name] += this.reward;
            player.Protons -= this.protons;
            player.Electrons -= this.electrons;
            player.Neutrons -= this.neutrons;
        }
    }
}


// Simple molecules

export class Molecule_T1 { 
    constructor (name, reward, hydrogen, carbon, oxygen) {
        this.name = name;
        this.reward = reward;
        this.hydrogen = hydrogen;
        this.carbon = carbon;
        this.oxygen = oxygen;
    }

   
}


export class Organic_Molecule {
    constructor (name, reward, carbon, hydrogen, oxygen) {
        this.name = name;
        this.reward = reward;
        this.carbon = carbon;
        this.hydrogen = hydrogen;
        this.oxygen = oxygen;
    }
}





