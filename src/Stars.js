import { percentLeft } from './Functions';


export class Star {
    constructor (name, reward, structure, H2, helium, CO2){
        this.name = name;
        this.reward = reward;
        this.structure = structure;
        this.H2 = H2;
        this.helium = helium;
        this.CO2 = CO2;
    }


    cost(player){

        var clicks = 0;

        if (player[this.structure] >= this.H2) {

            player[this.name] += this.reward;
            player.H2 -= this.H2;
            player.Helium -= this.helium;
            player.CO2 -= this.CO2;

            clicks++;
        }

        if (clicks>0 && clicks<2) {
            setInterval ( () => player.Strings +=  (1/player.H2_Star) , 1000)
        }

        refreshNumbers(player);


    }



    autoGenerate(player){
        Cost();
        setInterval( function(){if ( percentLeft(player.H2, this.H2)>150 ){
            Cost()
        }}, 1000 );
    }
}


