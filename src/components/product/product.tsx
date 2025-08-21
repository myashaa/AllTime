import { Button, Card, Flex, Image, Typography, Tag } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import type { ProductData } from '~/const/mock';

import styles from './product.module.css';

type ProductProps = {
  data: ProductData;
};

export default function Product({ data }: ProductProps) {
  const { Text, Paragraph, Title } = Typography;

  const handleButtonClick = () => {
    // TODO: добавить логику
  };

  return (
    <>
      <Flex gap={48} justify="space-between" className={styles.wrapper}>
        <Flex align="center" className={styles.imageWrapper}>
          <Image src={data.image} alt={`изображение часов ${data.name}`} />
        </Flex>

        <Card className={styles.cardInfo}>
          <Flex vertical gap={24}>
            <Title level={2}>{data.name}</Title>

            <Flex gap={12}>
              <Tag className={styles.tag}>{data.country}</Tag>
              <Tag className={styles.tag}>{data.gender}</Tag>
            </Flex>

            <Flex vertical gap={4} className={styles.characteristic}>
              <Text type="secondary">Артикул: {data.article}</Text>
              <Text type="secondary">Тип механизма: {data.typeOfMechanism}</Text>
            </Flex>

            <Paragraph className={styles.description}>{data.description}</Paragraph>

            <Flex justify="space-between" align="center" className={styles.priceWrapper}>
              <Text className={styles.price}>
                {data.price}
                &nbsp;&#8381;
              </Text>
              <Button
                type="primary"
                size="large"
                icon={<ShoppingCartOutlined />}
                className={styles.button}
                onClick={handleButtonClick}
              >
                В корзину
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Card className={styles.cardDescription}>
        <Title level={3}>Описание</Title>
        <Paragraph className={styles.description}>{data.description}</Paragraph>
      </Card>
    </>
  );
}
