import { Link } from 'react-router';
import LayoutBase from '~/layouts/layout-base/layout-base';
import { APP_ROUTE } from '~/const/route/app-route';

export default function Cart() {
  return (
    <LayoutBase title="Корзина">
      <div>Текст</div>
      <Link to={APP_ROUTE.Checkout}>Оформить заказ</Link>
    </LayoutBase>
  );
}
