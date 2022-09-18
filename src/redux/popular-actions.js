export const setSelectedLanguage = (payload) => {   
    return {
        type: 'UPDATE_LANGUAGE',
        payload
    }
}

export const popularReposRequest = (payload) => {   
    return {
        type: 'POPULAR_REPOS_REQUEST'        
    }
}

export const popularReposError = (payload) => {        
    return {
        type: 'POPULAR_REPOS_ERROR',
        payload
    }
}

export const popularReposData = (payload) => {   
    return {
        type: 'POPULAR_REPOS_DATA',
        payload
    }
}