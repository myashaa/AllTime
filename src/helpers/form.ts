import type { TFunction } from 'i18next';
import { NAME_PATTERN, PHONE_PATTERN } from '~/const/form';

export const getFormRules = (t: TFunction) => ({
  NAME: [
    { required: true, message: t('form.rules.name.required') },
    {
      pattern: NAME_PATTERN,
      message: t('form.rules.name.pattern'),
    },
  ],
  SURNAME: [
    { required: true, message: t('form.rules.surname.required') },
    {
      pattern: NAME_PATTERN,
      message: t('form.rules.surname.pattern'),
    },
  ],
  EMAIL: [
    { required: true, message: t('form.rules.email.required') },
    { type: 'email', message: t('form.rules.email.type') },
  ],
  PHONE: [
    { required: true, message: t('form.rules.phone.required') },
    {
      pattern: PHONE_PATTERN,
      message: t('form.rules.phone.pattern'),
    },
  ],
});
