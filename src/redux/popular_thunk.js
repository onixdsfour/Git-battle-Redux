import { 
        popularReposData, 
        popularReposError, 
        popularReposRequest
} from "./popular-actions";

import GitHubService from "../services/gitHubService";


export const getPopularRepos = (language) => (dispatch) => {
    
    dispatch(popularReposRequest());
    
    (async ()=> {
                try{
                    let data = await GitHubService(language);
                    dispatch(popularReposData(data));
                } catch (err) {
                    console.log(err)
                    dispatch(popularReposError(err));
                 }              
    })();
}