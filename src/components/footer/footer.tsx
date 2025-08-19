import { Flex, Layout, Typography } from 'antd';
import { APP_CONFIG } from '~/const/app';

function Footer() {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <Footer>
      <Flex justify="center">
        <Text type="secondary">
          © {APP_CONFIG.CURRENT_YEAR} {APP_CONFIG.NAME}
        </Text>
      </Flex>
    </Footer>
  );
}

export default Footer;
