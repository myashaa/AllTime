import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import type { ButtonColorType, ButtonType, ButtonVariantType } from 'antd/es/button';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useAppStore } from '~/store';
import { NameSpaces } from '~/i18n/name-spaces';

type ShoppingButtonProps = {
  productId: number;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  type?: ButtonType;
  size?: SizeType;
  className?: string;
};

export default function ShoppingButton({ productId, color, variant, type, size, className }: ShoppingButtonProps) {
  const { t } = useTranslation(NameSpaces.COMMON);

  const addToCart = useAppStore((state) => state.cart.addToCart);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(productId);
  };

  return (
    <Button
      color={color}
      variant={variant}
      type={type}
      size={size}
      icon={<ShoppingCartOutlined />}
      className={className}
      onClick={handleButtonClick}
    >
      {t('addToCart')}
    </Button>
  );
}
