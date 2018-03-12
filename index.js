import _ from 'lodash'

import { PlayerClass } from './src/Player.js';
import { addRandomBasicParticle, getInfo, getState, refreshNumbers } from './src/Functions.js'
import { Atom, Molecule_T1, Organic_Molecule, Particle, String } from './src/Resources.js'
import { Star } from './src/Stars.js'
import { saveGame, loadGame, resetGame } from './src/SaveGame.js'
import { Universe } from './src/StartingUniverse.js'



$(document).ready(function () {
    $('button').addClass('btn btn-light');

    /// UNIVERSES ///
    const Flesh  = new Universe(2.5, 10, 2.5, 5);
    const Variable = new Universe(5, 2.5, 2.5, 10);
    const Distressed = new Universe(1.5, 2.5, 2.5, 0);
    const Launched = new Universe(5, 5, 10, 0);


    /// PARTICLES ///
    const Proton = new Particle("Protons", 1, 2, 1);
    const Neutron = new Particle("Neutrons", 1, 1, 2);


    /// ATOMS ///
    const Hydrogen = new Atom("Hydrogen", 1, 1, 1, 1);
    const Helium = new Atom("Helium", 1, 2, 2, 2);


    /// STRINGS ///
    const Strings = new String("Strings", 1);
 //   let StringConversion = setInterval( () => Strings.ConvertString(Player), 1000);


    /// STARS ///
    const H2_Star = new Star("H2_Star", 1, 50, 0, 0);


    let Player = new PlayerClass();
    let multiplier = 1;


    $("#selectUniverse").modal('toggle');
    $('[data-toggle="tooltip"]').tooltip();


    /// BUTTONS SETUP ///
    $("#stringBut").click( () => Strings.cost(Player) );
    $('#protonsBut').click( () => Proton.cost(Player) );
    $('#neutronsBut').click( () => Neutron.cost(Player) );
    $('#electronsBut').click(function () {
        console.log('electrons button')
        if (Player.Strings > 0) {
            console.warn('triggered')
            Player.Strings--;
            Player.Electrons += 0.09
        }
    });
    $('#hydrogenBut').click( () => Hydrogen.cost(Player) );
    $('#heliumBut').click( () => Helium.cost(Player) );

    $('#h2But').click(function () {  // needed to add adding H2 randomly
        if (Player.Hydrogen >= 2) {
            Player.Hydrogen = Player.Hydrogen - 2;
            Player.H2 = Player.H2 + 1;

            if (Player.H2  >= 2) {
                let value1 = 1 * multiplier;
                let value2 = 1 * multiplier;
                let value3 = 0.09 * multiplier;

                setInterval( () => {
                    addRandomBasicParticle(Player, value1 , value2 , value3);
                    return false
                }, 1000);

                multiplier *= 1.5
            }
        }
    });
    $("#H2_StarBut").click( () => H2_Star.cost(Player) );

    $('#saveGame').click(() => saveGame(Player));
    $('#resetGame').click(() => resetGame(Player));


    // Save game if there is no save yet
    if (localStorage.getItem("game") === null) {
        saveGame(Player);
    }
    setInterval(() => saveGame(Player), 100000)
    loadGame(Player);

    getInfo(Player, H2_Star);

    window.setInterval(() => refreshNumbers(Player), 200);
    window.setInterval(() => getInfo(Player, H2_Star), 1000);

});
