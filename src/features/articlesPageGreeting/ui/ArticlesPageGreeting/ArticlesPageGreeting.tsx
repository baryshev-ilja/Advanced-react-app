import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { saveUserJsonSettings, useUserJsonSettings } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';

export const ArticlesPageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useUserJsonSettings();
    const dispatch = useAppDispatch();
    const isMobile = useDevice();

    const onCloseHandler = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveUserJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const textContent = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            description={t('Смотрите и читайте статьи на разные темы')}
        />
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} lazy onClose={onCloseHandler}>
                {textContent}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} lazy onClose={onCloseHandler}>
            {textContent}
        </Modal>
    );
});
