import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

function Button({
   children,
   className,
   appearence = 'small',
	padding,
   ...props
}: ButtonProps) {
   return (
      <button
         {...props}
         className={cn(styles.button, styles.accent, className, {
            [styles.small]: appearence === 'small',
            [styles.big]: appearence === 'big',
				[styles['padding-small']]: padding === 'small',
         })}
      >
         {children}
      </button>
   );
}

export default Button;
