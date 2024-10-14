import styles from './Success.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Success = () => {
   const navigate = useNavigate();
   return (
      <div className={styles.success}>
         <div className={styles.image}>
            <img src="/pizza.png" alt="Пицца" />
         </div>
         <p className={styles.text}>Ваш заказ успешно оформлен!</p>
         <div className={styles.button}>
            <Button onClick={() => navigate('/')} appearence="big">
               Сделать новый
            </Button>
         </div>
      </div>
   );
};

export default Success;
