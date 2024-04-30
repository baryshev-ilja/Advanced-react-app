import { LoginModalDeprecated } from './LoginModalDeprecated/LoginModalDeprecated';
import { LoginModalRedesigned } from './LoginModalRedesigned/LoginModalRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isSuccessAuth?: boolean;

}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
        isSuccessAuth,
    } = props;
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <LoginModalRedesigned
                    className={className}
                    isOpen={isOpen}
                    onClose={onClose}
                    isSuccessAuth={isSuccessAuth}
                />
            )}
            off={(
                <LoginModalDeprecated
                    className={className}
                    isOpen={isOpen}
                    onClose={onClose}
                    isSuccessAuth={isSuccessAuth}
                />
            )}
        />
    );
};
