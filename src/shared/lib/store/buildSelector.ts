import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

/** Selector - Тип для функции селектора, которая получает какие-то данные из state */
type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
/** Hook - Тип для useSelectorHook. В него передаются аргументы из селектора, если они есть */
type Hook<T, Args extends any[]> = (...args: Args) => T;
/** Result - Тип возвращаемого значения утилиты buildSelector. Возвращается хук useSelectorHook и сам селектор */
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

/**
 * buildSelector - Вспомогательная утилита, для более лаконичного использования useSelector.
 * Создает 'обвязку' вокруг обычного useSelector, и позволяет также передавать аргументы в selector
 * помимо state. Возвращает кастомный хук useSelectorHook, который потом в коде можно использовать
 * вместо обычной конструкции useSelector(selector)
 */
export function buildSelector<T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> {
    const useSelectorHook: Hook<T, Args> = (...args: Args) => {
        return useSelector((state: StateSchema) => selector(state, ...args));
    };

    return [useSelectorHook, selector];
}
