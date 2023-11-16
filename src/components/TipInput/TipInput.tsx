import { FC, ReactNode, useId } from 'react';
import styles from './TipInput.module.scss';
import { TypeTipInputVariants } from '@/components/TipInput/TipInput.types';

interface ITipInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputRef?:  React.LegacyRef<HTMLInputElement>;
  error?: string;
  variant: TypeTipInputVariants;
  label: string | ReactNode;
}

const makeClass = (variant: TypeTipInputVariants, isError: boolean) => {
  let classes = `${styles.box__input}`;
  if (isError) {
    classes += ` ${styles.error}`;
  }
  switch (variant) {
    case 'bill':
      classes += ` ${styles.bill}`;
      return classes;
    case 'person':
      classes += ` ${styles.person}`;
      return classes;
    default:
      return classes;
  }
}

const TipInput: FC<ITipInputProps> = ({inputRef, label, error, variant, ...props}) => {
  const inputId = useId();
  return (
    <div className={styles.box}>
      <div className={styles.box__description}>
        <label htmlFor={inputId}>{label}</label> {error && <span>{error}</span>}
      </div>
        <input className={makeClass(variant, !!error)} ref={inputRef} {...props} id={inputId}/>
    </div>
  );
};

export default TipInput;
