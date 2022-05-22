import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "../../node_modules/react-router-dom/index";
import { changeInput, initializeForm, login } from "../modules/auth";
import AuthForm from "../components/auth/AuthForm";
import { check } from '../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeInput({
        form: "login",
        key: name,
        value: value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  //컴포넌트 렌더링시 form 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(()=>{
    if(authError) {
      console.log('오류 발생', authError);
      setError('로그인 실패 다시 시도하세요.');
      return;
    }
    if(auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(()=>{
    if(user) {
      history.push('/movie');
      try{
        localStorage.setItem('user', JSON.stringify(user));
      } catch(e) {
        console.log('localStorage 오류');
      }
    }
  },[history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
