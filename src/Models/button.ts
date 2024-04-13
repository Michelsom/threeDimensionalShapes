export interface ButtonProps {
  text: string;
  type: 'solid' | 'outline' | 'transparent';
  color: 'secondaryColor' | 'disabledColor';
  loading?: boolean;
  disable?: boolean;
  width?: number;
  transparent?: boolean;
  handleButton: () => void;
}
