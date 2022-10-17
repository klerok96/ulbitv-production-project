import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './router';

export const App = () => {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
