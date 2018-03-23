import { percentLeft } from './Functions';


export class Star {
    constructor (name, reward, H2, helium, CO2){
        this.name = name;
        this.reward = reward;
        this.H2 = H2;
        this.helium = helium;
        this.CO2 = CO2;
    }


    cost(player){

        var clicks = 0;

        if (Player.H2 >= this.H2 && Player.Helium >= this.helium && Player.CO2 >= this.CO2) {

            Player[this.name] += this.reward;
            Player.H2 -= this.H2;
            Player.Helium -= this.helium;
            Player.CO2 -= this.CO2;

            clicks++;
        }

        if (clicks>0 && clicks<2) {
            setInterval ( () => Player.Strings +=  (1/Player.H2_Star) , 1000)
        }

    }



    autoGenerate(player){
        Cost();
        setInterval( function(){if ( percentLeft(Player.H2, this.H2)>150 ){
            Cost()
        }}, 1000 );
    }
}


