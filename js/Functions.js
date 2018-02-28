"use strict";

function AddRandomBasicParticle(mod1, mod2, mod3 ) {

			let upProb = 33.3;
			let downProb = 66.6;
			let electronProb = 99.9;
			let randomNumber = getProbability(1, 100);

			if (randomNumber < upProb) {Player.Ups += mod1 }
			else if (randomNumber < downProb) {Player.Downs += mod2 }			
			else {Player.Electrons += mod3 };
		
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


function getProbability(min, max) {
 		return Math.random() * (max - min) + min;
};


