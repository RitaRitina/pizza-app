import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

const Layout = () => {

   return (
      <div className={styles.layout}>
         <div className={styles.sidebar}>
            <div className={styles.user}>
               <img
                  className={styles['user-avatar']}
                  src="/avatar.png"
                  alt="Аватар"
               />
               <h2 className={styles['user-name']}>Name</h2>
               <p className={styles['user-email']}>Email</p>
            </div>
            <div className={styles.menu}>
               <NavLink
                  to="/"
                  className={({ isActive }) => cn(styles.link, {
                     [styles.active]: isActive,
                  })}
               >
                  <img src="/menu-icon.svg" alt="Меню" />
                  Меню
               </NavLink>
               <NavLink
                  to="/cart"
                  className={({ isActive }) => cn(styles.link, {
                     [styles.active]: isActive,
                  })}
               >
                  <img src="/cart-icon.svg" alt="Корзина" />
                  Корзина
               </NavLink>
            </div>
            <Button className={styles.exit} padding="small">
               <img src="/exit-icon.svg" alt="Выход" />
               Выйти
            </Button>
         </div>
         <div className={styles.content}>
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
