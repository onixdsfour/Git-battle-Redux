import {AnyAction} from 'redux'

export interface IPopularstate {
    selectedLanguage: string;
    loading: boolean;
    repos: {[key: string]: any}[];
    err: null | string;
}


const initialState: IPopularstate = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    err: null
};

export  const popularReducer = (state: IPopularstate = initialState, action: AnyAction): IPopularstate => {
    
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