import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import cls from './PageError.module.scss';

export const PageError: React.FC = () => {
  const { t } = useTranslation();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={cls.pageError}>
      <p>{t('pageError.message')}</p>
      <Button onClick={handleRefresh}>
        {t('pageError.refreshBtn')}
      </Button>
    </div>
  );
};
