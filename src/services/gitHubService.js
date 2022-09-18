import Api from "../api/api";


const GitHubService = async (language) => {
    const url = 'https://api.github.com/search/repositories?q=stars:>1+language:' 
                    + language + '&sort=stars&order=desc&type=Repositories'; 
     try {
        let fullData = await Api(url);
        let data = fullData.items;
        return data;
     } catch (err) {
        console.log(err);        
     }
}

export default GitHubService;

