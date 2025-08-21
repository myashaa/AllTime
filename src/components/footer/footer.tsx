import { Flex, Layout, Typography } from 'antd';
import { AppConfig } from '~/const/app';

export default function Footer() {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <Footer>
      <Flex justify="center">
        <Text type="secondary">
          © {AppConfig.CURRENT_YEAR} {AppConfig.NAME}
        </Text>
      </Flex>
    </Footer>
  );
}
