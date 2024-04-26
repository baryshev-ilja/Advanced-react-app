import { useState } from 'react';

import { ArticleView } from '@/entities/article';
import ListIcon from '@/shared/assets/newIcons/toggle-list-icon.svg';
import GridIcon from '@/shared/assets/newIcons/toggle-table-icon.svg';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';

import cls from './ToggleViewRedesigned.module.scss';

interface ToggleViewRedesignedProps {
    className?: string;
    view?: string;
    onClickView?: (view: ArticleView) => void;
}

export const ToggleViewRedesigned = (props: ToggleViewRedesignedProps) => {
    const { className, view, onClickView } = props;
    const [currentView, setCurrentView] = useState(view);

    const onClickHandler = (newView: ArticleView) => () => {
        onClickView?.(newView);
        setCurrentView(newView);
    };

    const mods: Mods = {
        [cls.listView]: currentView === 'LIST',
        [cls.gridView]: currentView === 'GRID',
    };

    return (
        <Button
            variant="viewSwitcher"
            className={classNames(cls.toggleView, mods, [className])}
            tagName="div"
        >
            <Icon
                someClassName={cls.listIcon}
                Svg={ListIcon}
                clickable
                onClick={onClickHandler('LIST')}
                width={20}
                height={20}
            />
            <Icon
                someClassName={cls.gridIcon}
                Svg={GridIcon}
                clickable
                onClick={onClickHandler('GRID')}
                width={20}
                height={20}
            />
        </Button>
    );
};
