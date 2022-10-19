import {Action, ActionCreator} from 'redux';

export const setPlayerName: ActionCreator<Action> = (payload) => {   
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

export const setInputOne = (payload: string) => {   
    return {
        type: 'INPUT_PLAYER_ONE',
        payload
    }
}

export const setInputTwo = (payload: string) => {   
    return {
        type: 'INPUT_PLAYER_TWO',
        payload
    }
}

export const battleRequest = () => {   
    return {
        type: 'BATTLE_PLAYERS_REQUEST'        
    }
}

export const battleData = (payload: Array<{}>) => {   
    return {
        type: 'BATTLE_PLAYERS_DATA',
        payload
    }
}

export const battleError = (payload: any) => {   
    return {
        type: 'BATTLE_PLAYERS_ERROR',
        payload
    }
}
