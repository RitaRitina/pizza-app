import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Title from '../../components/Heading/Heading';
import styles from './Cart.module.css';
import { RootState } from '../../store/store';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const  DELIVERY_PRICE = 169;

const Cart = () => {
   const [cartPproducts, setCartProducts] = useState<Product[]>();
   const items = useSelector((s: RootState) => s.cart.items);

   console.log(cartPproducts);

   useEffect(() => {
      loadALLItems();
   }, [items]);

   const getItem = async (id: number) => {
      const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
      return data;
   };

   const loadALLItems = async () => {
      const res = await Promise.all(items.map((i) => getItem(i.id)));
      setCartProducts(res);
   };

   const getPrice = () => {
      const prices: number[] = [];

      items.forEach((i) => {
         const product = cartPproducts?.find((p) => {
            if (p.id === i.id) {
               return p;
            }
         });

         if (product) {
            prices.push(product.price * i.count);
         }
      });

      return prices.reduce((acc, p) => acc + p, 0);
   };

   return (
      <div className={styles.container}>
         <Title>Корзина</Title>
         {items.map((i) => {
            const product = cartPproducts?.find((p) => p.id === i.id);
            if (!product) {
               return;
            }
            return (
               <CartItem
                  key={product.id}
                  count={i.count}
                  {...product}
               ></CartItem>
            );
         })}
         <div className={styles.promoCode}>
            <Input
               maxLength={20}
               className={styles.input}
               placeholder="Промокод"
            />
            <Button className={styles.button}>Применить</Button>
         </div>
         <div className={styles.info}>
            <div className={styles.meaning}>
               <span className={styles.text}>Итог</span>
               <span className={styles.price}>
                  {getPrice()}
                  <span>₽</span>
               </span>
            </div>
            <div className={styles.meaning}>
               <span className={styles.text}>Доставка</span>
               <span className={styles.price}>
                  {DELIVERY_PRICE}
                  <span>₽</span>
               </span>
            </div>
            <div className={styles.meaning}>
               <span className={styles.text}>
                  Итог<span>({items.length})</span>
               </span>
               <span className={styles.price}>
                  {getPrice() + DELIVERY_PRICE}
                  <span>₽</span>
               </span>
            </div>
         </div>
         <div className={styles.orderButton}>
            <Button onClick={} appearence="big">Оформить</Button>
         </div>
      </div>
   );
};

export default Cart;
