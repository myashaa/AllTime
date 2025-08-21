import { useNavigate } from 'react-router';
import { Button, Card, Divider, Flex, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';
import BackLink from '~/components/back-link/back-link';
import EmptyContent from '~/components/empty-content/empty-content';
import { CATALOG } from '~/const/mock';
import CartItem from '~/components/cart-item/cart-item';

import styles from './cart.module.css';

export default function Cart() {
  const { Text } = Typography;

  const navigate = useNavigate();

  const cartItems = CATALOG.slice(0, 2);
  const totalItems = 10;
  const totalAmount = 100000;

  const handleButtonClick = () => {
    navigate(AppRoute.Checkout);
  };

  return (
    <LayoutBase title="Корзина">
      <BackLink />

      {cartItems.length === 0 ? (
        <EmptyContent description="Ваша корзина пуста" />
      ) : (
        <Flex vertical gap={16} className={styles.wrapper}>
          {cartItems.map((i) => (
            <CartItem key={i.id} data={i} />
          ))}

          <Divider />

          <Card>
            <Flex vertical gap={12}>
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

              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={handleButtonClick}
                className={styles.button}
              >
                Оформить заказ
              </Button>
            </Flex>
          </Card>
        </Flex>
      )}
    </LayoutBase>
  );
}
