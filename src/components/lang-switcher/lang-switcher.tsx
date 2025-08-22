import { useState } from 'react';
import { Button, Flex } from 'antd';
import { LANGS } from '~/const/langs';

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
        >
          {l.label}
        </Button>
      ))}
    </Flex>
  );
}
