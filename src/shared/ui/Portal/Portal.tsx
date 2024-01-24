import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

export const Portal = (props : PortalProps) => {
    const {
        children,
        container = document.getElementById('root') as HTMLElement,
    } = props;

    return createPortal(children, container);
};
