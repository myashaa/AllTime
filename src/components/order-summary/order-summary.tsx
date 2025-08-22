import { useTranslation } from 'react-i18next';
import { Flex, Typography } from 'antd';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './order-summary.module.css';

type OrderSummaryProps = {
  totalItems: number;
  totalAmount: number;
};

export default function OrderSummary({ totalItems, totalAmount }: OrderSummaryProps) {
  const { Text } = Typography;

  const { t } = useTranslation(NameSpaces.ORDER);

  return (
    <>
      <Flex justify="space-between">
        <Text>{t('numberOfProducts')}:</Text>
        <Text strong>
          {totalItems} {t('unitsOfMeasurement')}
        </Text>
      </Flex>

      <Flex justify="space-between">
        <Text>{t('total')}:</Text>
        <ProductPrice price={totalAmount} className={styles.totalPrice} />
      </Flex>
    </>
  );
}
