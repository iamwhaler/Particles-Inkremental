import _ from 'lodash'

import { PlayerClass } from './src/Player.js';
import { addRandomBasicParticle, getInfo, getState, refreshNumbers } from './src/Functions.js'
import { Atom, Molecule_T1, Organic_Molecule, Particle, String, Fermione} from './src/Resources.js'
import { Star } from './src/Stars.js'
import { saveGame, loadGame, resetGame } from './src/SaveGame.js'
import { Universe } from './src/StartingUniverse.js'
import { drawElement } from './src/Functions.js'




$(document).ready(function () {
    $('button').addClass('btn btn-light');

    /// UNIVERSES ///
    const Flesh  = new Universe(2.5, 10, 2.5, 5);
    const Variable = new Universe(5, 2.5, 2.5, 10);
    const Distressed = new Universe(1.5, 2.5, 2.5, 0);
    const Launched = new Universe(5, 5, 10, 0);


    /// STRINGS ///
    const Strings = new String("Strings", 10, 1);

    const Electron = new Lepton("Electrons", 1, 1);

    /// PARTICLES ///
    const Proton = new Particle("Protons", 10, 2, 1);
    const Neutron = new Particle("Neutrons", 10, 1, 2);


    /// ATOMS ///
    const Hydrogen = new Atom("Hydrogen", 10, 1, 1, 1);
    const Helium = new Atom("Helium", 10, 2, 2, 2);

 //   let StringConversion = setInterval( () => Strings.ConvertString(Player), 1000);
    const H2 = new Molecule_T1("H2", 10, 2, 0, 0, 0);

 
    /// STARS ///
    const H2_Star = new Star("H2_Star", 1, 50, 0, 0);




    let Player = new PlayerClass();


    let getUniverseHeat = function(player){
        let numberOfStars = previous(Player.H2_Star + Player.He_Star);
        let existingStars = Player.H2_Star + Player.He_Star;
        let universeHeat = numberOfStars  / existingStars + (numberOfStrings/sec)
    }


    $("#selectUniverse").modal('toggle');
    $('[data-toggle="tooltip"]').tooltip();


    /// Starting Universes ///

    /// BUTTONS SETUP ///
    $("#stringBut").click( () => Strings.cost(Player) );
    $('#protonsBut').click( () => Proton.cost(Player) );
    $('#neutronsBut').click( () => Neutron.cost(Player) );


    $('#electronsBut').click( () => Electron.cost(Player));

    $('#hydrogenBut').click( () => Hydrogen.cost(Player) );
    $('#heliumBut').click( () => Helium.cost(Player) );

    $('#H2But').click( () => H2.cost(Player));
    $("#H2_StarBut").click( () => H2_Star.cost(Player) );

    $('#saveGame').click(() => saveGame(Player));
    $('#resetGame').click(() => resetGame(Player));


   /// SAVE GAME ///

    if (localStorage.getItem("game") === null) {
        saveGame(Player);
    }
    setInterval(() => saveGame(Player), 100000)
    loadGame(Player);

    getInfo(Player, H2_Star);

    window.setInterval(() => refreshNumbers(Player), 1000);
    window.setInterval(() => getInfo(Player, H2_Star), 1000);

});
