import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Flex, Typography } from 'antd';
import LayoutError from '~/layouts/error/error';
import { AppRoute } from '~/const/route/app-route';
import logo from '~/assets/logo.svg';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './not-found.module.css';

export default function NotFound() {
  const { Title } = Typography;

  const { t } = useTranslation(NameSpaces.COMMON);

  return (
    <LayoutError title={t('pageTitle.pageNotFound')}>
      <Flex vertical justify="center" align="center" className={styles.wrapper}>
        <img src={logo} alt="logo" />
        <Title level={1}>{t('pageNotFound')}</Title>
        <Link to={AppRoute.Home}>{t('returnToHome')}</Link>
      </Flex>
    </LayoutError>
  );
}
