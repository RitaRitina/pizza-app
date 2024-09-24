import { useParams } from 'react-router-dom';
import styles from './Product.module.css';

const Product = () => {
   const { id } = useParams();
   return <div>Product - {id}</div>;
};

export default Product;
