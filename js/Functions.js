function AddRandomBasicParticle() {
			let _modifier1 = 1;
			let _modifier2 = 1;
			let _modifier3 = 0.1;

			let upProb = 33.3;
			let downProb = 66.6;
			let electronProb = 99.9;
			let randomNumber = getProbability(1, 100);

				//let ups_sumbol = "Ups";

			if (randomNumber < upProb) {Player.Ups=Player.Ups+ _modifier1}
			else if (randomNumber < downProb) {Player.Downs=Player.Downs + _modifier2}			
			else {Player.Electrons=Player.Electrons + _modifier3};

	};		

//Molecules T1

function H2_Reward() {
	
	
	let lowerRange = 0.1;
	let stringsModifier = getProbability( lowerRange , 1);
	
	Player.Strings = Player.Strings - (Player.Strings * stringsModifier);



	AddRandomBasicParticle();
	$('#boostStrings').html( "("+ stringsModifier.toFixed(3)+ "/sec)");
	// add the more you use the higher this shit},)
	lowerRange++;
};




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

function getProbability(min, max) {
 		return Math.random() * (max - min) + min;
};


