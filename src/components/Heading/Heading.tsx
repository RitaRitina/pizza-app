import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';
import cn from 'classnames';

const Title = ({ children, className, ...props }: HeadingProps) => {
   return <h1 {...props} className={cn(styles.h1, className)}>{children}</h1>;
};

export default Title;
