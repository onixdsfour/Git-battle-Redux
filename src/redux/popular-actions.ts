import {AnyAction} from 'redux';

export const setSelectedLanguage = (payload: string): AnyAction => {   
    return {
        type: 'UPDATE_LANGUAGE',
        payload
    }
}

export const popularReposRequest = (): AnyAction => {   
    return {
        type: 'POPULAR_REPOS_REQUEST'        
    }
}

export const popularReposError = (payload: string): AnyAction => {        
    return {
        type: 'POPULAR_REPOS_ERROR',
        payload
    }
}

export const popularReposData = (payload): AnyAction => {   
    return {
        type: 'POPULAR_REPOS_DATA',
        payload
    }
}