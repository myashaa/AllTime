import { Flex } from 'antd';
import LayoutBase from '~/layouts/base/base';
import OrderSuccess from '~/components/order-success/order-success';
import OrderCard from '~/components/order-card/order-card';
import OrderForm from '~/components/order-form/order-form';

import styles from './checkout.module.css';

export default function Checkout() {
  const orderCompleted = false;

  return (
    <LayoutBase title="Оформление заказа">
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
