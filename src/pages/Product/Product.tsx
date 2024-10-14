import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import { Suspense } from 'react';
import Title from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

const ProductBody = () => {
   const data = useLoaderData() as { data: Product };
   return (
      <>
         <Suspense fallback={<>Загружаем...</>}>
            <Await resolve={data.data}>
               {({ data }: { data: Product }) => (
                  <div className={styles.productBody}>
                     <div className={styles.header}>
                        <div className={styles.image}>
                           <img src="/array.png" alt="Вернуться в меню" />
                        </div>
                        <Title className={styles.title}>Наслаждение</Title>
                        <Button className={styles.button}>
                           <img src="/cart-button-icon.svg" />В корзину
                        </Button>
                     </div>
                     <div className={styles.content}>
                        <div
                           className={styles.productImage}
                           style={{ backgroundImage: `url('${data.image}')` }}
                        ></div>
                        <div className={styles.info}>
                           <div className={styles.item}>
                              <p>Цена</p>
                              <p className={styles.price}>
                                 {data.price}
                                 <span>₽</span>
                              </p>
                           </div>
                           <div className={styles.item}>
                              <p>Рейтинг</p>
                              <p className={styles.rating}>
                                 {data.rating}
                                 <img src="/star-icon.svg" />
                              </p>
                           </div>
                           <div className={styles.compound}>
                              <p>Состав:</p>
                              <ul>
                                 {data.ingredients.map((ingredient) => {
                                    return <li>{ingredient}</li>;
                                 })}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </Await>
         </Suspense>
      </>
   );
};

export default ProductBody;
