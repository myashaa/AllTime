import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Card, Flex, Form, Typography } from 'antd';
import { AppRoute } from '~/const/route/app-route';
import FormInput from '~/components/form-input/form-input';
import FormSubmitButton from '~/components/form-submit-button/form-submit-button';
import { getFormRules } from '~/helpers/form';
import { NameSpaces } from '~/i18n/name-spaces';

import styles from './order-form.module.css';

export default function OrderForm() {
  const { Title } = Typography;

  const { t, i18n } = useTranslation(NameSpaces.ORDER);
  const formRules = getFormRules(t);

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formKey, setFormKey] = useState<number>(0);

  useEffect(() => {
    form.resetFields();
    setFormKey((prev) => prev + 1);
  }, [form, i18n.language]);

  const handleFinish = async () => {
    setIsSubmitting(true);

    // TODO: добавить логику

    setTimeout(() => {
      navigate(AppRoute.Home);
    }, 2000);
  };

  return (
    <Card className={styles.card}>
      <Title level={2} className={styles.title}>
        {t('orderDetails')}
      </Title>

      <Form key={formKey} form={form} layout="vertical" onFinish={handleFinish}>
        <Flex className={styles.nameInputWrapper}>
          <FormInput
            name="firstName"
            label={t('name')}
            placeholder={t('enterYourName')}
            rules={formRules.NAME}
            className={styles.flexInput}
          />
          <FormInput
            name="lastName"
            label={t('surname')}
            placeholder={t('enterYourSurname')}
            rules={formRules.SURNAME}
            className={styles.flexInput}
          />
        </Flex>

        <FormInput name="email" label="Email" placeholder="example@mail.com" rules={formRules.EMAIL} />

        <FormInput name="phone" label={t('phone')} placeholder="+79999999999" rules={formRules.PHONE} />

        <FormSubmitButton text={t('confirmOrder')} isLoading={isSubmitting} className={styles.button} />
      </Form>
    </Card>
  );
}
