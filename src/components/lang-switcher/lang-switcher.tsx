import { useState } from 'react';
import { Button, Flex } from 'antd';
import { LANGS } from '~/const/langs';

import styles from './lang-switcher.module.css';

export default function LangSwitcher() {
  const [lang, setLang] = useState<string>('ru');

  return (
    <Flex gap={5}>
      {LANGS.map((l) => (
        <Button
          key={l.value}
          color={lang === l.value ? 'primary' : 'default'}
          variant="outlined"
          shape="circle"
          onClick={() => setLang(l.value)}
          className={styles.langButton}
        >
          {l.label}
        </Button>
      ))}
    </Flex>
  );
}
