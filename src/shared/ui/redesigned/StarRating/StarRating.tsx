import { memo, useState } from 'react';

import StarIcon from '../../../assets/icons/star.svg';
import StarIconNew from '../../../assets/newIcons/star-favorite-icon.svg';
import { HStack } from '../../redesigned/Stack';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    /** onSelect - Функция, которая выбирает кол-во звезд */
    onSelect?: (starsCount: number) => void;
    /** selectedStars - Кол-во уже выбранных звезд */
    selectedStars?: number;
    /** size - Размер иконок-звезд */
    size?: number;
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        selectedStars = 0,
        size,
    } = props;

    /**
     * currentStarsCount - В это состояние будет записываться номер звезды,
     * на которую сейчас навели мышкой. По умолчанию равен нулю.
     * */
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

    /**
     * isSelected - В это состояние будет записываться номер звезды,
     * на которую кликнули. Зависит от родительского состояния.
     * */
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    /**
     * onHoverStar - Функция, которая будет вызываться как коллбэк, когда мышкой наводят на звезду.
     * Чтобы знать на какую именно звезду наводят, используется замыкание. В первую функцию параметром
     * передается номер звезды, во время обхождения массива звезд, методом map. И уже после этого она
     * может вызываться как коллбэк (вызываться будет вторая функция, с замкнутым значением starCount)
     * */
    const onHoverStar = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starCount);
        }
    };

    /**
     * onLeaveStar - Функция, которая будет вызываться как коллбэк, когда курсор мышки покидает звезду.
     * */
    const onLeaveStar = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    /**
     * onClickStar - Функция, которая будет вызываться как коллбэк, когда мышкой нажимают на звезду.
     * Чтобы знать на какую именно звезду нажимают, используется замыкание. В первую функцию параметром
     * передается номер звезды, во время обхождения массива звезд, методом map. И уже после этого она
     * может вызываться как коллбэк (вызываться будет вторая функция, с замкнутым значением starCount)
     * */
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

    const starIconProps = (starNumber: number) => ({
        className: classNames(starIconClasses, {
            [cls.selected]: isSelected,
            [cls.hovered]: currentStarsCount >= starNumber,
            [cls.normal]: currentStarsCount <= starNumber,
        }, []),
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
                    key={index}
                    name="isAppRedesigned"
                    on={<StarIconNew key={index} {...starIconProps(starNumber)} />}
                    off={<StarIcon key={index} {...starIconProps(starNumber)} />}
                />
            ))}
        </HStack>
    );
});
