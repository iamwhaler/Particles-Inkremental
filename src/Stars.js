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


        if (player[this.structure] >= this.H2) {
            let clicks = 0;
            player[this.name] += this.reward;
            player.H2 -= this.H2;
            player.Helium -= this.helium;
            player.CO2 -= this.CO2;

            clicks++;
        }

        
        refreshNumbers(player);


    }



    autoGenerate(player){
        if(player.H2_Star>0 && player.H2_Star<2) {
         setInterval(function(){ player.Strings += (0.13 * player.H2_Star)} , 1000);
        }
    }
}


