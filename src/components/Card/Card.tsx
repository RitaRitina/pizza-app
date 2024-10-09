import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

const Card = (props: CardProps) => {
	const dispatch = useDispatch<AppDispath>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

   return (
      <Link to={`/product/${props.id}`} className={styles.link}>
			<div className={styles.card}>
				<div
					className={styles.head}
					style={{ backgroundImage: `url('${props.image}')` }}
				>
					<div className={styles.items}>
						<p className={styles.price}>
							{props.price}&nbsp;
							<span>₽</span>
						</p>
						<button className={styles.addToCart} type="button" onClick={add}>
							<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
						</button>
					</div>
					<div className={styles.rating}>
						{props.rating}&nbsp;
						<img
							className={styles.star}
							src="/star-icon.svg"
							alt="Рейтинг"
						/>
					</div>
				</div>
				<div className={styles.footer}>
					<h3 className={styles.productName}>{props.name}</h3>
					<p className={styles.productDescription}>{props.description}</p>
				</div>
			</div>
		</Link>
   );
};

export default Card;
