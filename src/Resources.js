export default 
//String

class String {
		constructor (Name, Strings) {
			this.Name = Name;
			this.Strings = Strings;
		}

		Cost(Name){
			AddRandomBasicParticle(1, 1, 0.09);
			return false;
		}

		ConvertString() {
			if (Player.Strings>1) {
				AddRandomBasicParticle(1, 1, 0.09);
			}
		}
};

const Strings = new String("Strings", 1);
let StringConversion = setInterval ( () => Strings.ConvertString(), 1000);


//Particles

class Particle {
		constructor (Name, Reward, Ups, Downs) {
			this.Name = Name;
			this.Reward = Reward;
			this.Ups = Ups;
			this.Downs = Downs;
		}

		Cost(Name, Reward, Ups, Downs) {
			if (Player.Ups >= this.Ups && Player.Downs >= this.Downs) {
				Player[this.Name] += this.Reward;
				Player.Ups -= this.Ups;
				Player.Downs -= this.Downs;
			}
		}
};

const Proton = new Particle("Protons", 1, 2, 1);
const Neutron = new Particle("Neutrons", 1, 1, 2);


// Atoms

class Atom {
		constructor (Name, Reward, Protons, Electrons, Neutrons) {
			this.Name = Name;
			this.Reward = Reward;
			this.Protons = Protons;
			this.Electrons = Electrons;
			this.Neutrons = Neutrons;
		}

		Cost(Name, Reward, Protons, Electrons, Neutrons) {
			if (Player.Electrons >= this.Electrons && Player.Neutrons >= this.Neutrons && Player.Protons >= this.Protons) {
				Player[this.Name] += this.Reward;
				Player.Protons -= this.Protons;
				Player.Electrons -= this.Electrons;
				Player.Neutrons -= this.Neutrons;
			}
		}

};

const Hydrogen = new Atom("Hydrogen", 1, 1, 1, 1);
const Helium = new Atom("Helium", 1, 2, 2, 2);

// Simple molecules

class Molecule_T1 { // nado dumat'
		constructor (Name, Reward, ) {
			this.Name = Name;
			this.Reward = Reward;
			this.Hydrogen = Hydrogen;
			this.Carbon = Carbon;
			this.Oxygen = Oxygen;
		}

		Cost(Name, Reward, Protons, Electrons, Neutrons) {
			if (Player.Electrons >= this.Electrons && Player.Neutrons >= this.Neutrons && Player.Protons >= this.Protons) {
				Player[this.Name] += this.Reward;
				Player.Protons -= this.Protons;
				Player.Electrons -= this.Electrons;
				Player.Neutrons -= this.Neutrons;
			}
		}

};


class Organic_Molecule {
		constructor (Name, Reward, Carbon, Hydrogen, Oxygen) {
			this.Name = Name;
			this.Reward = Reward;
			this.Carbon = Carbon;
			this.Hydrogen = Hydrogen;
			this.Oxygen = Oxygen;
		}


}





