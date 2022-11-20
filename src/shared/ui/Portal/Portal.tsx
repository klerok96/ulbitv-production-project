import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps extends PropsWithChildren {
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { element = document.body, children } = props;

  return createPortal(children, element);
};
