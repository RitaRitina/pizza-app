import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Title from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export interface LoginForm {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
}

const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispath>();
   const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

   useEffect(() => {
      if (jwt) {
         navigate('/');
      }
   }, [jwt, navigate]);

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      dispatch(userActions.clearLoginError());
      const target = e.target as typeof e.target & LoginForm;
      const { email, password } = target;
      await sendLogin(email.value, password.value);
   };

   const sendLogin = async (email: string, password: string) => {
      dispatch(login({ email, password }));
   };

   return (
      <div className={styles.login}>
         <Title className={styles.title}>Вход</Title>
         {loginErrorMessage && <div className={styles.error}>{loginErrorMessage}</div>}
         <form className={styles.form} onSubmit={submit}>
            <div className={styles.input}>
               <label htmlFor="email">Ваш email</label>
               <Input name="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.input}>
               <label htmlFor="password">Ваш пароль</label>
               <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Пароль"
               />
            </div>
            <Button className={styles.button} appearence="big">
               вход
            </Button>
         </form>
         <div className={styles.footer}>
            <div>Нет аккаунта?</div>
            <Link to="/auth/register">Зарегистрироваться</Link>
         </div>
      </div>
   );
};

export default Login;
