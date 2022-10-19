
import { type } from 'os';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useLocation } from 'react-router-dom';
import PlayerInput from '../conmponents/PlayerInput';
import PlayerPreview from '../conmponents/preview';
import { setPlayerOne, setPlayerTwo,        
        setInputOne, setInputTwo
} from '../redux/battle-actions';
import { RootState } from '../redux/store';


const Battle: FC = (): JSX.Element => {

    const dispatch = useDispatch();
    const location = useLocation(); 
    const playerOne: string = useSelector((state: RootState) => state.battleReducer.playerOne);
    const playerOneImage: string = useSelector((state: RootState) => state.battleReducer.playerOneImage);
    const playerTwo: string = useSelector((state: RootState) => state.battleReducer.playerTwo);
    const playerTwoImage: string = useSelector((state: RootState) => state.battleReducer.playerTwoImage);

    const handleReset = (id: string): void => {
        if(id === 'playerOne'){
            dispatch(setPlayerOne(['','']));           
            dispatch(setInputOne(''));
        } else {
            dispatch(setPlayerTwo(['','']));            
            dispatch(setInputTwo(''));
        }
    }

    return (
        <div>
            <div className='row'>
                {!playerOne ?
                    <PlayerInput 
                        id ='playerOne'
                        label ='Player 1'                       
                    /> : 
                    <PlayerPreview 
                        userName={playerOne}
                        img ={playerOneImage}
                    >
                        <button className='reset' 
                            onClick={()=> handleReset('playerOne')}
                        >
                            Reset
                        </button>
                    </PlayerPreview>
                }
                {!playerTwo ?
                    <PlayerInput 
                        id='playerTwo'
                        label='Player 2'                        
                    /> : 
                    <PlayerPreview 
                        userName={playerTwo}
                        img ={playerTwoImage}
                    >
                        <button className='reset' 
                                onClick={()=> handleReset('playerTwo')}
                        >
                            Reset
                        </button>   
                    </PlayerPreview>
                }
            </div>
                {playerOneImage && playerTwoImage &&
                    <Link 
                        className="button" to={{
                            pathname : location.pathname + '/results',
                            search : `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                        }}
                    >
                        Battle
                    </Link>
                }
        </div>        
    );
}

export default Battle;

