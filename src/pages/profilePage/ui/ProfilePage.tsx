import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { EditableProfileCardHeader } from '@/features/editableProfileCard';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Page } from '@/widgets/page';
import { ProfileCardWidget } from '@/widgets/profileCardWidget';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <StickyContentLayout
                    content={(
                        <Page
                            className={classNames('', {}, [className])}
                            data-testid="Profile-page"
                        >
                            <ProfileCardWidget id={id} />
                        </Page>
                    )}
                    rightbar={<EditableProfileCardHeader />}
                />
            )}
            off={(
                <Page
                    className={classNames('', {}, [className])}
                    data-testid="Profile-page"
                >
                    <ProfileCardWidget id={id} />
                </Page>
            )}
        />
    );
});

export default ProfilePage;
