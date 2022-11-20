import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme, Modal } from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((curS) => !curS);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={handleToggleModal}
        className={classNames(cls.links)}
        theme={ButtonTheme.ClearInverted}
      >
        {t('widget.navbar')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={handleCloseModal}>
        test
      </Modal>
    </div>
  );
};
