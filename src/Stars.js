export default 

class Star { 
	constructor (Name, Reward, H2, Helium, CO2) {
			this.Name = Name;
			this.Reward = Reward;
			this.H2 = H2;
			this.Helium = Helium;
			this.CO2 = CO2;
			
		}

		Cost(Name, Reward, H2, Helium, CO2) {

		var clicks = 0;

		if (Player.H2 >= this.H2 && Player.Helium >= this.Helium && Player.CO2 >= this.CO2) { 
				
				Player[this.Name] += this.Reward;
				Player.H2 -= this.H2;
				Player.Helium -= this.Helium;
				Player.CO2 -= this.CO2;

				clicks++;
		};

			if (clicks>0 && clicks<2) {

				setInterval ( () => Player.Strings +=  (1/Player.H2_Star) , 1000)
			};

		}


		AutoGenerate(Name, Reward, H2, Helium, CO2, Cost) {
				Cost();
				setInterval( function(){if ( percentLeft(Player.H2, this.H2)>150 ){
					Cost()
				}}, 1000 )
				
		}
};



const H2_Star = new Star("H2_Star", 1, 50, 0, 0);