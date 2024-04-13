export interface InputProps {
  label?: string;
  type: 'password' | 'default' | 'number' | 'email-address';
  placeholder: string;
  width?: number;
  setValue: (value: string) => void;
  maxLength?: number;
  enable?: boolean;
  value?: string;
  search?: boolean;
  xButton?: boolean;
  accessibilityLabel?: string;
}
