import { 
        popularReposData, 
        popularReposError, 
        popularReposRequest
} from "./popular-actions";

import GitHubService from "../services/gitHubService";
import { ThunkAction } from 'redux-thunk';
import { AppDispatch, RootState } from "./store";
import { AnyAction } from 'redux';
import {Action, ActionCreator, Dispatch} from 'redux';

import { IPopularstate } from "./popuar-reducers";




// export const getPopularRepos = (language: string) => (dispatch: AppDispatch ) => {
    
//     dispatch(popularReposRequest());
    
//     (async ()=> {
//                 try{
//                     let data = await GitHubService(language);
//                     dispatch(popularReposData(data));
//                 } catch (err: any) {
//                     console.log(err)
//                     dispatch(popularReposError(err));
//                  }              
//     })();
// }


// const asyncThinkAction: ActionCreator<
//   ThunkAction<Promise<Action>, IState, void>
// > = () => {
//   return async (dispatch: Dispatch<IState>): Promise<Action> => {
//     try {
//       const text = await Api.call();
//       return dispatch({
//         type: SET_TEXT,
//         text
//       });
//     } catch (e) {}
//   };
// };

export const getPopularRepos: ActionCreator<ThunkAction<Promise<Action>, IPopularstate, void>> = (language: string) => (dispatch: AppDispatch ) => {
    
    dispatch(popularReposRequest());
    
    (async ()=> {
                try{
                    let data = await GitHubService(language);
                    dispatch(popularReposData(data));
                } catch (err: any) {
                    console.log(err)
                    dispatch(popularReposError(err));
                 }              
    })();
}
