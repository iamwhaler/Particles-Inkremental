$(document).ready(function () {

setInterval(saveGame, 100000)
loadGame();

window.setInterval(refreshNumbers, 200); 

function refreshNumbers() {
   		
   		document.getElementById("counterStrings").innerHTML = +Player.Strings.toFixed(2);
   		document.getElementById("counterUps").innerHTML = +Player.Ups.toFixed(2);
   		document.getElementById("counterDowns").innerHTML = +Player.Downs.toFixed(2);

   		document.getElementById("counterProtons").innerHTML = +Player.Protons.toFixed(2);
   		document.getElementById("counterNeutrons").innerHTML = +Player.Neutrons.toFixed(2);
   		document.getElementById("counterElectrons").innerHTML = +Player.Electrons.toFixed(2);
   		document.getElementById("counterHydrogen").innerHTML = +Player.Hydrogen.toFixed(2);
   		document.getElementById("counterHelium").innerHTML = +Player.Helium.toFixed(2);

   		document.getElementById("counterH2").innerHTML = +Player.H2.toFixed(2);

   		document.getElementById("counterHydrogenStar").innerHTML = +Player.Hydrogen_Star.toFixed(2);

};



});