
var Player = { 

// Elemental particles

	Strings: 0,	
	Ups: 0,
	Downs: 0,

// Structure particles

	Energy: 0, 
	Protons: 0,
	Neutrons: 0,
	Electrons: 0,

// Atom nucleus

	Hydrogen: 0,
   
	Helium: 0,
	Carbon: 0,
	Oxygen: 0,
	Nitrogen: 0,

// Molecules T1

	H2: 0,
	He2: 0,
	N2: 0,
	O2: 0,

// Stars T1
	Hydrogen_Star: 0,


// Molecules T2

	CH4: 0,
	H20: 0,
	NH3: 0,


	Chaos: 0
}




var getState = {
	StringsCost: '[' + 1 + ' ' + 'click]',
	StringsInfo: 'String starts to fulcturate and create particles',

	UpsCost: '[1 String]',
	UpsInfo: '',

	DownsCost: '[1 String]',
	DownsInfo: '',

	ElectronsCost: '[' + 1 + ' ' + 'String]',

	ProtonsCost: '[2U 1D]',

	NeutronsCost: '[1U 2D]',

	HydrogenCost: '[1E 1P 1N]',

	HeliumCost: '[2E 2P 2N]',

	CarbonCost: '[6E 6P 6N]',

	OxygenCost: '[8E 8P 8(9)N]'
}


