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