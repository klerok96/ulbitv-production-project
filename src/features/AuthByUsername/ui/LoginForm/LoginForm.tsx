import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.loginForm}>
      <Input
        autofocus
        placeholder={t('loginForm.login')}
        className={cls.input}
        type="text"
      />
      <Input
        placeholder={t('loginForm.password')}
        className={cls.input}
        type="text"
      />
      <Button className={cls.btn} onClick={() => {}}>
        {t('loginForm.btn')}
      </Button>
    </div>
  );
};
