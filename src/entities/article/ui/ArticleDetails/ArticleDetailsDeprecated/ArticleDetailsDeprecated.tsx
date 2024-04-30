import { Article, ArticleBlocks } from '../../../model/types/article';

import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

import cls from './ArticleDetailsDeprecated.module.scss';

interface ArticleDetailsDeprecatedProps {
    className?: string;
    data?: Article;
    renderBlock: (block: ArticleBlocks) => JSX.Element | null;
}

export const ArticleDetailsDeprecated = (props: ArticleDetailsDeprecatedProps) => {
    const { className, data, renderBlock } = props;

    return (
        <>
            <Avatar
                className={cls.avatar}
                src={data?.img}
                size={200}
                alt={data?.title}
            />

            <div
                className={cls.title}
                data-testid="ArticleDetails.Info"
            >
                <Text
                    size={TextSize.L}
                    title={data?.title}
                    description={data?.subtitle}
                />
            </div>

            <div className={cls.metaWrapper}>
                <div className={cls.metaInner}>
                    <EyeIcon className={cls.icon} />
                    <span>{data?.views}</span>
                </div>
                <div className={cls.metaInner}>
                    <CalendarIcon className={cls.icon} />
                    <span>{data?.createdAt}</span>
                </div>
            </div>

            <div className={cls.blocks}>
                {data?.blocks.map(renderBlock)}
            </div>
        </>
    );
};
