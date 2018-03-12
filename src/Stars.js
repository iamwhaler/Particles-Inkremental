
import { percentLeft } from './Functions';


export class Star {
    constructor (Name, Reward, H2, Helium, CO2) {
        this.Name = Name;
        this.Reward = Reward;
        this.H2 = H2;
        this.Helium = Helium;
        this.CO2 = CO2;
    }


    Cost(Player, Name, Reward, H2, Helium, CO2) { // FIXME: unused arguments

        var clicks = 0;

        if (Player.H2 >= this.H2 && Player.Helium >= this.Helium && Player.CO2 >= this.CO2) {

            Player[this.Name] += this.Reward;
            Player.H2 -= this.H2;
            Player.Helium -= this.Helium;
            Player.CO2 -= this.CO2;

            clicks++;
        }

        if (clicks>0 && clicks<2) {
            setInterval ( () => Player.Strings +=  (1/Player.H2_Star) , 1000)
        }

    }



    AutoGenerate(Player, Name, Reward, H2, Helium, CO2, Cost) { // FIXME: unused arguments
        Cost();
        setInterval( function(){if ( percentLeft(Player.H2, this.H2)>150 ){
            Cost()
        }}, 1000 );
    }
};


