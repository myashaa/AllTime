import { NameSpaces } from '~/i18n/name-spaces';

import ruCommon from '~/i18n/locales/ru/common.json';
import ruProduct from '~/i18n/locales/ru/product.json';
import ruOrder from '~/i18n/locales/ru/order.json';

import enCommon from '~/i18n/locales/en/common.json';
import enProduct from '~/i18n/locales/en/product.json';
import enOrder from '~/i18n/locales/en/order.json';

export const resources = {
  ru: { [NameSpaces.COMMON]: ruCommon, [NameSpaces.PRODUCT]: ruProduct, [NameSpaces.ORDER]: ruOrder },
  en: { [NameSpaces.COMMON]: enCommon, [NameSpaces.PRODUCT]: enProduct, [NameSpaces.ORDER]: enOrder },
};
