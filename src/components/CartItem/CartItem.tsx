import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';
import { CartItemProps } from './CartItem.props';

const getExtendedCount = (count: number): string =>
   count < 9 ? `0${count}` : String(count);

const CartItem = (props: CartItemProps) => {
   const decreaseQuantity = () => {
      console.log(props.count);
   };

   const increaseQuantity = () => {
      console.log(props.count);
   };

   const deleteProduct = () => {
      console.log(props.count);
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
                  <img src="/minus-icon.svg" />
               </button>
               <span>{getExtendedCount(props.count)}</span>
               <button className={styles.buttonPlus} onClick={increaseQuantity}>
                  <img src="/plus-icon.svg" />
               </button>
               <button
                  className={styles.buttonDelete}
                  onClick={deleteProduct}
               >
                  <img src="/delete-icon.svg" />
               </button>
            </div>
         </div>
      </>
   );
};

export default CartItem;
