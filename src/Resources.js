
import { addRandomBasicParticle } from './Functions';

export class String {
    constructor(Name, Strings) {
        this.Name = Name;
        this.Strings = Strings;
    }

    Cost(player, Name) {
        console.log('calculating string cost')
        addRandomBasicParticle(player, 1, 1, 0.09);
        return false;
    }

    ConvertString(player) {
        console.log('string conversion')
        if (player.Strings > 1) {
            console.warn('in progress');
            addRandomBasicParticle(player, 1, 1, 0.09);
        }
    }
}



//Particles

export class Particle {
    constructor (Name, Reward, Ups, Downs) {
        this.Name = Name;
        this.Reward = Reward;
        this.Ups = Ups;
        this.Downs = Downs;
    }

    Cost(player, Name, Reward, Ups, Downs) { // FIXME: unused arguments
        console.log('particle cost')
        if (player.Ups >= this.Ups && player.Downs >= this.Downs) {
            console.warn('calculation in progress')
            player[this.Name] += this.Reward;
            player.Ups -= this.Ups;
            player.Downs -= this.Downs;
        }
    }
}

// Atoms

export class Atom {
    constructor (Name, Reward, Protons, Electrons, Neutrons) {
        this.Name = Name;
        this.Reward = Reward;
        this.Protons = Protons;
        this.Electrons = Electrons;
        this.Neutrons = Neutrons;
    }

    Cost(player, Name, Reward, Protons, Electrons, Neutrons) {
        console.log('atom cost')
        if (player.Electrons >= this.Electrons && player.Neutrons >= this.Neutrons && player.Protons >= this.Protons) {
            console.warn('calculation in progress')
            player[this.Name] += this.Reward;
            player.Protons -= this.Protons;
            player.Electrons -= this.Electrons;
            player.Neutrons -= this.Neutrons;
        }
    }
}


// Simple molecules

export class Molecule_T1 { // nado dumat'
    constructor (Name, Reward, ) {
        this.Name = Name;
        this.Reward = Reward;
        this.Hydrogen = Hydrogen;
        this.Carbon = Carbon;
        this.Oxygen = Oxygen;
    }

    Cost(player, Name, Reward, Protons, Electrons, Neutrons) { // FIXME: unused arguments
        if (player.Electrons >= this.Electrons && player.Neutrons >= this.Neutrons && player.Protons >= this.Protons) {
            player[this.Name] += this.Reward;
            player.Protons -= this.Protons;
            player.Electrons -= this.Electrons;
            player.Neutrons -= this.Neutrons;
        }
    }
}


export class Organic_Molecule {
    constructor (Name, Reward, Carbon, Hydrogen, Oxygen) {
        this.Name = Name;
        this.Reward = Reward;
        this.Carbon = Carbon;
        this.Hydrogen = Hydrogen;
        this.Oxygen = Oxygen;
    }
}





