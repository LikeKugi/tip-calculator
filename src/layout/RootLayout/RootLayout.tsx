import { FC, JSX, PropsWithChildren } from 'react';
import styles from './RootLayout.module.scss';

const RootLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
export default RootLayout;
