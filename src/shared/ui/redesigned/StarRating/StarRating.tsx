import { memo, useState } from 'react';

import StarIcon from '../../../assets/icons/star.svg';
import StarIconNew from '../../../assets/newIcons/star-favorite-icon.svg';
import { HStack } from '../../redesigned/Stack';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    selectedStars?: number;
    size?: number;
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        selectedStars = 0,
        size,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHoverStar = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starCount);
        }
    };

    const onLeaveStar = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClickStar = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrentStarsCount(starCount);
            setIsSelected(true);
        }
    };

    const stars = [1, 2, 3, 4, 5];

    const starClasses = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => `${cls.starRating}`,
        off: () => '',
    });

    const starIconClasses = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => `${cls.starIconNew}`,
        off: () => `${cls.starIcon}`,
    });

    const starIconProps = (starNumber: number, index: number) => ({
        className: classNames(starIconClasses, {
            [cls.selected]: isSelected,
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.normal]: currentStarsCount <= starNumber,
        }, []),
        key: index,
        width: size,
        height: size,
        onMouseEnter: onHoverStar(starNumber),
        onMouseLeave: onLeaveStar,
        onClick: onClickStar(starNumber),
        'data-testid': `CardRatingStar.${starNumber}`,
        'data-selectid': currentStarsCount >= starNumber,
    });

    return (
        <HStack className={classNames(starClasses, {}, [className])}>
            {stars.map((starNumber, index) => (
                <ToggleFeatures
                    name="isAppRedesigned"
                    on={<StarIconNew {...starIconProps(starNumber, index)} />}
                    off={<StarIcon {...starIconProps(starNumber, index)} />}
                />
            ))}
        </HStack>
    );
});
