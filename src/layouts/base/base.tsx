import { ReactElement } from 'react';
import { Layout } from 'antd';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';
import Main from '~/components/main/main';
import useUpdateDocumentTitle from '~/hooks/use-update-document-title';

import styles from '~/layouts/layout.module.css';

type LayoutBaseProps = {
  title: string;
  children: ReactElement;
};

export default function LayoutBase({ title, children }: LayoutBaseProps) {
  useUpdateDocumentTitle(title);

  return (
    <Layout className={styles.layout}>
      <Header />
      <Main title={title} children={children} />
      <Footer />
    </Layout>
  );
}
