import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../modules/user";
import HeaderWrapper, { Spacer } from "../components/common/HeaderWrapper";
import Button from "../components/common/Button";
import myColor from "../lib/styles/myColor";
import { RiNetflixFill } from "react-icons/ri";

const UserPage = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <HeaderWrapper>
        <div
          style={{
            padding: "0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
          <RiNetflixFill color={myColor.mainRed[0]} size={40} />

          <div>
            <Link to="/">
              <Button red size={1} onClick={onLogout}>
                로그아웃
              </Button>
            </Link>
          </div>
        </div>
      </HeaderWrapper>
      <Spacer />

      <div>찜한 목록 보여주기</div>
    </div>
  );
};

export default UserPage;
