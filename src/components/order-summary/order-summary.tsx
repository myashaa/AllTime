import { Flex, Typography } from 'antd';
import ProductPrice from '~/components/product-price/product-price';

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
        <ProductPrice price={totalAmount} className={styles.totalPrice} />
      </Flex>
    </>
  );
}
