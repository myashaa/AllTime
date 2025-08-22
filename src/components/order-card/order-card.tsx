import { Card, Divider, Flex, Typography } from 'antd';
import { CATALOG } from '~/const/mock';
import OrderSummary from '~/components/order-summary/order-summary';

import styles from './order-card.module.css';

export default function OrderCard() {
  const { Title, Text } = Typography;

  const cartItems = CATALOG.slice(0, 2);
  const totalItems = 10;
  const totalAmount = 100000;
  const quantity = 2;

  return (
    <Card className={styles.card}>
      <Title level={2} className={styles.title}>
        Ваш заказ
      </Title>

      {cartItems.map((i) => (
        <Flex key={i.id} justify="space-between" align="start">
          <Flex vertical>
            <Text className={styles.productName}>{i.name}</Text>
            <Text type="secondary">
              {quantity}&nbsp;&times;&nbsp;{i.price}&nbsp;&#8381;
            </Text>
          </Flex>
          <Text className={styles.productPrice}>{quantity * i.price}&nbsp;&#8381;</Text>
        </Flex>
      ))}

      <Divider />

      <OrderSummary totalItems={totalItems} totalAmount={totalAmount} />
    </Card>
  );
}
