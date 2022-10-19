import {FC} from 'react';
import { Link } from 'react-router-dom';

const Home: FC = (): JSX.Element => {
    return (
        <div className='home-container'>          
            <Link className='button' to='/battle'>Battle</Link>
        </div>
    );
}

export default Home;
