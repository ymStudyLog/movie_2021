import './Movieheader.scss';
import { RiMovie2Fill } from "react-icons/ri";

const Movieheader = () => {
    return(
        <div className='Movieheader'>
            <div className='logo'>
                <h3 className='logo-icon'>
                    <a href='index.html'><RiMovie2Fill className='icon__pic'/></a>
                </h3>
            </div>
            <div className='menubar'>
                <ul className='menu__list'>
                    <li><strong>홈</strong></li>
                    <li>
                        <a href="https://ymstudylog.github.io/" target="_blank" rel='noreferrer'>About Me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Movieheader;