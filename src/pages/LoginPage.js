import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/LoginForm";

/* 로그인 페이지 */

const LoginPage = () => {
    return(
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default LoginPage;