import { ReactElement } from 'react';
import { Layout, Typography } from 'antd';

import styles from './main.module.css';

type MainProps = {
  title: string;
  children: ReactElement;
};

function Main({ title, children }: MainProps) {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Content className={styles.main}>
      <Title level={1} className={styles.visuallyHidden}>
        {title}
      </Title>
      {children}
    </Content>
  );
}

export default Main;
