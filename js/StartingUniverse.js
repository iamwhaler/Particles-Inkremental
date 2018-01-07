
let Universe = class Universe {
	constructor (strings, speed, handcap, atoms) {
		this.strings = strings;
		this.speed = speed;
		this.handcap = handcap; 
		this.atoms = atoms;

	}

	verbalExplanation() {
		if (this.strings > 1) {}
	}
} 


const Fast  = new Universe(2.5, 10, 2.5, 5)
const Slow = new Universe(5, 2.5, 2.5, 10)
const Automated = new Universe(15, 2.5, 2.5, 0)
const Easier = new Universe(5, 5, 10, 0)

console.log(Fast);