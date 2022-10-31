import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  Clear = 'clear',
  Outline = 'outline',
}

interface ButtonProps {
  className?: string;
  theme?: ThemeButton;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    className, children, theme,
    type, onClick,
  } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      className={classNames(cls.button, {}, [cls[theme], className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
