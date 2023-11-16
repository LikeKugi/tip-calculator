import { JSX } from 'react';
import TipInput from '@/components/TipInput/TipInput';
import styles from './TipForm.module.scss';
import TipNumber from '@/components/TipNumber/TipNumber';

const TipForm = (): JSX.Element => {
  return (
    <div className={styles.form}>
      <TipInput variant="bill" label={'Bill'} error="" type={'number'} placeholder={'0'} min={0} step={0.01} autoComplete={'off'}/>
      <TipNumber label="Select Tip %" />
      <TipInput variant="person" label={'Number of People'} type={'number'} placeholder={'0'} />
    </div>
  );
};
export default TipForm;
