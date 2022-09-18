import {battleRequest, battleData, battleError } from "./battle-actions";
import battle from "../services/gitHubUsers";


export const battleResult = ([playerOne, playerTwo]) => (dispatch) => {

dispatch(battleRequest());

(async ()=> {
            try{
                let data = await battle([playerOne, playerTwo]);
                dispatch(battleData(data));
            } catch (err) {
                console.log(err)
                dispatch(battleError(err));
             }              
})();
}