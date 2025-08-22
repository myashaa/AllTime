import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card, Flex, Form, Typography } from 'antd';
import { AppRoute } from '~/const/route/app-route';
import FormInput from '~/components/form-input/form-input';
import FormSubmitButton from '~/components/form-submit-button/form-submit-button';

import styles from './order-form.module.css';

export default function OrderForm() {
  const { Title } = Typography;

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
        Данные для заказа
      </Title>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Flex className={styles.nameInputWrapper}>
          <FormInput name="firstName" label="Имя" placeholder="Введите ваше имя" className={styles.flexInput} />
          <FormInput name="lastName" label="Фамилия" placeholder="Введите вашу фамилию" className={styles.flexInput} />
        </Flex>

        <FormInput name="email" label="Email" placeholder="example@mail.com" />

        <FormInput name="phone" label="Номер телефона" placeholder="+79999999999" />

        <FormSubmitButton text="Подтвердить заказ" loading={isSubmitting} className={styles.button} />
      </Form>
    </Card>
  );
}
