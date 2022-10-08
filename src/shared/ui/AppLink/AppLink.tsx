import cls from "./AppLink.module.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { PropsWithChildren } from "react";

export enum AppLinkTheme {
  Primary = "primary",
  Secondary = "secondary",
}

interface AppLinkProps {
  className?: string;
  to: string;
  theme?: AppLinkTheme;
}

export const AppLink: React.FC<PropsWithChildren<AppLinkProps>> = (props) => {
  const { className, children, to, theme = AppLinkTheme.Primary } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [cls[theme], className])}
    >
      {children}
    </Link>
  );
};
