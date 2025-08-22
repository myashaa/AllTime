import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button, Card, Divider, Flex } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';
import BackLink from '~/components/back-link/back-link';
import EmptyContent from '~/components/empty-content/empty-content';
import { CATALOG } from '~/const/mock';
import CartItem from '~/components/cart-item/cart-item';
import OrderSummary from '~/components/order-summary/order-summary';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './cart.module.css';

export default function Cart() {
  const navigate = useNavigate();

  const { t } = useTranslation(NameSpaces.COMMON);

  const cartItems = CATALOG.slice(0, 2);
  const totalItems = 10;
  const totalAmount = 100000;

  const handleButtonClick = () => {
    navigate(AppRoute.Checkout);
  };

  return (
    <LayoutBase title={t('pageTitle.cart')}>
      <BackLink />

      {cartItems.length === 0 ? (
        <EmptyContent description={t('yourCartIsEmpty')} />
      ) : (
        <Flex vertical gap={16} className={styles.wrapper}>
          {cartItems.map((i) => (
            <CartItem key={i.id} data={i} />
          ))}

          <Divider />

          <Card>
            <Flex vertical gap={12}>
              <OrderSummary totalItems={totalItems} totalAmount={totalAmount} />

              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={handleButtonClick}
                className={styles.button}
              >
                {t('placeAnOrder')}
              </Button>
            </Flex>
          </Card>
        </Flex>
      )}
    </LayoutBase>
  );
}
