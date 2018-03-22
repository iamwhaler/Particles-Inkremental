
import { addRandomBasicParticle } from './Functions';
import { refreshNumbers } from './Functions'

export class String {
    constructor(name, strings) {
        this.name = name;
        this.strings = strings;
    }

    cost(player) {
        console.log("Strings Cost")
        addRandomBasicParticle(player, 1, 1, 0.09);
        return false;
        refreshNumbers(player);
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
        if (player.Ups >= this.ups && player.Downs >= this.downs) {
            player[this.name] += this.reward;
            player.Ups -= this.ups;
            player.Downs -= this.downs;
            refreshNumbers(player);

        }
    }

    getHTML(player){
            var html = `
        <div>
            <span> Neutrons: ${player[this.name]} </span>
        </div>
            `;
            return html
        };
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
        refreshNumbers(player);

    }
}


// Simple molecules

export class Molecule_T1 { 
    constructor(name, reward, hydrogen, helium, carbon, oxygen) {
        this.name = name;
        this.reward = reward;
        this.hydrogen = hydrogen;
        this.helium = helium
        this.carbon = carbon;
        this.oxygen = oxygen;
    }

    cost(player) {
        if(this.name = "H2") {
            if(player.Hydrogen>=this.hydrogen){
            console.log("H2 cost substraction")
            player[this.name] += this.reward;
            player.Hydrogen -= this.hydrogen;
        }
        }

        else if (this.name = "He2") {
            player[this.name] += this.reward;
            player.Helium -= this.helium
        }

        refreshNumbers(player);
   
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





