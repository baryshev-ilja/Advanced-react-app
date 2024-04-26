import { useTranslation } from 'react-i18next';

import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface EditableProfileCardHeaderDeprecatedProps {
    canEdit: boolean;
    readonly: boolean | undefined;
    btnEditHandler: () => void;
    btnCancelEditHandler: () => void;
    btnSaveHandler: () => void;
}

export const EditableProfileCardHeaderDeprecated = (props: EditableProfileCardHeaderDeprecatedProps) => {
    const {
        canEdit,
        readonly,
        btnEditHandler,
        btnCancelEditHandler,
        btnSaveHandler,
    } = props;

    const { t } = useTranslation('profile');

    return (
        <HStack justify="between" max>
            <Text
                title={t('Профиль')}
            />
            {canEdit && (
                <HStack gap="16">
                    {readonly ? (
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            onClick={btnEditHandler}
                            data-testid="EditableProfileCardHeader.EditBtn"
                        >
                            {t('Редактировать')}
                        </ButtonDeprecated>
                    )
                        : (
                            <>
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_ERROR}
                                    onClick={btnCancelEditHandler}
                                    data-testid="EditableProfileCardHeader.CancelBtn"
                                >
                                    {t('Отменить')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={btnSaveHandler}
                                    data-testid="EditableProfileCardHeader.SaveBtn"
                                >
                                    {t('Сохранить')}
                                </ButtonDeprecated>
                            </>
                        )}
                </HStack>
            )}
        </HStack>
    );
};
