import AuthTemplate from "../components/auth/AuthTemplate";
import RegisterForm from '../containers/RegisterForm';

/* 회원가입 페이지 */

const RegisterPage = () => {
    return(
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;