/**
 * Mods - Объект с перечислением {string: boolean/string/undefined}
 * Это классы (string), которые будут применяться только если их значение равно true
 */
export type Mods = Record<string, boolean | string | undefined>;

/**
 * AdditionalCls - Массив с перечислением (string) классов.
 * Это классы (string), которые будут применяться всегда, если они переданы
 */
export type AdditionalCls = Array<string | undefined>

/**
 * classNames - Вспомогательная функция, которая собирает все переданные классы (cls, mods, additional),
 * обрабатывает их (фильтрует) и объединяет в одну строку с помощью метода join(' ')
 */
export function classNames(cls: string, mods: Mods = {}, additional: AdditionalCls = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
