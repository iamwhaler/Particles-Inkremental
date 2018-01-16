const Atom = (Protons, Neutrons, Electrons) => ({
	Cost: {
		Protons,
		Neutrons,
		Electrons,
	},
})

const substractCost = (Player, Atom) => {

	const Protons = Player.Protons - Atom.Cost.Protons
	const Neutrons =
	const Electrons = 

	return {
		...Player,
		Protons: Protons,
		Neutrons: Neutrons,
		Electrons: Electrons,
	}
}