import Api from "../api/api";

const id: string = 'YOUR_CLIENT_ID';
const sec: string = 'YOUR_SECRET_ID';
const params: string = '?client_id=' + id + '?client_secret=' + sec ;



const getProfile = async (userName: string): Promise<any> => {
    const url = 'https://api.github.com/users/' + userName + params; 
    let userData = await Api(url);    
    return userData;
}


const getRepos = async (userName: string): Promise<any> => {
    const url = 'https://api.github.com/users/' + userName + '/repos' + params; 
    let ReposData = await Api(url);
    
    return ReposData;
}


const getStarCount = (repos) => {
    return repos.reduce((count: number, repo):number => {
        return count + repo.stargazers_count
    },0)
}

const calculateScores = (profile, repos):number => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return (followers * 3) + totalStars;
}

const UserData = async (userName: string): Promise<any> => {
    console.log(userName)
    const [profile, repos] = await Promise.all([getProfile(userName), getRepos(userName)]);
       
    return {
        profile,
        score : calculateScores(profile, repos)
    }

}

const sortPlayers = (players) => {
    return players.sort((a,b) => b.score - a.score)

}


const battle = async (players: string[]): Promise<any> => {
    let battleData = await Promise.all(players.map(UserData));
    return sortPlayers(battleData);
}

export default battle;