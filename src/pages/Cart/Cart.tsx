import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import Title from '../../components/Heading/Heading';
import styles from './Cart.module.css';
import { RootState } from '../../store/store';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';

const Cart = () => {
	const [cartPproducts, setCartProducts] = useState<Product[]>();
	const items = useSelector((s: RootState) => s.cart.items);
	useEffect(() => {
		loadALLItems();
	}, [items]);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadALLItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProducts(res);
	};

   return (
      <div className={styles.container}>
         <Title >Корзина</Title>
         {items.map((i) => {
            const product = cartPproducts?.find(p => p.id === i.id);
				if(!product) {
					return;
				}
				return <CartItem key={product.id} count={i.count} {...product}></CartItem>;
         })}
      </div>
   );
};

export default Cart;
