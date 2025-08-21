import { Button, Card, Flex, Image, Typography } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import type { ProductData } from '~/const/mock';

import styles from './cart-item.module.css';

type CartItemProps = {
  data: ProductData;
};

export default function CartItem({ data }: CartItemProps) {
  const { Title, Text } = Typography;

  const quantity = 2;

  return (
    <Card>
      <Flex gap={24} align="center" className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={data.image} alt={`изображение часов ${data.name}`} preview={false} />
        </div>

        <Flex gap={32} className={styles.info}>
          <Flex vertical flex={1}>
            <Title level={2} className={styles.title}>
              {data.name}
            </Title>
            <Text type="secondary">{data.article}</Text>
            <Text strong>{data.price}&nbsp;&#8381;</Text>
          </Flex>

          <Flex align="center" gap={8}>
            <Button
              type="text"
              shape="circle"
              disabled={quantity === 1}
              icon={<MinusOutlined />}
              // TODO: onClick={}
            />
            <Text className={styles.quantity}>{quantity}</Text>
            <Button
              type="text"
              shape="circle"
              icon={<PlusOutlined />}
              // TODO: onClick={}
            />

            <Button
              type="text"
              shape="circle"
              danger
              icon={<DeleteOutlined />}
              // TODO: onClick={}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
