export default 

$(document).ready(function(){
	$("#selectUniverse").modal('toggle');

  	$('[data-toggle="tooltip"]').tooltip();
});

const Universe = class Universe {
	constructor (Strings, Speed, Handcap, Atoms) {
		this.Strings = Strings;
		this.Speed = Speed;
		this.Handcap = Handcap; 
		this.Atoms = Atoms;

	};

	StringsReward() {
		console.log("+ " + this.Strings + " " + "Strings");
		Player.Strings += this.Strings;
	};

	getReward() {
		this.ticker = setInterval( () => this.StringsReward(), 1000);

	};
};



const Flesh  = new Universe(2.5, 10, 2.5, 5);
const Variable = new Universe(5, 2.5, 2.5, 10);

const Distressed = new Universe(1.5, 2.5, 2.5, 0);

const Launched = new Universe(5, 5, 10, 0);



