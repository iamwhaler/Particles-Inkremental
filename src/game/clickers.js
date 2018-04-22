//import _ from 'lodash';

export const clickers = {

    strings_clicker: {
        name: 'Fluctuate string',
        locked: false,
        onClick: (state) => {
            state.strings++;
            return state;
        }

    },

    up_quarks_clicker: {
        name: 'Convert to Up quarks',
        locked: (state) => state.strings < 1,
        onClick: (state) => {
            if (state.strings>1){
                state.strings--;
                state.up_quarks++;
            }
            return state;
        }
    }
};