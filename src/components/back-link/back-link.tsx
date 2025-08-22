import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { AppRoute } from '~/const/route/app-route';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './back-link.module.css';

export default function BackLink() {
  const { Text } = Typography;

  const { t } = useTranslation(NameSpaces.COMMON);

  return (
    <Link to={AppRoute.Home} className={styles.backLink}>
      <LeftOutlined className={styles.backIcon} />
      <Text className={styles.backText}>{t('returnToCatalog')}</Text>
    </Link>
  );
}
