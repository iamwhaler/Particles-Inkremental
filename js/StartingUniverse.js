setInterval(refreshNumbers, 200);

const gameInfo = {
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
};

const Player = {

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
};

function refreshNumbers() {
  document.getElementById("counterStrings").innerHTML = +Player.Strings.toFixed(2);
  document.getElementById("counterUps").innerHTML = +Player.Ups.toFixed(2);
  document.getElementById("counterDowns").innerHTML = +Player.Downs.toFixed(2);

  document.getElementById("counterProtons").innerHTML = +Player.Protons.toFixed(2);
  document.getElementById("counterNeutrons").innerHTML = +Player.Neutrons.toFixed(2);
  document.getElementById("counterElectrons").innerHTML = +Player.Electrons.toFixed(2);
  document.getElementById("counterHydrogen").innerHTML = +Player.Hydrogen.toFixed(2);
  document.getElementById("counterHelium").innerHTML = +Player.Helium.toFixed(2);

  document.getElementById("counterH2").innerHTML = +Player.H2.toFixed(2);

  document.getElementById("counterHydrogenStar").innerHTML = +Player.Hydrogen_Star.toFixed(2);
}

function AddRandomBasicParticle() {
  let _modifier1 = 1;
  let _modifier2 = 1;
  let _modifier3 = 0.1;

  let upProb = 33.3;
  let downProb = 66.6;
  let electronProb = 99.9;
  let randomNumber = getProbability(1, 100);

  if (randomNumber < upProb) {
    Player.Ups = Player.Ups + _modifier1
  } else if (randomNumber < downProb) {
    Player.Downs = Player.Downs + _modifier2
  } else {
    Player.Electrons = Player.Electrons + _modifier3
  };

};

//Molecules T1

function H2_Reward() {
  let lowerRange = 0.1;
  let stringsModifier = getProbability(lowerRange, 1);

  Player.Strings = Player.Strings - (Player.Strings * stringsModifier);

  AddRandomBasicParticle();
  $('#boostStrings').html("(" + stringsModifier.toFixed(3) + "/sec)");

  lowerRange++;
};


function getProbability(min, max) {
  return Math.random() * (max - min) + min;
};

$('button').addClass('btn btn-block btn-default');

$(document).ready(function () {

  $('#StringsCost').html(gameInfo.StringsCost)
  $('#UpsCost').html(gameInfo.UpsCost)
  $('#DownsCost').html(gameInfo.DownsCost)

  $('#ElectronsCost').html(gameInfo.ElectronsCost)
  $('#ProtonsCost').html(gameInfo.ProtonsCost)
  $('#NeutronsCost').html(gameInfo.NeutronsCost)

  $('#HydrogenCost').html(gameInfo.HydrogenCost)
  $('#HeliumCost').html(gameInfo.HeliumCost)

});


$(document).ready(function () {

  $("#stringBut").click(function () {
    let lastString = Player.Strings;
    Player.Strings++;
    if (Player.Strings - lastString > 0) {
      AddRandomBasicParticle(); // add 1 to one with a probability
    };
  });

  $('#protonsBut').click(function () {
    if (Player.Ups >= 2 && Player.Downs >= 1) {
      Player.Protons++;
      Player.Ups = Player.Ups - 2;
      Player.Downs = Player.Downs - 1;
    };
  });

  $('#neutronsBut').click(function () {
    if (Player.Ups >= 1 && Player.Downs >= 2) {
      Player.Neutrons++;
      Player.Ups--;
      Player.Downs = Player.Downs - 2;
    };
  });


  $('#electronsBut').click(function () {
    if (Player.Strings > 0) {
      Player.Strings--;
      Player.Electrons = Player.Electrons + 0.09
    }
  });



  $('#hydrogenBut').click(function () {
    if (Player.Electrons >= 1 && Player.Neutrons >= 1 && Player.Protons >= 1) {
      Player.Electrons--;
      Player.Neutrons--;
      Player.Protons--;
      Player.Hydrogen++;
    };
  });

  $('#heliumBut').click(function () { // needed to add adding H2 randomly
    if (Player.Electrons >= 2 && Player.Protons >= 2 && Player.Neutrons >= 2) {
      Player.Electrons -= 2;
      Player.Neutrons -= 2;
      Player.Protons -= 2;
      Player.Helium++;
    };
  });


  $('#h2But').click(function () { // needed to add adding H2 randomly
    if (Player.Hydrogen >= 2) {
      Player.Hydrogen = Player.Hydrogen - 2;
      Player.H2 = Player.H2 + 1;

      if (Player.H2 >= 2) {
        H2_Reward() // bad code
      };
    }
  });


  $('#HydrogenStarBut').click(function () {
    if (Player.H2 > 50) {
      Player.H2 -= 50;
      Player.Hydrogen_Star++;
      if (Player.Hydrogen_Star >= 1) {
        const boostRepeat = setInterval(function () {
          const boostValue = 2;

          Player.Strings += boostValue * (1 / Player.Hydrogen_Star);
        }, 1000)
      }
    }
  });

});