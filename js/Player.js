var Player = { 

// Basic particles

	Strings: 0,	
	Ups: 0,
	Downs: 0,

// Structure particles

	Energy: 0, 
	Protons: 0,
	Neutrons: 0,
	Electrons: 0,

// Atom nucleus

	Hydrogen: {
		Counter: 0,
		Cost: '',
		About: '',	
		},
   
	Helium: 0,
	Carbon: 0,
	Oxygen: 0,
	Nitrogen: 0,

// T1 Atoms

	H2: 0,
	He2: 0,
	N2: 0,
	O2: 0,

// T2 atoms

	CH4: 0,
	H20: 0,
	NH3: 0,
	CO2: 0, 

}

Player.Hydrogen.alerting = function () {
		console.log(Player.Hydrogen.Counter)
	}



