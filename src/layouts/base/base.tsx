import { ReactElement, useEffect } from 'react';
import { Layout } from 'antd';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';
import Main from '~/components/main/main';
import { APP_CONFIG } from '~/const/app';

import styles from './base.module.css';

type LayoutBaseProps = {
  title: string;
  children: ReactElement;
};

export default function LayoutBase({ title, children }: LayoutBaseProps) {
  useEffect(() => {
    document.title = `${title} | ${APP_CONFIG.DESCRIPTION}`;
  }, [title]);

  return (
    <Layout className={styles.layout}>
      <Header />
      <Main title={title} children={children} />
      <Footer />
    </Layout>
  );
}
