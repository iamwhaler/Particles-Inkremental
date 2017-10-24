$('button').addClass('btn btn-default');

$(document).ready(function () {

window.setInterval(refreshNumbers, 200); 

	
$("#stringBut").click(function (){
			
		Player.Strings++;
		if (Player.Strings > 10) { AddRandomBasicParticle(); };   		// add 1 to one with a probability
		
		});


$('#protonsBut').click(function () {

		if (Player.Ups >= 2 && Player.Downs >= 1) {
  			Player.Protons++};

  		});			
		


$('#neutronsBut').click(function () {

		if(Player.Ups >= 1 && Player.Downs >= 2) {
		Player.Neutrons++ 
		};
		});
															

$('#electronsBut').click(function () {
	
		Player.Electrons = Player.Electrons + 0.09 });



$('#hydrogenBut').click(function () {
		if (Player.Electrons >= 1 && Player.Neutrons >= 1 && Player.Protons >= 1) {
				Player.Electrons--;
				Player.Neutrons--;
				Player.Protons--;
				Player.Hydrogen++; 

				};

		});

$('#h2But').click(function () {
				
		if (Player.Hydrogen >= 2) {
				Player.Hydrogen = Player.Hydrogen - 2;
				Player.H2 = Player.H2 + 1;

				if (Player.H2 > 2) {								
					var interval = setInterval( function () 
						{Automation(0.5)} , 1000);

					};
				};

		});

});


function Automation (Boost) {
			
			
		Player.Energy = Player.Energy + Boost; // maybe later change Energylvl to have it as a massive of data
			
		LastEnergy=Energy
		LastDifference = Energy - LastEnergy;
			
		if (LastDifference>2) {			
			Boost = Boost/2;
		};


		};

function refreshNumbers() {
   		
   		document.getElementById("counterStrings").innerHTML = +Player.Strings.toFixed(2);
   		document.getElementById("counterUps").innerHTML = +Player.Ups.toFixed(2);
   		document.getElementById("counterDowns").innerHTML = +Player.Downs.toFixed(2);



   		document.getElementById("counterProtons").innerHTML = +Player.Protons.toFixed(2);
   		document.getElementById("counterNeutrons").innerHTML = +Player.Neutrons.toFixed(2);
   		document.getElementById("counterElectrons").innerHTML = +Player.Electrons.toFixed(2);
   		document.getElementById("counterHydrogen").innerHTML = +Player.Hydrogen.toFixed(2);
   		document.getElementById("counterH2").innerHTML = +Player.H2.toFixed(2);


		};

function Incrementing (particle, increase) {
		particle = particle + increase;
};


function getProbability(min, max) {
 		return Math.random() * (max - min) + min;
};


function AddRandomBasicParticle() {
			let upProb = 33.3;
			let downProb = 66.6;
			let electronProb = 99.9;
			let randomNumber = getProbability(1, 100);
			Player.Strings--;

				//let ups_sumbol = "Ups";

			if (randomNumber < upProb) {Player.Ups++}
			else if (randomNumber < downProb) {Player.Downs++}			
			else {Player.Electrons++};
	};		

