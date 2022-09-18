
import SelectedLanguages from '../conmponents/SelectedLanguages';
import Repos from '../conmponents/Repos';
import {ThreeCircles} from  'react-loader-spinner';
import { useSelector } from 'react-redux';

const Popular = () => {       
    console.log('popular component') ;
    const loader = useSelector(state => state.popularReducer.loading);

    return (        
        <>            
            <SelectedLanguages/>
            {loader ?                 
                    <div className='loader'>
                        <ThreeCircles color="#d0021b"/>
                    </div>             
             : null} 
            <Repos />          
        </>
    );
}

export default Popular;
