import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {                
    const [debounceValue, setDebounceValue] = useState(value);    

    useEffect(() => {            
        const DelayTimeOut = setTimeout(()=> setDebounceValue(value), delay);    
        return ()=> {clearTimeout(DelayTimeOut)};

    },[value,delay]);
    
    return debounceValue;
};

export default useDebounce;