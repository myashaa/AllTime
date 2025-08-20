import { Link } from 'react-router';
import LayoutBase from '~/layouts/base/base';
import { AppRoute } from '~/const/route/app-route';

export default function Home() {
  return (
    <LayoutBase title="Главная">
      <div>Текст</div>
      <Link to={AppRoute.ProductDetails}>Товар</Link>
    </LayoutBase>
  );
}
