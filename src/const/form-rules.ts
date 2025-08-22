export const PHONE_PATTERN = /^(\+7|8)[0-9]{10}$/;
export const NAME_PATTERN = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

export const FormRules = {
  NAME: [
    { required: true, message: 'Пожалуйста, введите имя' },
    {
      pattern: NAME_PATTERN,
      message: 'Имя не должно содержать цифр и специальных символов',
    },
  ],
  SURNAME: [
    { required: true, message: 'Пожалуйста, введите фамилию' },
    {
      pattern: NAME_PATTERN,
      message: 'Фамилия не должна содержать цифр и специальных символов',
    },
  ],
  EMAIL: [
    { required: true, message: 'Пожалуйста, введите email' },
    { type: 'email', message: 'Введите корректный email адрес' },
  ],
  PHONE: [
    { required: true, message: 'Пожалуйста, введите номер телефона' },
    {
      pattern: PHONE_PATTERN,
      message: 'Введите корректный номер телефона',
    },
  ],
} as const;
