import { ReactElement } from 'react';
import { Layout } from 'antd';
import useUpdateDocumentTitle from '~/hooks/use-update-document-title';

import styles from '~/layouts/layout.module.css';

type LayoutBaseProps = {
  title: string;
  children: ReactElement;
};

export default function LayoutError({ title, children }: LayoutBaseProps) {
  useUpdateDocumentTitle(title);

  return <Layout className={styles.layout}>{children}</Layout>;
}
