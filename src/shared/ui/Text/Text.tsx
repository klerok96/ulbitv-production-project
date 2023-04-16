import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  Primary = 'primary',
  Error = 'error',
}

type Props = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
};

export const Text = (props: Props) => {
  const { className, text, title, theme = TextTheme.Primary } = props;
  return (
    <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
