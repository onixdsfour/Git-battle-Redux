const initialState = {
    playerName: '',
    playerOne : '',
    playerTwo : '',
    playerOneImage : '',
    playerTwoImage : '',
    inputPlayerOne : '',
    inputPlayerTwo : '',
    winner : null,
    loser : null,
    error : false,
    loader : false
};

export  const battleReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_PLAYER_NAME':
            return {
                ...state,
                playerName : action.payload
            };

        case 'SET_PLAYER_ONE':
            return {
                ...state,
                playerOne : action.payload[0],
                playerOneImage: action.payload[1]
            };

        case 'SET_PLAYER_TWO':
            return {
                ...state,
                playerTwo : action.payload[0],
                playerTwoImage: action.payload[1]
            };
                    
        case 'INPUT_PLAYER_ONE':
            return {
                ...state,
                inputPlayerOne : action.payload
            };
    
        case 'INPUT_PLAYER_TWO':
            return {
                ...state,
                inputPlayerTwo : action.payload
            };

        // case 'SET_WINNER':
        //     return {
        //         ...state,
        //         winner : action.payload
        //     };

        // case 'SET_LOSER':
        //     return {
        //         ...state,
        //         loser : action.payload
        //     };

        case 'BATTLE_PLAYERS_REQUEST':
            return {
                ...state,
                loader: true,
                winner: null,
                loser: null              
            };

        case 'BATTLE_PLAYERS_DATA' :
            return {
                ...state,
                loader: false,
                winner: action.payload[0],
                loser: action.payload[1]
            };

        case 'BATTLE_PLAYERS_ERROR' : 
            return {
                ...state,
                err: action.payload,
                loader: false
            };

        default : return state;
    }   
}