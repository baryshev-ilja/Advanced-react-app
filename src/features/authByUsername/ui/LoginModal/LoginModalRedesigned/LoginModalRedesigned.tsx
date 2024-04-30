import { Suspense } from 'react';

import { LoginFormAsync } from '../../LoginForm/LooginForm.async';

import {
    LoginModalRedesignedSkeleton,
} from './LoginModalRedesignedSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';

interface LoginModalRedesignedProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isSuccessAuth?: boolean;
}

export const LoginModalRedesigned = (props: LoginModalRedesignedProps) => {
    const {
        className,
        isOpen,
        onClose,
        isSuccessAuth,
    } = props;
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isUserSuccessAuth={isSuccessAuth}
            lazy
        >
            <Suspense fallback={<LoginModalRedesignedSkeleton />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
