import { Link } from 'react-router';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';

export default function ProductDetails() {
  return (
    <LayoutBase title="Детальная">
      <div>Текст</div>
      <Link to={AppRoute.Cart}>Корзина</Link>
    </LayoutBase>
  );
}
