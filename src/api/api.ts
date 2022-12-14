const Api = async (url: string, method:string = `GET`): Promise<any> => {
    try {
      
        let options = {
          method : method,
          headers : {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
        // if(obj) options.body = JSON.stringify(obj);
  
        let request = await fetch(url, options);
        let response = await request.json();
        
        return response;
  
    } catch (err) {
      console.log(err);  
      throw err;    
    }
  }
  
  export default Api ;
