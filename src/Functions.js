
export let getState = {
    StringsCost: '[' + 1 + ' ' + 'click]',
    StringsInfo: 'String starts to fluctuate and create particles',

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
}

function getProbability(min, max) {
    return Math.random() * (max - min) + min;
}


export let addRandomBasicParticle = function(player, mod1, mod2, mod3) {

    let upProb = 33.3;
    let downProb = 66.6;
    let electronProb = 99.9;
    let randomNumber = getProbability(1, 100);

    if (randomNumber < upProb) { player.Ups += mod1 }
    else if (randomNumber < downProb) { player.Downs += mod2 }
    else { player.Electrons += mod3 }

}





export let refreshNumbers = function(player) {
    //console.warn(player)

    document.getElementById("counterStrings").innerHTML = +player.Strings.toFixed(2);
    document.getElementById("counterUps").innerHTML = +player.Ups.toFixed(2);
    document.getElementById("counterDowns").innerHTML = +player.Downs.toFixed(2);

    document.getElementById("counterProtons").innerHTML = +player.Protons.toFixed(2);
    document.getElementById("counterNeutrons").innerHTML = +player.Neutrons.toFixed(2);
    document.getElementById("counterElectrons").innerHTML = +player.Electrons.toFixed(2);
    document.getElementById("counterHydrogen").innerHTML = +player.Hydrogen.toFixed(2);
    document.getElementById("counterHelium").innerHTML = +player.Helium.toFixed(2);

    document.getElementById("counterH2").innerHTML = +player.H2.toFixed(2);

    document.getElementById("counterH2_Star").innerHTML = +player.H2_Star.toFixed(2);
}


export let percentLeft = function(resource, finalAmount) {
    let currentPercent = (resource * 100) / finalAmount;
    return currentPercent;
}


export let getInfo = function(player, star) {
   $('#StringsCost').html(getState.StringsCost)
   $('#stringsInfo').html(getState.StringsInfo)


   $('#UpsCost').html(getState.UpsCost)
   $('#UpsInfo').html(getState.UpsInfo)


   $('#DownsCost').html(getState.DownsCost)

   $('#ElectronsCost').html(getState.ElectronsCost)
   $('#ProtonsCost').html(getState.ProtonsCost)
   $('#NeutronsCost').html(getState.NeutronsCost)

   $('#HydrogenCost').html(getState.HydrogenCost)
   $('#HeliumCost').html(getState.HeliumCost)

   $('#H2_Star_Cost').html(player.H2 + "/" + star.H2)
   $('#H2_Star_Percent_Left').html( percentLeft( player.H2, star.H2 ) + "%" );
}
