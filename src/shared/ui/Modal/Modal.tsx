import React, { PropsWithChildren, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui';
import cls from './Modal.module.scss';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

export const Modal: React.FC<ModalProps> = React.memo((props) => {
  const { isOpen, children, onClose } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeydown);
    }

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isOpen, handleKeydown]);

  return (
    <Portal>
      <div className={classNames(cls.modal, mods)}>
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});
