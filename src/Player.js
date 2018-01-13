import React from 'react';
import PlayerStats from './player.json';
import GameInfo from './gameInfo.json';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Player: PlayerStats,
      boostStrings: 0,
    };
    this.stringHandler = this.stringHandler.bind(this);
    this.protonHandler = this.protonHandler.bind(this);
    this.neutronHandler = this.neutronHandler.bind(this);
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
    this.setState({ ...state, boostStrings: stringsModifier.toFixed(3) });

    lowerRange++;
  };

  getProbability(min, max) {
    return Math.random() * (max - min) + min;
  };
  stringHandler() {
    const { Strings: currStrings } = this.state.Player;
    const Strings = Strings + 1;
    if (Strings - currStrings > 0) {
      AddRandomBasicParticle(); // add 1 to one with a probability
    };
    this.setState({
      ...this.state,
      Player: {
        ...this.state.Player,
        Strings,
      }
    });
  }
  protonHandler() {
    const { Ups: currUps, Downs: currDowns, Protons: currProtons } = this.state.Player;
    if (Ups >= 2 && Downs >= 1) {
      const Protons = currProtons + 1;
      const Ups = currUps - 2;
      const Downs = currDowns - 1;
      this.setState({
        ...this.state,
        Player: {
          ...this.state.Player,
          Protons,
          Ups,
          Downs,
        }
      })
    };
  }
  neutronHandler() {
    if (Player.Ups >= 1 && Player.Downs >= 2) {
      Player.Neutrons++;
      Player.Ups--;
      Player.Downs = Player.Downs - 2;
    };
  }
  electronHandler() {
    if (Player.Strings > 0) {
      Player.Strings--;
      Player.Electrons = Player.Electrons + 0.09
    }
  }
  hydrogenHandler() {
    if (Player.Electrons >= 1 && Player.Neutrons >= 1 && Player.Protons >= 1) {
      Player.Electrons--;
      Player.Neutrons--;
      Player.Protons--;
      Player.Hydrogen++;
    };
  }
  heliumHandler() {
    if (Player.Electrons >= 2 && Player.Protons >= 2 && Player.Neutrons >= 2) {
      Player.Electrons -= 2;
      Player.Neutrons -= 2;
      Player.Protons -= 2;
      Player.Helium++;
    };
  }
  h2Handler() {
    if (Player.Hydrogen >= 2) {
      Player.Hydrogen = Player.Hydrogen - 2;
      Player.H2 = Player.H2 + 1;

      if (Player.H2 >= 2) {
        H2_Reward() // bad code
      };
    }
  }
  hydrogenStarHandler() {
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
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="col-sm-2">
            <div className="divStrings">

              <button className="btn btn-block btn-default" onClick={this.stringHandler}>
              
                Strings: <a id="counterStrings">{this.state.Player.Strings}</a>
                <br />
                <div id="StringsCost"></div> 
                <div id="boostStrings">({this.state.boostStrings})/sec</div>
              
              </button>

            </div>
          </div>

          <div className="col-sm-2">
            <div className="divAtoms">

                <button className="btn btn-block btn-default" onClick={this.hydrogenHandler}>
                  Hydrogen: <a id="counterHydrogen">{this.state.Player.Hydrogen}</a>
                  <br />
                  <div id="HydrogenCost">{GameInfo.HydrogenCost}</div>
                </button>

            </div>
          </div>

          <div className="col-sm-2">
            <div className="divActions">

              <button className="btn btn-block btn-default">
                Synth H2 <a id="counterH2">{this.state.Player.H2}</a>
              </button>

            </div>
          </div>

          <div className="col-sm-2">
            <div className="divStars">

                <button className="btn btn-block btn-primary" onClick={this.hydrogenStarHandler}> 
                  Hydrogen Star: <a id="counterHydrogenStar">{this.state.Player.Hydrogen_Star}</a>
                </button>

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-2">
            <div className="divUps">

              <button className="btn btn-block btn-default">
                Up Quarks: <a id="counterUps">{this.state.Player.Ups}</a>
                <br />
                <div id="UpsCost">{GameInfo.UpsCost}</div>
                <div id="boostUps"></div>
              </button>

            </div>
          </div>

          <div className="col-sm-2">
            <div className="divAtoms">

                <button className="btn btn-block btn-default" onClick={this.heliumHandler}> 
                  Helium: <a id="counterHelium">{this.state.Player.Helium}</a>
                  <br />
                  <div id="HeliumCost">{GameInfo.HeliumCost}</div>
                </button>

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-2">
            <div className="divDowns">

              <button className="btn btn-block btn-default"> 
                Down Quarks: <a id="counterDowns">{this.state.Player.Downs}</a>
                <br />
                <div id ="DownsCost">{GameInfo.DownsCost}</div>
                <div id="boostDowns"></div> 
              </button>

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-2">
            <div className="divElectrons">

              <button className="btn btn-block btn-default" onClick={this.electronHandler}>
                Electrons: <a id="counterElectrons">{this.state.Player.Electrons}</a>
                <div id="ElectronsCost">{GameInfo.ElectronsCost}</div>
              </button>

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-2">
            <div className="divProtons">

              <button className="btn btn-block btn-default" onClick={this.protonHandler}> 
                Protons: <a id="counterProtons">{this.state.Player.Protons}</a>
                <br />
                <div id="ProtonsCost">{GameInfo.ProtonsCost}</div>
              </button>

            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-sm-2">
            <div className="divNeutrons">

              <button className="btn btn-block btn-default" onClick={this.neutronHandler}> 
                Neutrons: <a id="counterNeutrons">{this.state.Player.Neutrons}</a>
                <br />
                <div id="NeutronsCost">{GameInfo.NeutronsCost}</div>
              </button>

            </div>
          </div>

        </div>
      </div>
    );
  }
}