import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Badge, Button, Flex, Layout } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';
import logo from '~/assets/logo.svg';
import LangSwitcher from '~/components/lang-switcher/lang-switcher';
import { NameSpaces } from '~/i18n/name-spaces';
import { useAppStore } from '~/store';

import styles from './header.module.css';

export default function Header() {
  const { Header } = Layout;

  const { t } = useTranslation(NameSpaces.COMMON);

  const totalItems = useAppStore((state) => state.cart.getTotalItems());
  const maxVisibleAmount = 9;

  return (
    <Header>
      <Flex justify="space-between" align="center" className={styles.wrapper}>
        <Link to={AppRoute.Home} className={styles.logoLink}>
          <img src={logo} alt={t('logo')} className={styles.logo} />
        </Link>

        <Flex gap={20} align="center">
          <LangSwitcher />

          <Link to={AppRoute.Cart}>
            <Badge count={totalItems} overflowCount={maxVisibleAmount} showZero={false}>
              <Button type="primary" shape="circle" icon={<ShoppingOutlined />} />
            </Badge>
          </Link>
        </Flex>
      </Flex>
    </Header>
  );
}
