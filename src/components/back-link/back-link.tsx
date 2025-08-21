import { Link } from 'react-router';
import { Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';

import styles from './back-link.module.css';

export default function BackLink() {
  const { Text } = Typography;

  return (
    <Link to={AppRoute.Home} className={styles.backLink}>
      <LeftOutlined className={styles.backIcon} />
      <Text className={styles.backText}>Вернуться в каталог</Text>
    </Link>
  );
}
