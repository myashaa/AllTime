import { Form, Input } from 'antd';
import type { Rule } from 'antd/es/form';
import type { NamePath } from 'antd/es/form/interface';

type FormInputProps = {
  name: NamePath;
  label: string;
  placeholder: string;
  rules?: Rule[];
  className?: string;
};

export default function FormInput({ name, label, placeholder, rules = [], className }: FormInputProps) {
  return (
    <Form.Item name={name} label={label} rules={rules} className={className}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );
}
