function boosterStrings() {
	Player.Strings++;
};

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

			if (randomNumber < upProb) {Player.Ups=Player.Ups+1}
			else if (randomNumber < downProb) {Player.Downs=Player.Downs + 1}			
			else {Player.Electrons=Player.Electrons + 0.1};
	};		

