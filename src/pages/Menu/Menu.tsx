import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { MenuList } from './MenuList/MenuList';
import styles from './Menu.module.css';

export interface Search {
   text: {
      value: string;
   };
}

const Menu = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | undefined>();
   const [filter, setFilter] = useState<string>();

   useEffect(() => {
      getMenu(filter);
   }, [filter]);

   const getMenu = async (name?: string) => {
      try {
         setIsLoading(true);
         const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
            params: {
               name,
            },
         });
         setProducts(data);
         setIsLoading(false);
      } catch (error) {
         if (error instanceof AxiosError) {
            setError(error.message);
         }
         setIsLoading(false);
         return;
      }
   };

   const changeValues = (e: ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
   };

   return (
      <>
         <div className={styles.header}>
            <Heading>Меню</Heading>
            <div className={styles.search}>
               <button className={styles.button}>
                  <img src="/search-icon.svg" />
               </button>
               <Input
                  onChange={changeValues}
                  className={styles['input-search']}
                  type="text"
                  id="input"
                  placeholder="Введите блюдо или состав"
               />
            </div>
         </div>
         {error && <div>{error}</div>}
         {!isLoading && <MenuList products={products} />}
         {isLoading && <p>Загружаем продукты...</p>}
      </>
   );
};

export default Menu;
