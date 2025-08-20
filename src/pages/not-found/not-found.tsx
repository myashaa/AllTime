import { Link } from 'react-router';
import { Flex, Typography } from 'antd';
import LayoutError from '~/layouts/error/error';
import { AppRoute } from '~/const/route/app-route';
import logo from '~/assets/logo.svg';

import styles from './not-found.module.css';

export default function NotFound() {
  const { Title } = Typography;

  return (
    <LayoutError title="Страница не найдена">
      <Flex vertical justify="center" align="center" className={styles.wrapper}>
        <img src={logo} alt="logo" />
        <Title level={1}>Страница не найдена</Title>
        <Link to={AppRoute.Home}>Вернуться на главную</Link>
      </Flex>
    </LayoutError>
  );
}
