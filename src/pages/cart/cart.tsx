import { Link } from 'react-router';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';

export default function Cart() {
  return (
    <LayoutBase title="Корзина">
      <div>Текст</div>
      <Link to={AppRoute.Checkout}>Оформить заказ</Link>
    </LayoutBase>
  );
}
