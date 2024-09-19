import styles from './LoginForm.module.css';
import Input from '../Input/Input';

const LoginForm = () => {
   return (
      <form>
         <div className={styles['form-row']}>
            <label htmlFor="input-email">Ваш email</label>
            <Input id="input-email" type='password' placeholder="Email"></Input>
         </div>
         <div className={styles['form-row']}>
            <label htmlFor="input-password">Ваш пароль</label>
            <Input id="input-password" type='password' placeholder="Email"></Input>
         </div>
      </form>
   );
};

export default LoginForm;
