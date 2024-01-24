export type Mods = Record<string, boolean | string | undefined>;

export type AdditionalCls = Array<string | undefined>

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
