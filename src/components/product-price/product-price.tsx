import { Typography } from 'antd';

import styles from './product-price.module.css';

type ProductPriceProps = {
  price: number;
  className?: string;
};

export default function ProductPrice({ price, className }: ProductPriceProps) {
  const { Text } = Typography;

  return (
    <Text className={`${className} ${styles.price}`}>
      {price}
      &nbsp;&#8381;
    </Text>
  );
}
