import { Link } from 'react-router';
import LayoutBase from '~/layouts/layout-base/layout-base';
import { APP_ROUTE } from '~/const/route/app-route';

export default function Home() {
  return (
    <LayoutBase title="Главная">
      <div>Текст</div>
      <Link to={APP_ROUTE.ProductDetails}>Товар</Link>
    </LayoutBase>
  );
}
