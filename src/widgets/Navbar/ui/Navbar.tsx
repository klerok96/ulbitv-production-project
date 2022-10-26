import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('main');

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.Secondary}
          to="/"
          className={classNames(cls.mainLink)}
        >
          {t('main')}
        </AppLink>
        <AppLink theme={AppLinkTheme.Secondary} to="/about">
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
