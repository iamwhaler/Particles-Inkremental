/// interesting effects for randomization - calling funcation with an array as an argument http://learn.javascript.ru/call-apply
import $ from 'jquery';


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
    return Math.random() * (max - min) + min
}


export let checkPrevious = function(player) {
       while(player[this.name]<2) { 
              player.Strings += (0.13 * player.H2_Star);
        }
      }
 

export let addRandomBasicParticle = function(player, mod1, mod2, mod3) {

    let upProb = 33.3;
    let downProb = 66.6;
    let randomNumber = getProbability(1, 100);

    if (randomNumber < upProb) { player.Ups += mod1 }
    else if (randomNumber < downProb) { player.Downs += mod2 }
    else { player.Electrons += mod3 }

}


export let drawElement = function (element_id, text) {
        document.getElementById(element_id).innerHTML = text;
 
};



export let refreshNumbers = function(player) {

    drawElement("counterStrings", player.Strings.toFixed(2));
    drawElement("counterUps", player.Ups.toFixed(2));
    drawElement("counterDowns", player.Downs.toFixed(2));
    
    drawElement("counterProtons", player.Protons.toFixed(2));
    drawElement("counterNeutrons", player.Neutrons.toFixed(2));
    drawElement("counterElectrons", player.Electrons.toFixed(2));
    
    drawElement("counterHydrogen", player.Hydrogen.toFixed(2));
    drawElement("counterHelium", player.Helium.toFixed(2));

    drawElement("counterH2", player.H2.toFixed(2));
    drawElement("counterH2_Star", player.H2_Star.toFixed(2));


    drawElement("assets-info", `
      `);

    drawElement("stringsInfo", `
        <div class = "col-lg-12 infoBar">${getState.StringsInfo}</div>
        <div class = "line-wrapper">
          <div class = "line">
          </div>
        </div>
        
        <div class = "row">
          <div class = "col-sm-6 infoBar">Click</div>
          <div class = "col-sm-6 infoBar">${1}</div>  
        </div>
      `)

    drawElement("UpsInfo", `
        <div class = "col-lg-12 infoBar">${getState.UpsInfo}</div>
        <div class = "line-wrapper">
          <div class = "line">
          </div>
        </div>
        
        <div class = "row">
          <div class = "col-sm-6 infoBar">String</div>
          <div class = "col-sm-6 infoBar">${1}</div>
        </div>
     `)



}


export let percentLeft = function(resource, finalAmount) {
    let currentPercent = (resource * 100) / finalAmount;
    return currentPercent;
}


export let getInfo = function(player, star) {
//   $('#StringsCost').html(getState.StringsCost)


//   $('#UpsCost').html(getState.UpsCost)
//   $('#UpsInfo').html(getState.UpsInfo)


//   $('#DownsCost').html(getState.DownsCost)

//   $('#ElectronsCost').html(getState.ElectronsCost)
//   $('#ProtonsCost').html(getState.ProtonsCost)
//   $('#NeutronsCost').html(getState.NeutronsCost)

//   $('#HydrogenCost').html(getState.HydrogenCost)
//   $('#HeliumCost').html(getState.HeliumCost)

   $('#H2_Star_Cost').html(player.H2 + "/" + star.H2)
   $('#H2_Star_Percent_Left').html( percentLeft( player.H2, star.H2 ) + "%" );
}
