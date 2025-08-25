import { useTranslation } from 'react-i18next';
import { Button, Card, Flex, Image, Typography, Tag, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import { useAppStore } from '~/store';
import type { Product } from '~/types/product';

import styles from './product.module.css';

type ProductProps = {
  data: Product;
};

export default function Product({ data }: ProductProps) {
  const { Text, Paragraph, Title } = Typography;

  const { t: tCommon } = useTranslation(NameSpaces.COMMON);
  const { t: tProduct } = useTranslation(NameSpaces.PRODUCT);

  const addToCart = useAppStore((state) => state.cart.addToCart);

  const handleButtonClick = () => {
    addToCart(data.id);
  };

  return (
    <>
      <Flex gap={48} justify="space-between" className={styles.wrapper}>
        <Flex justify="center" align="center" className={styles.imageWrapper}>
          <Image src={data.image} alt={`${tProduct('image')} ${data.name}`} />
        </Flex>

        <Card className={styles.card}>
          <Flex vertical gap={24}>
            <Title level={2} className={styles.title}>
              {data.name}
            </Title>

            <Flex gap={12}>
              <Tag className={styles.tag}>{data.country}</Tag>
              <Tag className={styles.tag}>{data.gender}</Tag>
            </Flex>

            <Flex vertical gap={4} className={styles.characteristic}>
              <Text type="secondary">
                {tProduct('article')}: {data.article}
              </Text>
              <Text type="secondary">
                {tProduct('typeOfMechanism')}: {data.typeOfMechanism}
              </Text>
            </Flex>

            <Paragraph className={styles.description}>{data.description}</Paragraph>

            <Divider />

            <Flex justify="space-between" align="center" className={styles.priceWrapper}>
              <ProductPrice price={data.price} className={styles.price} />
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                className={styles.button}
                onClick={handleButtonClick}
              >
                {tCommon('addToCart')}
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
