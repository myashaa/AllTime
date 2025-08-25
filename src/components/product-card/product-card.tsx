import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button, Card, Flex, Image, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';
import type { Product } from '~/types/product';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import { useAppStore } from '~/store';

import styles from './product-card.module.css';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { Paragraph, Title } = Typography;

  const { t: tCommon } = useTranslation(NameSpaces.COMMON);
  const { t: tProduct } = useTranslation(NameSpaces.PRODUCT);

  const addToCart = useAppStore((state) => state.cart.addToCart);

  const handleTitleClick = () => {
    navigate(`${AppRoute.ProductDetails}/${product.id}`);
    window.scrollTo(0, 0);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product.id);
  };

  return (
    <Card className={styles.card} onClick={handleTitleClick}>
      <Flex vertical align="center" className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={`${tProduct('image')} ${product.name}`} preview={false} height={270} />
        </div>

        <Title level={2} className={styles.title}>
          {product.name}
        </Title>

        <Paragraph type="secondary" className={styles.description}>
          {product.description}
        </Paragraph>

        <Flex justify="space-between" align="center" className={styles.priceWrapper}>
          <ProductPrice price={product.price} className={styles.price} />
          <Button
            color="primary"
            variant="outlined"
            icon={<ShoppingCartOutlined />}
            className={styles.button}
            onClick={handleButtonClick}
          >
            {tCommon('addToCart')}
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
