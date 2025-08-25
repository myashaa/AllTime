import { useTranslation } from 'react-i18next';
import { Flex, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './order-success.module.css';

export default function OrderSuccess() {
  const { Title, Text } = Typography;

  const { t } = useTranslation(NameSpaces.ORDER);

  return (
    <Flex vertical justify="center" align="center" className={styles.wrapper}>
      <CheckCircleOutlined className={styles.icon} />
      <Title level={2}>{t('orderSuccess')}</Title>
      <Text type="secondary">{t('thanksForYourPurchase')}</Text>
    </Flex>
  );
}
