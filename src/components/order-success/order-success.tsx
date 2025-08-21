import { Flex, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import styles from './order-success.module.css';

export default function OrderSuccess() {
  const { Title, Text } = Typography;

  return (
    <Flex vertical justify="center" align="center" className={styles.wrapper}>
      <CheckCircleOutlined className={styles.icon} />
      <Title level={2}>Заказ успешно оформлен!</Title>
      <Text type="secondary">Спасибо за покупку. Скоро вы будете перенаправлены на главную страницу.</Text>
    </Flex>
  );
}
