import { Flex, Typography } from 'antd';

import styles from './order-summary.module.css';

type OrderSummaryProps = {
  totalItems: number;
  totalAmount: number;
};

export default function OrderSummary({ totalItems, totalAmount }: OrderSummaryProps) {
  const { Text } = Typography;

  return (
    <>
      <Flex justify="space-between">
        <Text>Товаров:</Text>
        <Text strong>{totalItems} шт.</Text>
      </Flex>

      <Flex justify="space-between">
        <Text>Итого:</Text>
        <Text strong className={styles.totalPrice}>
          {totalAmount}&nbsp;&#8381;
        </Text>
      </Flex>
    </>
  );
}
