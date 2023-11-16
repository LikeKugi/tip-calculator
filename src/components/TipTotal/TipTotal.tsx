import { JSX } from 'react';
import TipInfo from '@/components/TipInfo/TipInfo';
import styles from './TipTotal.module.scss';
import Button from '@/components/Button/Button';

const TipTotal = (): JSX.Element => {
  return (
    <div className={styles.total}>
      <div className={styles.total__info}>
        <TipInfo title="Tip Amount" price="0" />
        <TipInfo title="Total" price="0" />
      </div>
      <Button variant="light">Reset</Button>
    </div>
  );
};
export default TipTotal;
