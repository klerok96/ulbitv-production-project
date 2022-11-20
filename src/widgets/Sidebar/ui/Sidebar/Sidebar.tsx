import { PropsWithChildren, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

import {
  AboutIcon,
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  MainIcon,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        className={cls.collapseBtn}
        testId="sidebar-toggle"
        theme={ButtonTheme.BackgroundInverted}
        type="button"
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <nav className={cls.items}>
        <AppLink
          theme={AppLinkTheme.Secondary}
          to={RoutePath[AppRoutes.Main]}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('navbar.main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.Secondary}
          to={RoutePath[AppRoutes.About]}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('navbar.about')}</span>
        </AppLink>
      </nav>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.langSwitcher} short={collapsed} />
      </div>
    </div>
  );
};
