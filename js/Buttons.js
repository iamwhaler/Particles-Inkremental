"use strict";

$('button').addClass('btn btn-outline-secondary');



$(document).ready(function () {
	$('#StringsCost').html( getState.StringsCost )
	$('#UpsCost').html ( getState.UpsCost )
	$('#DownsCost').html( getState.DownsCost )
	
	$('#ElectronsCost').html( getState.ElectronsCost)
	$('#ProtonsCost').html( getState.ProtonsCost)
	$('#NeutronsCost').html( getState.NeutronsCost)

	$('#HydrogenCost').html( getState.HydrogenCost)
	$('#HeliumCost').html( getState.HeliumCost)



});


$(document).ready(function () {

	
$("#stringBut").click(function (){
		let lastString=Player.Strings;	
			AddRandomBasicParticle();   		// add 1 to one with a probability
});


$('#protonsBut').click(function () {

		if (Player.Ups >= 2 && Player.Downs >= 1) {
  			Player.Protons++;
  			Player.Ups = Player.Ups-2;
  			Player.Downs = Player.Downs-1;
  			};

  		});			
		


$('#neutronsBut').click(function () {

		if(Player.Ups >= 1 && Player.Downs >= 2) {
		Player.Neutrons++;
		Player.Ups--;
		Player.Downs = Player.Downs - 2; 
		};
		});
															

$('#electronsBut').click(function () {

		if (Player.Strings > 0) {
		Player.Strings--;

		Player.Electrons = Player.Electrons + 0.09 } 
	});



$('#hydrogenBut').click(function () {
		if (Player.Electrons >= 1 && Player.Neutrons >= 1 && Player.Protons >= 1) {
				Player.Electrons--;
				Player.Neutrons--;
				Player.Protons--;
				Player.Hydrogen++; 

				};

		});

$('#heliumBut').click(function () {  // needed to add adding H2 randomly
	if (Player.Electrons >= 2 && Player.Protons >= 2 && Player.Neutrons >= 2 ) {
				Player.Electrons -= 2;
				Player.Neutrons -= 2;
				Player.Protons -=2 ;
				Player.Helium++; 
				};
			
		


});


$('#h2But').click(function () {  // needed to add adding H2 randomly
				
		if (Player.Hydrogen >= 2) {
				Player.Hydrogen = Player.Hydrogen - 2;
				Player.H2 = Player.H2 + 1;
				
				if (Player.H2  >= 2) {
					H2_Reward() // bad code

				};
				}
				});


$('#HydrogenStarBut').click(function() {
		
		if(Player.H2>50) {
			Player.H2 -= 50;
			Player.Hydrogen_Star++;
		if (Player.Hydrogen_Star>=1) {


			const boostRepeat = setInterval(function() {
			const boostValue = 2;

			Player.Strings += boostValue * (1/Player.Hydrogen_Star);
			}, 1000)
		}
	}
});

});

