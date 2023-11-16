import { ChangeEvent, FC, useState } from 'react';
import Button from '@/components/Button/Button';
import styles from './TipNumber.module.scss';

const tips = [
  { value: 5, title: '5%' },
  { value: 10, title: '10%' },
  { value: 15, title: '15%' },
  { value: 25, title: '25%' },
  { value: 50, title: '50%' },
];

interface ITipNumberProps {
  label: string;
}

const TipNumber: FC<ITipNumberProps> = ({ label }) => {

  const [current, setCurrent] = useState<number | ''>('');
  const [custom, setCustom] = useState<number | ''>('');

  const handleSetCurrent = (value: number) => {
    if (value === current) {
      setCurrent('');
      setCustom('')
    } else {
      setCurrent(value);
      setCustom('')
    }
  };

  const handleCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = +e.target.value
    if (isFinite(value) && value > 0) {
      setCustom(value);
      setCurrent(value);
    } else {
      setCurrent('');
      setCustom('');
    }
  }

  return (
    <div className={styles.box}>
      <p className={styles.box__title}>{label}</p>
      <div className={styles.box__grid}>
        {tips.map(tip => <Button variant={current === tip.value ? 'light' : 'dark'}
                                 onClick={() => handleSetCurrent(tip.value)}>{tip.title}</Button>)}
        <input className={styles.box__input} type={'number'}
               placeholder={'custom'}
               min={0}
               value={custom}
               onChange={handleCustomTip}/>
      </div>
    </div>

  );
};

export default TipNumber;
