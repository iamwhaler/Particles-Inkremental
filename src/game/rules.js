import _ from 'lodash';

export const rules = {

    games_rule: {
        onTick: (state) => {
            if (state.decks > 10 && _.random(1, 1000) === 1) {
                state.decks -= 10;
                state.games++;
            }
            return state;
        }
    },

    strings_rule: {
        onTick: (state) => {
            if (state.strings>0){
                state.strings--;

                let upProb = 33.3;
                let downProb = 66.6;
                let randomNumber = Math.random() * (100 - 1) + 1;

                if (randomNumber < upProb) { state.up_quarks += 1 }
                else if (randomNumber < downProb) { state.down_quarks += 1 }
                else { state.electrons += 1 }


            }
            return state;

        }
    }


};