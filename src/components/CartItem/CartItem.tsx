import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

const getExtendedCount = (count: number): string =>
   count < 9 ? `0${count}` : String(count);

const CartItem = (props: CartItemProps) => {
	const dispatch = useDispatch<AppDispath>();

   const decreaseQuantity = () => {
      dispatch(cartActions.remove(props.id));
   };

   const increaseQuantity = () => {
      dispatch(cartActions.add(props.id));
   };

   const deleteProduct = () => {
      dispatch(cartActions.delete(props.id));
   };

   return (
      <>
         <div className={styles.product}>
            <Link
               to={`/product/${props.id}`}
               className={styles.image}
               style={{
                  backgroundImage: `url('${props.image}')`,
                  backgroundPosition: 'center',
               }}
            ></Link>
            <div className={styles.info}>
               <p className={styles.productName}>{props.name}</p>
               <p className={styles.productPrice}>{props.price} ₽</p>
            </div>
            <div className={styles.buttons}>
               <button
                  className={styles.buttonMinus}
                  onClick={decreaseQuantity}
               >
                  <img src="/minus-icon.svg" alt='Удалить из корзины'/>
               </button>
               <span>{getExtendedCount(props.count)}</span>
               <button className={styles.buttonPlus} onClick={increaseQuantity}>
                  <img src="/plus-icon.svg" alt='Добавить в корзину'/>
               </button>
               <button
                  className={styles.buttonDelete}
                  onClick={deleteProduct}
               >
                  <img src="/delete-icon.svg" alt='Удалить все'/>
               </button>
            </div>
         </div>
      </>
   );
};

export default CartItem;
