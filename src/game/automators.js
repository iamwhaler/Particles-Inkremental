import _ from 'lodash';

export const automators = {
    games_miner: {
        name: 'Games Miner',
        locked: (state) => state.games < 10,
        onClick: (state) => {
            state.games -= 10;
            state.games_miner++;
            return state;
        },
        onTick: (state) => {
            state.games += _.random(0, state.games_miner);
            return state;
        }
    }
};