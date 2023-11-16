import { FC, JSX } from 'react';
import styles from './Button.module.scss'
import { TypeButtonVariants } from '@/components/Button/Button.types';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  variant: TypeButtonVariants
}

const createVariantStyle = (variant: TypeButtonVariants) => {
  switch (variant) {
    case 'dark':
      return `${styles.button} ${styles['button--dark']}`
    case 'light':
      return `${styles.button} ${styles['button--light']}`
    case 'lightest':
      return `${styles.button} ${styles['button--lightest']}`
    default:
      return styles.button;
  }
}

const Button: FC<IButtonProps> = ({children, variant, ...props}): JSX.Element => {
  const classname = createVariantStyle(variant);
  return (
    <button {...props} className={classname}>
      {children}
    </button>
  );
};
export default Button;
