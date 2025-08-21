import { useNavigate } from 'react-router';
import { Button, Card, Flex, Image, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';
import type { ProductData } from '~/const/mock';

import styles from './product-card.module.css';

type ProductCardProps = {
  product: ProductData;
};

function ProductCard({ product }: ProductCardProps) {
  const { Text, Paragraph, Title } = Typography;
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`${AppRoute.ProductDetails}/${product.id}`);
    window.scrollTo(0, 0);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: добавить логику
  };

  return (
    <Card className={styles.card} onClick={handleTitleClick}>
      <Flex vertical align="center">
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={`изображение часов ${product.name}`} preview={false} height={270} />
        </div>

        <Title level={2} className={styles.title}>
          {product.name}
        </Title>

        <Paragraph type="secondary" className={styles.description}>
          {product.description}
        </Paragraph>

        <Flex justify="space-between" align="center" className={styles.priceWrapper}>
          <Text className={styles.price}>
            {product.price}
            &nbsp;&#8381;
          </Text>
          <Button
            color="primary"
            variant="outlined"
            icon={<ShoppingCartOutlined />}
            className={styles.button}
            onClick={handleButtonClick}
          >
            В корзину
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default ProductCard;
