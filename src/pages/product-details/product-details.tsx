import { Link, useParams } from 'react-router';
import { Flex, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import LayoutBase from '~/layouts/base/base';
import { CATALOG } from '~/const/mock';
import Product from '~/components/product/product';
import { AppRoute } from '~/const/route/app-route';

import styles from './product-details.module.css';

export default function ProductDetails() {
  const { Text } = Typography;
  const { productId } = useParams();

  const product = CATALOG.find((item) => item.id === Number(productId));

  return (
    <LayoutBase title="Детальная">
      <Link to={AppRoute.Home} className={styles.backLink}>
        <LeftOutlined className={styles.backIcon} />
        <Text className={styles.backText}>Вернуться в каталог</Text>
      </Link>

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
