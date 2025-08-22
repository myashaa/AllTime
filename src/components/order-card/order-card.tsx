import { useTranslation } from 'react-i18next';
import { Card, Divider, Flex, Typography } from 'antd';
import { CATALOG } from '~/const/mock';
import OrderSummary from '~/components/order-summary/order-summary';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './order-card.module.css';

export default function OrderCard() {
  const { Title, Text } = Typography;

  const { t } = useTranslation(NameSpaces.ORDER);

  const cartItems = CATALOG.slice(0, 2);
  const totalItems = 10;
  const totalAmount = 100000;
  const quantity = 2;

  return (
    <Card className={styles.card}>
      <Title level={2} className={styles.title}>
        {t('yourOrder')}
      </Title>

      {cartItems.map((i) => (
        <Flex key={i.id} justify="space-between" align="start">
          <Flex vertical>
            <Text className={styles.productName}>{i.name}</Text>
            <Text type="secondary">
              {quantity}&nbsp;&times;&nbsp;{i.price}
            </Text>
          </Flex>
          <ProductPrice price={quantity * i.price} className={styles.productPrice} />
        </Flex>
      ))}

      <Divider />

      <OrderSummary totalItems={totalItems} totalAmount={totalAmount} />
    </Card>
  );
}
