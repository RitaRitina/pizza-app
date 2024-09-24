import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
   { isValid = true, className, ...props },
   ref,
) {
   return (
      <input
         ref={ref}
         {...props}
         className={cn(styles.input, className, {
            [styles.invalid]: isValid,
         })}
      />
   );
});

export default Input;
