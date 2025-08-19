import { Link } from 'react-router';
import { Badge, Button, Flex, Image, Layout } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import { APP_ROUTE } from '~/const/route/app-route';
import logo from '~/assets/logo.svg';
import LangSwitcher from '~/components/lang-switcher/lang-switcher';

import styles from './header.module.css';

function Header() {
  const { Header } = Layout;

  const cartCount = 10;
  const cartMaxCount = 9;

  return (
    <Header>
      <Flex justify="space-between" align="center">
        <Link to={APP_ROUTE.Home} className={styles.logo}>
          <Image src={logo} preview={false} width={156} alt="logo" />
        </Link>

        <Flex gap={20} align="center">
          <LangSwitcher />

          <Link to={APP_ROUTE.Cart}>
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
