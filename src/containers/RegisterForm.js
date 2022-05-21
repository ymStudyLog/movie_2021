import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, initializeForm, register } from "../modules/auth";
import AuthForm from "../components/auth/AuthForm";
import { check } from '../modules/user';
import { withRouter } from "../../node_modules/react-router-dom/index";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeInput({
        form: "register",
        key: name,
        value: value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    //오류 처리 1. 인풋창 중 한군데라도 비었을때
    if([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    //오류 처리 2. 비밀번호 불일치시 
    if(password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeInput({ form: 'register', key: 'password', value: '' }));
      dispatch(changeInput({ form: 'register', key: 'passwordConfirm', value: '' }));
      return;
    }
    dispatch(register({ username, password }));
  };

  //컴포넌트 렌더링시 form 초기화(form.username 값이 있으면 초기화 하지 않음)
  useEffect(() => {
    if(!form.username) {
      dispatch(initializeForm("register"));
    }
  }, [dispatch, form.username]);

  useEffect(()=>{
    if(authError) {
      //오류 처리 3. 계정이 이미 존재할 때
      if(authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      //기타 오류 처리
      setError('회원가입 실패');
      return;
    }
    if(auth){
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  
  useEffect(()=>{
    if(user) {
      console.log('check API 성공');
      console.log(user);
      history.push('/login');
    }
  },[history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
