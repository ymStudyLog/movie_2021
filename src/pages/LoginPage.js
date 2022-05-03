import AuthTemplate from "../Components/auth/AuthTemplate";
import AuthForm from "../Components/auth/AuthForm";

const LoginPage = () => {
    return(
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default LoginPage;