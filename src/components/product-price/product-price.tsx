import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

import styles from './product-price.module.css';

type ProductPriceProps = {
  price: number;
  className?: string;
};

export default function ProductPrice({ price, className }: ProductPriceProps) {
  const { Text } = Typography;

  const { i18n } = useTranslation();
  const currency = i18n.language === 'ru' ? '₽' : '$';

  return (
    <Text className={`${className} ${styles.price}`}>
      {price}
      &nbsp;{currency}
    </Text>
  );
}
