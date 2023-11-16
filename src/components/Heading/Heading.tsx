import { FC, JSX, PropsWithChildren } from 'react';
import styles from './Heading.module.scss';

interface IHeadingProps {
  title: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading: FC<PropsWithChildren<IHeadingProps>> = ({title, children, variant}): JSX.Element => {
  const Tag = variant || 'h1'
  return (
    <Tag className={styles.heading}>{title}{children}</Tag>
  );
};
export default Heading;
