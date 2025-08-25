import { useTranslation } from 'react-i18next';
import { Button, Flex } from 'antd';
import { LANGS } from '~/const/langs';
import { NameSpaces } from '~/i18n/name-spaces';

export default function LangSwitcher() {
  const { i18n } = useTranslation(NameSpaces.COMMON);
  const currentLang = i18n.language;

  const changeLang = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  return (
    <Flex gap={5}>
      {LANGS.map((l) => (
        <Button
          key={l.value}
          color={currentLang === l.value ? 'primary' : 'default'}
          variant="outlined"
          shape="circle"
          onClick={() => changeLang(l.value)}
        >
          {l.label}
        </Button>
      ))}
    </Flex>
  );
}
