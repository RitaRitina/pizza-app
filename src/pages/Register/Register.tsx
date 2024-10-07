import { FormEvent, useEffect } from 'react';
import Button from '../../components/Button/Button';
import Title from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import styles from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export interface RegisterForm {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
   name: {
      value: string;
   };
}

const Register = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispath>();
   const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

   // useEffect(() => {
   // 	if (jwt) {
   // 		navigate('/');
   // 	}
   // }, [jwt, navigate]);

   // const submit = async (e: FormEvent) => {
   // 	e.preventDefault();
   // 	dispatch(userActions.clearRegisterError());
   // 	const target = e.target as typeof e.target & RegisterForm;
   // 	const { email, password, name } = target;
   // 	dispatch(register({ email: email.value, password: password.value, name: name.value }));
   // };

   useEffect(() => {
      if (jwt) {
         navigate('/');
      }
   }, [jwt, navigate]);

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      dispatch(userActions.clearRegisterError());
      const target = e.target as typeof e.target & RegisterForm;
      const { email, password, name } = target;
      dispatch(
         register({
            email: email.value,
            password: password.value,
            name: name.value,
         })
      );
   };

   return (
      <div className={styles.register}>
         <Title className={styles.title}>Регистрация</Title>
         {registerErrorMessage && (
            <div className={styles.error}>{registerErrorMessage}</div>
         )}
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
            <div className={styles.input}>
               <label htmlFor="name">Вашу имя</label>
               <Input name="name" id="name" type="text" placeholder="Имя" />
            </div>
            <Button className={styles.button} appearence="big">
               зарегистрироваться
            </Button>
         </form>
         <div className={styles.footer}>
            <div>Есть аккаунт?</div>
            <Link to="/auth/login">Войти</Link>
         </div>
      </div>
   );
};

export default Register;
