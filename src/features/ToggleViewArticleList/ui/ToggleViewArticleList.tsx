import { ArticleView } from '@/entities/article';
import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tiled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './ToggleViewArticleList.module.scss';

interface ToggleViewArticleListProps {
    className?: string;
    view?: string;
    onClickView?: (view: ArticleView) => void;
}

export const ToggleViewArticleList = (props: ToggleViewArticleListProps) => {
    const { className, view, onClickView } = props;

    const onClickHandler = (newView: ArticleView) => () => {
        onClickView?.(newView);
    };

    return (
        <div className={classNames(cls.toggleViewArticleList, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClickHandler('GRID')}
            >
                <TileIcon className={classNames(cls.icon, { [cls.notSelected]: view !== 'GRID' })} />
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onClickHandler('LIST')}
            >
                <ListIcon className={classNames(cls.icon, { [cls.notSelected]: view !== 'LIST' })} />
            </Button>
        </div>
    );
};
