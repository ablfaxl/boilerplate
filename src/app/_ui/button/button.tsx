import { Button as AntButton, ButtonProps } from 'antd';

export function Button(props: ButtonProps) {
  return (
    <AntButton {...props} style={{ ...props.style, borderRadius: '8px' }} />
  );
}
