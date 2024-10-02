import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

const AuthLayout = () => {
   return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src='/logo.svg' alt='Логотип'/>
			</div>
			<div className={styles.content}>
				<Outlet/>
			</div>
		</div>
	);
};

export default AuthLayout;
