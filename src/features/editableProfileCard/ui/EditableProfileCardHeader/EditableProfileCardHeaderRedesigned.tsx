import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';

import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderRedesignedProps {
    readonly: boolean | undefined;
    canEdit: boolean;
    btnEditHandler: () => void;
    btnCancelEditHandler: () => void;
    btnSaveHandler: () => void;
    additionalFeatureSlot?: ReactNode;
}

export const EditableProfileCardHeaderRedesigned = (props: EditableProfileCardHeaderRedesignedProps) => {
    const {
        canEdit,
        readonly,
        additionalFeatureSlot,
        btnEditHandler,
        btnCancelEditHandler,
        btnSaveHandler,
    } = props;

    const { t } = useTranslation('profile');

    const modsBtnEdit: Mods = {
        [cls.btnEditDisabled]: !canEdit,
    };

    const modsBtnCancel: Mods = {
        [cls.btnCancelReadonly]: readonly,
        [cls.btnCancelDisabled]: !canEdit,
    };

    return (
        <div className={cls.btnsBlockWrapper}>
            <CardUI padding="16" gap="16" borderRadius="16" className={cls.btnsBlock}>
                {readonly ? (
                    <>
                        <Button
                            className={classNames('', modsBtnEdit, [])}
                            onClick={btnEditHandler}
                        >
                            {t('Редактировать')}
                        </Button>
                        <Button
                            className={classNames('', modsBtnCancel, [])}
                        >
                            {t('Отменить')}
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={btnSaveHandler}>{t('Сохранить')}</Button>
                        <Button variant="auth" onClick={btnCancelEditHandler}>{t('Отменить')}</Button>
                    </>
                )}
                {additionalFeatureSlot && additionalFeatureSlot}
            </CardUI>
        </div>
    );
};
