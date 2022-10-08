import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme, ThemeSwitcher } from "shared/ui";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.Secondary}
          to="/"
          className={classNames(cls.mainLink)}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.Secondary} to="/about">
          About
        </AppLink>
      </div>
    </div>
  );
};
