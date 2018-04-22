
const default_state = {


    strings: 0,
    up_quarks: 0,
    down_quarks: 0,
    electrons: 0,

    strings_rule: 0,


    strings_clicker: 0,

    strings_miner: 0,




    game_speed: 1000,
    game_speed_multiplier: 1,
    game_paused: true,
    tick: 0
};

export const getDefaultState = () => {
    return JSON.parse(JSON.stringify(default_state));
};