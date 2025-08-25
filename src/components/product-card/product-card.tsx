import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Card, Flex, Image, Typography } from 'antd';
import { AppRoute } from '~/const/route/app-route';
import type { Product } from '~/types/product';
import ProductPrice from '~/components/product-price/product-price';
import { NameSpaces } from '~/i18n/name-spaces';
import ShoppingButton from '~/components/shopping-button/form-input';

import styles from './product-card.module.css';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { Paragraph, Title } = Typography;

  const { t } = useTranslation(NameSpaces.PRODUCT);

  const handleTitleClick = () => {
    navigate(`${AppRoute.ProductDetails}/${product.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Card className={styles.card} onClick={handleTitleClick}>
      <Flex vertical align="center" className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={`${t('image')} ${product.name}`} preview={false} height={270} />
        </div>

        <Title level={2} className={styles.title}>
          {product.name}
        </Title>

        <Paragraph type="secondary" className={styles.description}>
          {product.description}
        </Paragraph>

        <Flex justify="space-between" align="center" className={styles.priceWrapper}>
          <ProductPrice price={product.price} className={styles.price} />
          <ShoppingButton productId={product.id} color="primary" variant="outlined" className={styles.button} />
        </Flex>
      </Flex>
    </Card>
  );
}
