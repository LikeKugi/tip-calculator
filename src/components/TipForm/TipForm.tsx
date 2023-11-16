import { JSX, useEffect, useState } from 'react';
import TipInput from '@/components/TipInput/TipInput';
import styles from './TipForm.module.scss';
import TipNumber from '@/components/TipNumber/TipNumber';
import { selectBill, selectError, selectPeople, setBill, setPeople, useAppDispatch, useAppSelector } from '@/store';

const TipForm = (): JSX.Element => {
  const tipBill = useAppSelector(selectBill);
  const tipPeople = useAppSelector(selectPeople);
  const tipError = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const [billState, setBillState] = useState(tipBill);
  const [peopleState, setPeopleState] = useState(tipPeople);

  useEffect(() => {
    if (!tipBill && !tipPeople) {
      setBillState(0);
      setPeopleState(0);
    }
  }, [tipBill, tipPeople])

  return (
    <div className={styles.form}>
      <TipInput variant="bill"
                label={'Bill'}
                error=""
                type={'number'}
                placeholder={'0'}
                min={0}
                step={0.01}
                autoComplete={'off'}
                value={billState || ''}
                onChange={(e) => {
                  setBillState(+e.target.value);
                }}
                onBlur={() => dispatch(setBill(billState))}/>
      <TipNumber label="Select Tip %"/>
      <TipInput variant="person"
                label={'Number of People'}
                type={'number'}
                placeholder={'0'}
                error={tipError}
                value={peopleState || ''}
                onChange={e => {
                  setPeopleState(+e.target.value);
                }}
                onBlur={() => {
                  dispatch(setPeople(peopleState));
                }}/>
    </div>
  );
};
export default TipForm;
