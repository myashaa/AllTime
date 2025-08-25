import { useTranslation } from 'react-i18next';
import { Card, Divider, Flex, Typography } from 'antd';
import { useAppStore } from '~/store';
import OrderSummary from '~/components/order-summary/order-summary';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import { getCartProducts } from '~/helpers/product';

import styles from './order-card.module.css';

export default function OrderCard() {
  const { Title, Text } = Typography;

  const { t } = useTranslation(NameSpaces.ORDER);

  const cartItems = useAppStore((state) => state.cart.items);
  const products = useAppStore((state) => state.catalog.products);
  const items = getCartProducts(cartItems, products);
  const totalItems = useAppStore((state) => state.cart.getTotalItems());
  const totalAmount = useAppStore((state) => state.cart.getTotalAmount());

  return (
    <Card className={styles.card}>
      <Title level={2} className={styles.title}>
        {t('yourOrder')}
      </Title>

      {items.map((i) => (
        <Flex key={i.id} justify="space-between" align="start">
          <Flex vertical>
            <Text className={styles.productName}>{i.name}</Text>
            <Text type="secondary">
              {i.quantity}&nbsp;&times;&nbsp;{i.price}
            </Text>
          </Flex>
          <ProductPrice price={i.quantity * i.price} className={styles.productPrice} />
        </Flex>
      ))}

      <Divider />

      <OrderSummary totalItems={totalItems} totalAmount={totalAmount} />
    </Card>
  );
}
