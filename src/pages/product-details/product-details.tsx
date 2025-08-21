import { useParams } from 'react-router';
import { Flex, Typography } from 'antd';
import LayoutBase from '~/layouts/base/base';
import { CATALOG } from '~/const/mock';
import Product from '~/components/product/product';

import styles from './product-details.module.css';

export default function ProductDetails() {
  const { Text } = Typography;
  const { productId } = useParams();

  const product = CATALOG.find((item) => item.id === Number(productId));

  return (
    <LayoutBase title="Детальная">
      {product ? (
        <Product data={product} />
      ) : (
        <Flex vertical justify="center" align="center" className={styles.wrapper}>
          <Text>Товар не найден</Text>
        </Flex>
      )}
    </LayoutBase>
  );
}
