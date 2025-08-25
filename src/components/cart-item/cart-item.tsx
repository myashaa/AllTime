import { useTranslation } from 'react-i18next';
import { Button, Card, Flex, Image, Typography } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import type { ProductWithQuantity } from '~/types/product';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import { useAppStore } from '~/store';

import styles from './cart-item.module.css';

type CartItemProps = {
  data: ProductWithQuantity;
};

export default function CartItem({ data }: CartItemProps) {
  const { Title, Text } = Typography;

  const { t } = useTranslation(NameSpaces.PRODUCT);

  const incrementQuantity = useAppStore((state) => state.cart.incrementCartItemQuantity);
  const decrementQuantity = useAppStore((state) => state.cart.decrementCartItemQuantity);
  const removeFromCart = useAppStore((state) => state.cart.removeFromCart);

  return (
    <Card>
      <Flex gap={24} align="center" className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={data.image} alt={`${t('image')} ${data.name}`} preview={false} />
        </div>

        <Flex gap={32} className={styles.info}>
          <Flex vertical flex={1}>
            <Title level={2} className={styles.title}>
              {data.name}
            </Title>
            <Text type="secondary">{data.article}</Text>
            <ProductPrice price={data.price} />
          </Flex>

          <Flex align="center" gap={8}>
            <Button
              type="text"
              shape="circle"
              disabled={data.quantity === 1}
              icon={<MinusOutlined />}
              onClick={() => decrementQuantity(data.id)}
            />
            <Text className={styles.quantity}>{data.quantity}</Text>
            <Button type="text" shape="circle" icon={<PlusOutlined />} onClick={() => incrementQuantity(data.id)} />

            <Button
              type="text"
              shape="circle"
              danger
              icon={<DeleteOutlined />}
              onClick={() => removeFromCart(data.id)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
