import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import { Suspense } from 'react';

const ProductBody = () => {
   const data = useLoaderData() as { data: Product };
   return (
      <>
         <Suspense fallback={<>Загружаем...</>}>
            <Await resolve={data.data}>
               {({ data }: { data: Product }) => (
                  <>
                     <div className={styles.product}>Product - {data.name}</div>
                  </>
               )}
            </Await>
         </Suspense>
      </>
   );
};

export default ProductBody;
