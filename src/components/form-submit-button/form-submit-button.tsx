import { Button, Form } from 'antd';

type FormSubmitButtonProps = {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export default function FormSubmitButton({
  text,
  isLoading = false,
  isDisabled = false,
  className,
  style,
}: FormSubmitButtonProps) {
  return (
    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        loading={isLoading}
        disabled={isDisabled}
        className={className}
        style={style}
      >
        {text}
      </Button>
    </Form.Item>
  );
}
