import { memo, useState } from 'react';

import StarIcon from '../../../assets/icons/star.svg';
import { HStack } from '../../redesigned/Stack';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    selectedStars?: number;
    size?: number;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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

    return (
        <HStack className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNumber, index) => (
                <StarIcon
                    className={classNames(cls.starIcon, {
                        [cls.selected]: isSelected,
                        [cls.hovered]: currentStarsCount >= starNumber,
                        [cls.normal]: currentStarsCount <= starNumber,
                    }, [])}
                    key={index}
                    width={size}
                    height={size}
                    onMouseEnter={onHoverStar(starNumber)}
                    onMouseLeave={onLeaveStar}
                    onClick={onClickStar(starNumber)}
                    data-testid={`CardRatingStar.${starNumber}`}
                    data-selectid={currentStarsCount >= starNumber}
                />
            ))}
        </HStack>
    );
});
