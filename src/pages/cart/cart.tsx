import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button, Card, Divider, Flex } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';
import BackLink from '~/components/back-link/back-link';
import EmptyContent from '~/components/empty-content/empty-content';
import { useAppStore } from '~/store';
import CartItem from '~/components/cart-item/cart-item';
import OrderSummary from '~/components/order-summary/order-summary';
import { NameSpaces } from '~/i18n/name-spaces';
import { getCartProducts } from '~/helpers/product';

import styles from './cart.module.css';

export default function Cart() {
  const navigate = useNavigate();

  const { t } = useTranslation(NameSpaces.COMMON);

  const cartItems = useAppStore((state) => state.cart.items);
  const products = useAppStore((state) => state.catalog.products);
  const items = getCartProducts(cartItems, products);
  const totalItems = useAppStore((state) => state.cart.getTotalItems());
  const totalAmount = useAppStore((state) => state.cart.getTotalAmount());

  const handleButtonClick = () => {
    navigate(AppRoute.Checkout);
  };

  return (
    <LayoutBase title={t('pageTitle.cart')}>
      <BackLink />

      {items.length === 0 ? (
        <EmptyContent description={t('yourCartIsEmpty')} />
      ) : (
        <Flex vertical gap={16} className={styles.wrapper}>
          {items.map((i) => (
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
