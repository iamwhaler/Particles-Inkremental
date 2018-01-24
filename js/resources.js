const Atom = (Protons, Neutrons, Electrons) => ({
	Cost: {
		Protons,
		Neutrons,
		Electrons,
	},

})

const substractCost = (Player, Atom) => {

	const Protons = Player.Protons - Atom.Cost.Protons
	const Neutrons = Player.Neutrons - Atom.Cost.Neutrons
	const Electrons = Player.Electrons - Atom.Cost.Electrons

	return {
		...Player,
		Protons: Protons,
		Neutrons: Neutrons,
		Electrons: Electrons,
	}
}

