import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from '~/components/app/app';
import { THEME } from '~/const/theme';
import './i18n';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ConfigProvider theme={THEME}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
