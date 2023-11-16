import { JSX } from 'react';
import styles from './TipBox.module.scss'
import TipTotal from '@/components/TipTotal/TipTotal';
import TipForm from '@/components/TipForm/TipForm';

const TipBox = (): JSX.Element => {
  return (
    <div className={styles.tipbox}>
      <TipForm />
      <TipTotal />
    </div>
  );
};
export default TipBox;
