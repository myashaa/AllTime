import { ReactElement } from 'react';
import { Flex, Layout, Typography } from 'antd';

import styles from './main.module.css';

type MainProps = {
  title: string;
  children: ReactElement;
};

export default function Main({ title, children }: MainProps) {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Content className={styles.main}>
      <Flex vertical className={styles.wrapper}>
        <Title level={1} className={styles.visuallyHidden}>
          {title}
        </Title>
        {children}
      </Flex>
    </Content>
  );
}
