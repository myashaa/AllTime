import { Link } from 'react-router';
import LayoutBase from '~/layouts/base/base';
import { APP_ROUTE } from '~/const/route/app-route';

export default function Checkout() {
  return (
    <LayoutBase title="Оформления заказа">
      <div>Текст</div>
      <Link to={APP_ROUTE.Home}>Вернуться на главную</Link>
    </LayoutBase>
  );
}
