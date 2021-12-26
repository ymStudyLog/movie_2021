import './Arrowbar.scss';
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";

const onClick = () => {
    return(
        console.log("클릭됨")
        /* 클릭시 다음 영화 포스터를 로딩함 */
    );
};

const Arrowbar = ({ side }) => {
    return(
        <div className="arrow_container">
            <button className="arrow" onClick={onClick}>
                { side === "left" ? (
                <HiChevronDoubleLeft />
                ) : (
                <HiChevronDoubleRight />
                )
                }
            </button>
        </div>
    );
};

export default Arrowbar;