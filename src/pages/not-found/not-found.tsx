import { Link } from 'react-router';
import LayoutBase from '~/layouts/base/base.tsx';
import { APP_ROUTE } from '~/const/route/app-route';

export default function NotFound() {
  return (
    <LayoutBase title="Страница не найдена">
      <div>404</div>
      <Link to={APP_ROUTE.Home}>на главную</Link>
    </LayoutBase>
  );
}
