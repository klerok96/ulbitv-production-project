import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  Clear = 'clear',
  Outline = 'outline',
  Background = 'background',
  BackgroundInverted = 'background-inverted',
  ClearInverted = 'clear-inverted',
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  Xl = 'size-xl',
}

interface ButtonProps {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  testId?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { className, children, theme, type, size, testId, disabled, onClick } =
    props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: !!theme,
    [cls[size]]: !!size,
    [cls.disabled]: !!disabled,
  };

  return (
    <button
      disabled={disabled}
      data-testid={testId}
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      className={classNames(cls.button, mods, [className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
