import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import styles from './Menu.module.css';

const Menu = () => {
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
         <Card
            id={1}
            title={'Наслаждение'}
            description={'Салями, руккола, помидоры, оливки'}
            image={'/product-demo.png'}
            price={300}
            rating={4.5}
         />
      </>
   );
};

export default Menu;
