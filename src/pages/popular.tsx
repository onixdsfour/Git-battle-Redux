
import SelectedLanguages from '../conmponents/SelectedLanguages';
import Repos from '../conmponents/Repos';
import {ThreeCircles} from  'react-loader-spinner';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { RootState } from '../redux/store';

const Popular: FC = (): JSX.Element => {       
    console.log('popular component') ;
    const loader = useSelector((state: RootState) => state.popularReducer.loading);

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
