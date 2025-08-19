import { Link } from 'react-router';
import LayoutBase from '~/layouts/layout-base/layout-base';
import { APP_ROUTE } from '~/const/route/app-route';

export default function ProductDetails() {
  return (
    <LayoutBase title="Детальная">
      <div>Текст</div>
      <Link to={APP_ROUTE.Cart}>Корзина</Link>
    </LayoutBase>
  );
}
