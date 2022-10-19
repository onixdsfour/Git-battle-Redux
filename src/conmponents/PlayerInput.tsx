
import { FC } from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setInputTwo, setInputOne } from "../redux/battle-actions";
import { setPlayerOne, setPlayerTwo } from '../redux/battle-actions';
import { RootState } from '../redux/store'

interface Iprops {
    id: string;
    label: string;    
};

const PlayerInput: FC<Iprops> = (props): JSX.Element => {
   
    const dispatch =  useDispatch();
    const inputPlayerOne = useSelector((state: RootState) => state.battleReducer.inputPlayerOne);
    const inputPlayerTwo = useSelector((state: RootState) => state.battleReducer.inputPlayerTwo);
    const userName = (props.id === 'playerOne') ? inputPlayerOne : inputPlayerTwo;    

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if(props.id === 'playerOne'){
            dispatch(setPlayerOne([inputPlayerOne, 'https://github.com/' + inputPlayerOne + '.png?size=200']));            
        } else {
            dispatch(setPlayerTwo([inputPlayerTwo, 'https://github.com/' + inputPlayerTwo + '.png?size=200' ]));           
        }
    };
    
    return (
        <form className="column" onSubmit ={handleSubmit}>
            <label htmlFor="username">{props.label}</label>
            <input 
                id='username'
                type="text"
                value={userName} 
                placeholder='Github username'
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(props.id === 'playerOne' ? 
                                    setInputOne(e.target.value) : 
                                    setInputTwo(e.target.value) )}
            />
            <button 
                className="button"
                type="submit"
                disabled={!userName.length}
            >                    
                Submit
            </button>
        </form>       
    );
}

export default PlayerInput;
