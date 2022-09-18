export const setPlayerName = (payload) => {   
    return {
        type: 'SET_PLAYER_NAME',
        payload
    }
}

export const setPlayerOne = (payload) => {   
    return {
        type: 'SET_PLAYER_ONE',
        payload
    }
}

export const setPlayerTwo = (payload) => {   
    return {
        type: 'SET_PLAYER_TWO',
        payload
    }
}

// export const setPlayerOneImage = (payload) => {   
//     return {
//         type: 'SET_PLAYER_ONE_IMAGE',
//         payload
//     }
// }

// export const setPlayerTwoImage = (payload) => {   
//     return {
//         type: 'SET_PLAYER_TWO_IMAGE',
//         payload
//     }
// }

export const setInputOne = (payload) => {   
    return {
        type: 'INPUT_PLAYER_ONE',
        payload
    }
}

export const setInputTwo = (payload) => {   
    return {
        type: 'INPUT_PLAYER_TWO',
        payload
    }
}



export const battleRequest = (payload) => {   
    return {
        type: 'BATTLE_PLAYERS_REQUEST',
        payload
    }
}

export const battleData = (payload) => {   
    return {
        type: 'BATTLE_PLAYERS_DATA',
        payload
    }
}

export const battleError = (payload) => {   
    return {
        type: 'BATTLE_PLAYERS_ERROR',
        payload
    }
}
