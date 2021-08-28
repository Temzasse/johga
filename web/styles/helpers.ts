import { theme } from "./styled";

type Theme = typeof theme;
type ThemeKey = keyof Theme;

export function themeProp<P extends string, T extends ThemeKey>(
  prop: P,
  themeKey: T,
  getStyles: (token: string) => any
) {
  return Object.values(theme[themeKey]).reduce(
    (acc, { token }) => {
      const t = token as keyof Theme[T];
      acc[prop][t] = getStyles(`$${t}`);
      return acc;
    },
    { [prop]: {} } as {
      [prop in P]: { [token in keyof Theme[T]]: any }; // TODO: fix any
    }
  );
}
