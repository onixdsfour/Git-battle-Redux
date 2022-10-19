import {battleRequest, battleData, battleError } from "./battle-actions";
import battle from "../services/gitHubUsers";
import { AppDispatch } from "./store"; 

export const battleResult = ([playerOne, playerTwo]: Array<string>) => (dispatch: AppDispatch) => {

dispatch(battleRequest());

(async ()=> {
            try{
                let data: Promise<any> = await battle([playerOne, playerTwo]);
                dispatch(battleData(data));
            } catch (err: any) {
                console.log(err)
                dispatch(battleError(err));
             }              
})();
}