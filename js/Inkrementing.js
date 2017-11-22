$('button').addClass('btn btn-default');


$(document).ready(function () {
	$('#StringsCost').html( getState.StringsCost )
	$('#UpsCost').html ( getState.UpsCost )
	$('#DownsCost').html( getState.DownsCost )

});


$(document).ready(function () {

 window.setInterval(refreshNumbers, 200); 




	
$("#stringBut").click(function (){
		lastString=Player.Strings;	
		Player.Strings++;
		if( Player.Strings - lastString > 0) {
			AddRandomBasicParticle();   		// add 1 to one with a probability
		};
		
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
	
		Player.Electrons = Player.Electrons + 0.09 });



$('#hydrogenBut').click(function () {
		if (Player.Electrons >= 1 && Player.Neutrons >= 1 && Player.Protons >= 1) {
				Player.Electrons--;
				Player.Neutrons--;
				Player.Protons--;
				Player.Hydrogen++; 

				};

		});

$('#h2But').click(function () {  // needed to add adding H2 randomly
				
		if (Player.Hydrogen >= 2) {
				Player.Hydrogen = Player.Hydrogen - 2;
				Player.H2 = Player.H2 + 1;
				if (Player.H2 >= 2) {
				 setInterval ("H2_Reward()", 1000);
				;

				}
				};

		});

$('#h2_star_button').click(function() {

	if(Player.H2>20) {
		Player.Hydrogen_Star++
	}

	Hydrogen_Star_Reward();
});

});

