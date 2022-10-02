type Mods = Record<string, boolean | string>;

type ClassNames = (cls: string, mods: Mods, additional: string[]) => string;

export const classNames: ClassNames = (cls, mods, additional) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key),
  ].join(" ");
};
