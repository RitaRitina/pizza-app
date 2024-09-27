import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { MenuList } from './MenuList/MenuList';
import styles from './Menu.module.css';

const Menu = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | undefined>();

   const getMenu = async () => {
      try {
         setIsLoading(true);
         await new Promise<void>((resolve) => {
            setTimeout(() => {
               resolve();
            }, 2000);
         });
         const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
         setProducts(data);
         setIsLoading(false);
      } catch (error) {
         if (error instanceof AxiosError) {
            setError(error.message);
         }
         setIsLoading(false);
         return;
      }

      // try {
      //    const res = await fetch(`${PREFIX}/products`);
      //    if (!res.ok) {
      //       return;
      //    }
      //    const data = (await res.json()) as Product[];
      //    setProducts(data);
      // } catch (error) {
      //    console.error(error);
      //    return;
      // }
   };

   useEffect(() => {
      getMenu();
   }, []);

   return (
      <>
         <div className={styles.header}>
            <Heading>Меню</Heading>
            <div className={styles.search}>
               <img src="/search-icon.svg" />
               <Input
                  className={styles['input-search']}
                  type="text"
                  id="input"
                  placeholder="Введите блюдо или состав"
               />
            </div>
         </div>
			{error && <div>{error}</div>}
         {!isLoading && <MenuList products={products}/>}
         {isLoading && <p>Загружаем продукты...</p>}
      </>
   );
};

export default Menu;
