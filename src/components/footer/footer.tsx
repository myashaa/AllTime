import { Flex, Layout, Typography } from 'antd';

function Footer() {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <Footer>
      <Flex justify="center">
        <Text type="secondary">© 2025 AllTime.ru</Text>
      </Flex>
    </Footer>
  );
}

export default Footer;
