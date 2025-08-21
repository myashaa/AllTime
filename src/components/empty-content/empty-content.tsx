import { Empty, Flex } from 'antd';

import styles from './empty-content.module.css';

type EmptyContentProps = {
  description: string;
};

export default function EmptyContent({ description }: EmptyContentProps) {
  return (
    <Flex vertical justify="center" align="center" className={styles.wrapper}>
      <Empty description={description} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Flex>
  );
}
