import { useTranslation } from 'react-i18next';
import { Flex } from 'antd';
import LayoutBase from '~/layouts/base/base';
import OrderSuccess from '~/components/order-success/order-success';
import OrderCard from '~/components/order-card/order-card';
import OrderForm from '~/components/order-form/order-form';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './checkout.module.css';

export default function Checkout() {
  const { t } = useTranslation(NameSpaces.COMMON);

  const orderCompleted = false;

  return (
    <LayoutBase title={t('pageTitle.checkout')}>
      {orderCompleted ? (
        <OrderSuccess />
      ) : (
        <Flex gap={24} align="start" className={styles.wrapper}>
          <OrderForm />
          <OrderCard />
        </Flex>
      )}
    </LayoutBase>
  );
}
