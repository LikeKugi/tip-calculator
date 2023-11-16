import { JSX, useEffect, useState } from 'react';
import TipInfo from '@/components/TipInfo/TipInfo';
import styles from './TipTotal.module.scss';
import Button from '@/components/Button/Button';
import { resetTips, selectBill, selectPeople, selectTip, useAppDispatch, useAppSelector } from '@/store';

const TipTotal = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const bill = useAppSelector(selectBill);
  const tip = useAppSelector(selectTip);
  const people = useAppSelector(selectPeople);

  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (people < 1) {
      setAmount(0);
      setTotal(0);
    } else {
      setAmount(bill / people)
      setTotal(bill * (1 + tip / 100) / people)
    }
  }, [bill, tip, people])


  return (
    <div className={styles.total}>
      <div className={styles.total__info}>
        <TipInfo title="Tip Amount" price={amount.toFixed(2).toString()} role={'amount'}/>
        <TipInfo title="Total" price={total.toFixed(2).toString()} role="total"/>
      </div>
      <Button variant="light" onClick={() => dispatch(resetTips())}>Reset</Button>
    </div>
  );
};
export default TipTotal;
