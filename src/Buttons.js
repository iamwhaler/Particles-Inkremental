export default


$('button').addClass('btn btn-light');


$(document).ready(function () {

	
$("#stringBut").click( () => Strings.Cost() );


$('#protonsBut').click( () => Proton.Cost() );			
		


$('#neutronsBut').click( () => Neutron.Cost() );
															

$('#electronsBut').click(function () {

		if (Player.Strings > 0) {
		Player.Strings--;
		Player.Electrons += 0.09 } 
	});



$('#hydrogenBut').click( () => Hydrogen.Cost() );


$('#heliumBut').click( () => Helium.Cost() );


let multiplier = 1; 

$('#h2But').click(function () {  // needed to add adding H2 randomly
				
		if (Player.Hydrogen >= 2) {
				Player.Hydrogen = Player.Hydrogen - 2;
				Player.H2 = Player.H2 + 1;
				
				if (Player.H2  >= 2) {
					let value1 = 1 * multiplier;
					let value2 = 1 * multiplier;
					let value3 = 0.09 * multiplier;

					setInterval( () => { AddRandomBasicParticle( value1 , value2 , value3); return false } , 1000);

					multiplier *= 1.5

				};
				}
				});


$("#H2_StarBut").click( () => H2_Star.Cost() );

});


