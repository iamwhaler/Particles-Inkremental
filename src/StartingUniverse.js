
export class Universe {
    constructor (Strings, Speed, Handcap, Atoms) {
        this.Strings = Strings;
        this.Speed = Speed;
        this.Handcap = Handcap;
        this.Atoms = Atoms;

    };

    StringsReward(player) {
        console.log("+ " + this.Strings + " " + "Strings");
        player.Strings += this.Strings;
    };

    getReward(player) {
        this.ticker = setInterval( () => this.StringsReward(player), 1000);
    };
}




