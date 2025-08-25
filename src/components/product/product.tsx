import { useTranslation } from 'react-i18next';
import { Card, Flex, Image, Typography, Tag, Divider } from 'antd';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import type { Product } from '~/types/product';
import ShoppingButton from '~/components/shopping-button/form-input';

import styles from './product.module.css';

type ProductProps = {
  data: Product;
};

export default function Product({ data }: ProductProps) {
  const { Text, Paragraph, Title } = Typography;

  const { t } = useTranslation(NameSpaces.PRODUCT);

  return (
    <>
      <Flex gap={48} justify="space-between" className={styles.wrapper}>
        <Flex justify="center" align="center" className={styles.imageWrapper}>
          <Image src={data.image} alt={`${t('image')} ${data.name}`} />
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
                {t('article')}: {data.article}
              </Text>
              <Text type="secondary">
                {t('typeOfMechanism')}: {data.typeOfMechanism}
              </Text>
            </Flex>

            <Paragraph className={styles.description}>{data.description}</Paragraph>

            <Divider />

            <Flex justify="space-between" align="center" className={styles.priceWrapper}>
              <ProductPrice price={data.price} className={styles.price} />
              <ShoppingButton productId={data.id} type="primary" size="large" className={styles.button} />
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
