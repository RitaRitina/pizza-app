import styles from './MenuList.module.css';
import Card from '../../../components/Card/Card';
import { MenuListProps } from './MenuList.props';

export function MenuList({products}: MenuListProps) {
   return (
      <div className={styles.productList}>
         {products.map((p) => {
            return (
               <Card
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  description={p.ingredients.join(', ')}
                  image={p.image}
                  price={p.price}
                  rating={p.rating}
               />
            );
         })}
      </div>
   );
}
