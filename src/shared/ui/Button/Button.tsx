import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  Clear = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className, children, theme,
    type,
  } = props;

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type ?? 'button'}
      className={classNames(cls.button, {}, [cls[theme], className])}
    >
      {children}
    </button>
  );
};
