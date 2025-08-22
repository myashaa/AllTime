import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '~/i18n/resources';
import { NameSpaces } from '~/i18n/name-spaces';

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  ns: Object.values(NameSpaces),
  defaultNS: NameSpaces.COMMON,
});

export default i18n;
