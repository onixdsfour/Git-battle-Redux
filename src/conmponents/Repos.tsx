import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Repos: FC = (): JSX.Element => {

    const repos: {[key: string]: any}[] = useSelector((state: RootState): {[key: string]: any}[] => state.popularReducer.repos);
    
    return (        
        <ul className='popular-list'>
            {repos.length ? repos.map((repo, index: number) => (
                <li key={repo.id} className='popular-list-item'>
                    <div className='popular-rank'>#{index+1}</div>
                    <ul className='space-list-items'>
                        <li>
                            <img className='avatar' src={repo.owner.avatar_url} alt="Avatar" />
                        </li>
                        <li>
                            <a href={repo.html_url} target ='_blank'  rel="noopener noreferrer">{repo.name}  </a>
                        </li>
                        <li>
                            {repo.owner.login}
                        </li>
                        <li>
                            {repo.stargazers_count} 
                        </li>
                    </ul>
                </li>
            )): null}
            
        </ul>
    )
}

export default Repos;