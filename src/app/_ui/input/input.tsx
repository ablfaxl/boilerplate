import { Input as AntInput, InputProps } from 'antd';

export function Input(props: InputProps) {
  return (
    <AntInput {...props} style={{ ...props.style, borderRadius: '8px' }} />
  );
}
