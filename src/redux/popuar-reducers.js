const initialState = {
    selectedLanguage: 'All',
    loading: false,
    repos : [],
    err: null
};

export  const popularReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'POPULAR_REPOS_REQUEST':
            return {
                ...state,
                loading: true,
                repos: [],
                err: null
            }
        case 'POPULAR_REPOS_DATA' :
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case 'POPULAR_REPOS_ERROR' : 
            return {
                ...state,
                err: action.payload,
                loading: false
            }    

        case 'UPDATE_LANGUAGE' :          
            return {
                ...state,
                selectedLanguage : action.payload
            }

        default : return state;
    }   
}