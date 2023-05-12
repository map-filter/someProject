type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {

    const modsValues = Object.entries(mods)
                            .filter(([key, value]) => Boolean(value))
                            .map(([key, value]) => key);

    const classNamesArr = [
        cls,
        ...additional,
        ...modsValues
    ].join(' ');

    return classNamesArr;
};