import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import PlayerPreview from "./preview";
import {ThreeCircles} from  'react-loader-spinner';
import { useDispatch, useSelector } from "react-redux";
import { battleResult } from "../redux/battle_thunk";
import { RootState } from "../redux/store";



const Results = () => {

    const location = useLocation();
    const dispatch = useDispatch();
   
    const winner = useSelector((state: RootState) => state.battleReducer.winner);
    const loser = useSelector((state: RootState) => state.battleReducer.loser);
    const loader = useSelector((state: RootState) => state.battleReducer.loader);
    const error = useSelector((state: RootState) => state.battleReducer.error);
    
    useEffect( () => {
        const searchParams = new URLSearchParams(location.search);
        const playerOne: string |null = searchParams.get('playerOne');
        const playerTwo: string |null = searchParams.get('playerTwo');

        if (playerOne && playerTwo) {
            dispatch(battleResult([playerOne, playerTwo]));           }
            
    }, [])

    return (
            
        <div className="row">  
            {error? <h2>Something went wrong, try to reload page </h2> : undefined}
            {loader ?                 
                    <div className='loader'>
                        <ThreeCircles color="#d0021b"/>
                    </div>             
             : null} 
            <div className="column">
                <h2 style={{color: 'orange'}} >Winner</h2>
                {winner ?
                <PlayerPreview  userName = {winner.profile.login}
                        img={winner.profile.avatar_url}                
                >
                    <ul className="users_data">              
                        <li>Name: {winner.profile.name}</li>
                        <li>Location: {winner.profile.location}</li>
                        <li>Company: {winner.profile.company}</li>
                        <li>Followers: {winner.profile.followers}</li>
                        <li>Folowing:{winner.profile.following}</li>
                        <li>Public Repos: {winner.profile.public_repos}</li>
                        <li>Blog: {winner.profile.blog}</li>
                    </ul>   
                    <p className="scores" style={{textAlign: "center"}}>Score: {winner.score}</p>
                </PlayerPreview> 
                : undefined}          
            </div>                      
            <div className="column">
                <h2 style={{color: 'grey'}}>Loser</h2>
                {loser? 
                <PlayerPreview  userName = {loser.profile.login}
                        img={loser.profile.avatar_url}                
                > 
                    
                    <ul className="users_data">              
                        <li>Name: {loser.profile.name}</li>
                        <li>Location: {loser.profile.location}</li>
                        <li>Company: {loser.profile.company}</li>
                        <li>Followers: {loser.profile.followers}</li>
                        <li>Folowing:{loser.profile.following}</li>
                        <li>Public Repos: {loser.profile.public_repos}</li>
                        <li>Blog: {loser.profile.blog}</li>
                    </ul>     
                    <p className="scores" style={{textAlign: "center"}}>Score: {loser.score}</p> 
                    </PlayerPreview>   
                    : undefined}   
            </div>
        </div>
        
    )
}
export default Results;