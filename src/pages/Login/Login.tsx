import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Title from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';
import { LoginResponce } from '../../interfaces/authInterface';

export interface LoginForm {
	email: {
		value: string
	},
	password: {
		value: string
	}
}

const Login = () => {
const [ error, setError ] = useState<string | null>();
const navigate = useNavigate();

   const submit =  async (e: FormEvent) => {
      e.preventDefault();
		setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
      await sendLogin(email.value, password.value);
   };

	const sendLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post<LoginResponce>(`${PREFIX}/auth/login`, {
				email,
				password,
			});
			localStorage.setItem('jwt', data.access_token);
			navigate('/');
		} catch (e) {
			if(e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};

   return (
      <div className={styles.login}>
         <Title className={styles.title}>Вход</Title>
			{error && <div className={styles.error}>{error}</div>}
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
