import React, { Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';

const LoginForm = React.lazy(() => import('../LoginForm/LoginForm'));

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
