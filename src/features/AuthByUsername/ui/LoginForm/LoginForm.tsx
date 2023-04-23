import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Button, ButtonTheme, Input } from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDynamicModelLoader } from 'shared/lib/hooks/useDynamicModelLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

const initialReducers = {
  loginForm: loginReducer,
};

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  useDynamicModelLoader({
    removeAfterUnmount: true,
    reducers: initialReducers,
  });

  const onChangeUsername = useCallback(
    (v: string) => {
      dispatch(loginActions.setUsername(v));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (v: string) => {
      dispatch(loginActions.setPassword(v));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    // @ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={cls.loginForm}>
      <Text title={t('loginForm.title')} />
      {error && <Text text={error} theme={TextTheme.Error} />}
      <Input
        autofocus
        placeholder={t('loginForm.login')}
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
        type="text"
      />
      <Input
        placeholder={t('loginForm.password')}
        className={cls.input}
        onChange={onChangePassword}
        value={password}
        type="text"
      />
      <Button
        disabled={isLoading}
        theme={ButtonTheme.Outline}
        className={cls.btn}
        onClick={onLoginClick}
      >
        {t('loginForm.btn')}
      </Button>
    </div>
  );
};

export default LoginForm;
