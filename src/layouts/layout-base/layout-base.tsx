import { ReactElement } from 'react';

import styles from './layout-base.module.css';

type LayoutBaseProps = {
  title?: string;
  children: ReactElement;
};

export default function LayoutBase({ title, children }: LayoutBaseProps) {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
