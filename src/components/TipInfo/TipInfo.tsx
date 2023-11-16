import { FC, JSX } from 'react';
import styles from './TipInfo.module.scss';

interface ITipInfoProps {
  title: string;
  price: string;
  role?: string;
}

const TipInfo: FC<ITipInfoProps> = ({title, price, role}): JSX.Element => {
  return (
    <div className={styles.info}>
      <div className={styles.info__text}>
        <h2 className={styles.info__title}>{title}</h2>
        <h3 className={styles.info__subtitle}>/ person</h3>
      </div>
      <span className={styles.info__price} role={role}>
        ${price}
      </span>
    </div>
  );
};
export default TipInfo;
