const PlayerClass = function() {

	this.Strings = 0;	
	this.Ups = 0;
	this.Downs = 0;

// Structure particles

	this.Energy = 0;
	this.Protons = 0;
	this.Neutrons = 0;
	this.Electrons = 0;

// Atom nucleus

	this.Hydrogen = 0;
	this.Helium = 0;
	this.Carbon = 0;
	this.Oxygen = 0;
	this.Nitrogen = 0;

// Molecules T1

	this.H2 = 0;
	this.He2 = 0;
	this.N2 = 0;
	this.O2 = 0;

// Stars T1
	this.Hydrogen_Star = 0;


// Molecules T2

	this.CH4 = 0;
	this.H20 = 0;
	this.NH3 = 0;

	this.Chaos = 0;

};

var Player = new PlayerClass();

var getState = {
	StringsCost: '[' + 1 + ' ' + 'click]',
	StringsInfo: 'String starts to fulcturate and create particles',

	UpsCost: '[1 String]',
	UpsInfo: 'The up quark is the lightest of all quarks. Along with the down quark, it forms the neutrons and protons of atomic nuclei.',

	DownsCost: '[1 String]',
	DownsInfo: '',

	ElectronsCost: '[' + 1 + ' ' + 'String]',

	ProtonsCost: '[2U 1D]',

	NeutronsCost: '[1U 2D]',

	HydrogenCost: '[1E 1P 1N]',

	HeliumCost: '[2E 2P 2N]',

	CarbonCost: '[6E 6P 6N]',

	OxygenCost: '[8E 8P 8(9)N]'
};