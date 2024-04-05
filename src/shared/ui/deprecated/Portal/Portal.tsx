import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Portal = (props : PortalProps) => {
    const {
        children,
        container = document.getElementById('root') as HTMLElement,
    } = props;

    return createPortal(children, container);
};
