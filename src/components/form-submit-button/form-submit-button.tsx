import { useEffect, useState } from 'react';
import { Button, Form } from 'antd';

type FormSubmitButtonProps = {
  text: string;
  isLoading?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function FormSubmitButton({ text, isLoading = false, className, style }: FormSubmitButtonProps) {
  const form = Form.useFormInstance();
  const [submittable, setSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        loading={isLoading}
        disabled={!submittable}
        className={className}
        style={style}
      >
        {text}
      </Button>
    </Form.Item>
  );
}
