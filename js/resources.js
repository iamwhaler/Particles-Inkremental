
const Atom = ( Protons, Neutrons, Electrons) => ({
		Cost: {
			Protons,
			Neutrons,
			Electrons,

		},

		About: ""
	}
});

const subtractCost = (Player, Atom) => {

	const Protons = Player.Protons - Atom.Cost.Protons;
	const Protons = Player.Protons - Atom.Cost.Protons;
	return {
		...Player,
		Protons,
		Neutrons,
		Electrons
	}


}

const Hydrogen = Atom(1, 1, 1)



console.log(Hydrogen.Protons)



Player.Hydrogen -= Hydrogen.Cost;

