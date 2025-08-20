import { Link } from 'react-router';
import { Badge, Button, Flex, Layout } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';
import logo from '~/assets/logo.svg';
import LangSwitcher from '~/components/lang-switcher/lang-switcher';

import styles from './header.module.css';

function Header() {
  const { Header } = Layout;

  const cartCount = 10;
  const cartMaxCount = 9;

  return (
    <Header>
      <Flex justify="space-between" align="center" className={styles.wrapper}>
        <Link to={AppRoute.Home} className={styles.logoLink}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>

        <Flex gap={20} align="center">
          <LangSwitcher />

          <Link to={AppRoute.Cart}>
            <Badge count={cartCount} overflowCount={cartMaxCount} showZero={false}>
              <Button type="primary" shape="circle" icon={<ShoppingOutlined />} />
            </Badge>
          </Link>
        </Flex>
      </Flex>
    </Header>
  );
}

export default Header;
