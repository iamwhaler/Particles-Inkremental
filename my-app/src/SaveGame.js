import { PlayerClass } from './Player';

function clearObj(obj) {
    for (let key in obj) delete obj[key];
}

export let saveGame = function(player) {
    console.log('saving game');
    console.log(player);
    let PlayerJson = JSON.stringify(player);
    localStorage.setItem("game", PlayerJson);
    console.log("Progress has been saved");
};

export let loadGame = function(player) {
    console.warn(player);
    let currentProgress = localStorage.getItem("game");
    clearObj(player);
    console.log(player);
    Object.assign(player, JSON.parse(currentProgress));
    console.log("Progress has been loaded");
};

export let resetGame = function(player) {
    let newPlayer = new PlayerClass();
    clearObj(player);
    Object.assign(player, newPlayer);
    console.log("Previous progress has been reset");
    saveGame(player);
};
