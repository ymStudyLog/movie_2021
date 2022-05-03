import AuthTemplate from "../Components/auth/AuthTemplate";
import AuthForm from "../Components/auth/AuthForm";

const RegisterPage = () => {
    return(
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage;