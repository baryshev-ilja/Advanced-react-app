import { useTranslation } from 'react-i18next';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/page';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = (props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page className={className}>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} size="sizeL" />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
