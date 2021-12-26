import './Movieframe.scss';
import Movieheader from './Movieheader';

const Movieframe = ({ children }) => {
    return(
        <div className='Movieframe'>
            <div className='app-title'>
                <Movieheader />
            </div>
            <div className='app-content'>{children}</div>
        </div>
    );
};

export default Movieframe;