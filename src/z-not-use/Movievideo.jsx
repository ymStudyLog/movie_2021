import './Movievideo.scss';
import video from './Ocean.mp4';

const Movievideo = () => {
    return(
        <div className='Movievideo'>
            <div className='video'>
                <video src={video}
                        width="746px"
                        height="100%" 
                        autoPlay muted loop>
                </video>
            </div>
        </div>
    );
};

export default Movievideo;