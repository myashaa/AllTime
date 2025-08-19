import { Link } from 'react-router';
import LayoutBase from '~/layouts/layout-base/layout-base';
import { AppRoute } from '~/const/route/app-route';

export default function Home() {
  return (
    <LayoutBase title={'Главная'}>
      <div>Текст</div>
      <Link to={AppRoute.ProductDetails}>Товар</Link>
    </LayoutBase>
  );
}
