import React from 'react';
import Player from './player.json';
import GameInfo from './gameInfo.json';

class Player extends React.Component {
  constructor(props) {
    this.state = {
      Player,
    };
  }

  AddRandomBasicParticle() {
    let _modifier1 = 1;
    let _modifier2 = 1;
    let _modifier3 = 0.1;

    let upProb = 33.3;
    let downProb = 66.6;
    let electronProb = 99.9;
    let randomNumber = getProbability(1, 100);
    const { Player } = this.state;

    if (randomNumber < upProb) {
      const Ups = Player.Ups + _modifier1;
      this.setState({
        ...this.state,
        Player: {
          ...this.state.Player,
          Ups,
        }
      });
    } else if (randomNumber < downProb) {
      const Downs = Player.Downs + _modifier2;
      this.setState({
        ...this.state,
        Player: {
          ...this.state.Player,
          Downs,
        }
      });
    } else {
      const Electrons = Player.Electrons + _modifier3
      this.setState({
        ...this.state,
        Player: {
          ...this.state.Player,
          Electrons,
        }
      });
    };

  };

  H2Reward() {
    let lowerRange = 0.1;
    let stringsModifier = getProbability(lowerRange, 1);

    Player.Strings = Player.Strings - (Player.Strings * stringsModifier);

    this.AddRandomBasicParticle();
    $('#boostStrings').html("(" + stringsModifier.toFixed(3) + "/sec)");

    lowerRange++;
  };

  getProbability(min, max) {
    return Math.random() * (max - min) + min;
  };

  render() {
    return (
      <div class="row">

        <div class="col-sm-2">
          <div class="divStrings">

            <button id="stringBut">
            
              Strings: <a id="counterStrings">{this.state.Player.Strings}</a>
              <br />
              <div id="StringsCost"></div> 
              <div id="boostStrings"></div>
            
            </button>

          </div>
        </div>

        <div class="col-sm-2">
          <div class="divAtoms">

              <button id="hydrogenBut">
                Hydrogen: <a id="counterHydrogen">{this.state.Player.Hydrogen}</a>
                <br />
                <div id="HydrogenCost">{GameInfo.HydrogenCost}</div>
              </button>

          </div>
        </div>

        <div class="col-sm-2">
          <div class="divActions">

            <button id="h2But">
              Synth H2 <a id="counterH2">{this.state.Player.H2}</a>
            </button>

          </div>
        </div>

        <div class="col-sm-2">
          <div class="divStars">

              <button id="HydrogenStarBut" class="btn btn-block btn-primary"> 
                Hydrogen Star: <a id="counterHydrogenStar">{this.state.Player.Hydrogen_Star}</a>
              </button>

          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-2">
          <div class="divUps">

            <button id="upsBut">
              Up Quarks: <a id="counterUps">{this.state.Player.Ups}</a>
              <br />
              <div id="UpsCost">{GameInfo.UpsCost}</div>
              <div id="boostUps"></div>
            </button>

          </div>
        </div>

        <div class="col-sm-2">
          <div class="divAtoms">

              <button id="heliumBut"> 
                Helium: <a id="counterHelium">{this.state.Player.Helium}</a>
                <br />
                <div id="HeliumCost">{GameInfo.HeliumCost}</div>
              </button>

          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-2">
          <div class="divDowns">

            <button id="downsBut"> 
              Down Quarks: <a id="counterDowns">{this.state.Player.Downs}</a>
              <br />
              <div id ="DownsCost">{GameInfo.DownsCost}</div>
              <div id="boostDowns"></div> 
            </button>

          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-2">
          <div class="divElectrons">

            <button id="electronsBut">
              Electrons: <a id="counterElectrons">{this.state.Player.Electrons}</a>
              <div id="ElectronsCost">{GameInfo.ElectronsCost}</div>
            </button>

          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-2">
          <div class="divProtons">

            <button id="protonsBut"> 
              Protons: <a id="counterProtons">{this.state.Player.Protons}</a>
              <br />
              <div id="ProtonsCost">{GameInfo.ProtonsCost}</div>
            </button>

          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-2">
          <div class="divNeutrons">

            <button id="neutronsBut" class="btn btn-block btn-default"> 
              Neutrons: <a id="counterNeutrons">{this.state.Player.Neutrons}</a>
              <br />
              <div id="NeutronsCost">{GameInfo.NeutronsCost}</div>
            </button>

          </div>
        </div>

      </div>
    );
  }
}