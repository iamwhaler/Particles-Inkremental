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

let Hydrogen = new Atom("Hydrogen", 1, 1, 1, 1);
