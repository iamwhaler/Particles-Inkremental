$(document).ready(function () {

setInterval(saveGame, 100000)
loadGame();

getInfo();

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

function getInfo() {
   $('#StringsCost').html( getState.StringsCost )
   $('#stringsInfo').html (getState.StringsInfo)


   $('#UpsCost').html ( getState.UpsCost )
   $('#UpsInfo').html (getState.UpsInfo)


   $('#DownsCost').html( getState.DownsCost )
   
   $('#ElectronsCost').html( getState.ElectronsCost)
   $('#ProtonsCost').html( getState.ProtonsCost)
   $('#NeutronsCost').html( getState.NeutronsCost)

   $('#HydrogenCost').html( getState.HydrogenCost)
   $('#HeliumCost').html( getState.HeliumCost)

}


});