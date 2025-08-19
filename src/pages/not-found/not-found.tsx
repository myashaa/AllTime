import { Link } from 'react-router';
import LayoutBase from '~/layouts/layout-base/layout-base';
import { AppRoute } from '~/const/route/app-route';

export default function NotFound() {
  return (
    <LayoutBase title={'Страница не найдена'}>
      <div>404</div>
      <Link to={AppRoute.Home}>на главную</Link>
    </LayoutBase>
  );
}
