
$(document).ready(function(){
	$("#selectUniverse").modal('toggle');

  	$('[data-toggle="tooltip"]').tooltip();
});

const Universe = class Universe {
	constructor (strings, speed, handcap, atoms) {
		this.strings = strings;
		this.speed = speed;
		this.handcap = handcap; 
		this.atoms = atoms;

	}

	tick() {
		console.log(this.strings)
		Player.Strings += (this.strings);
	}

	getReward() {
		this.ticker = setInterval( () => this.tick(), 1000);

	}
} 



const Flesh  = new Universe(2.5, 10, 2.5, 5)
const Variable = new Universe(5, 2.5, 2.5, 10)
const Singularity = new Universe(15, 2.5, 2.5, 0)
const Launched = new Universe(5, 5, 10, 0)


