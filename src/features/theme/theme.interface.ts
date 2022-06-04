export interface IThemeState {
  theme: Theme;
  color: ThemeColors;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum ThemeColors {
  Red = 'red',
  Orange = 'orange',
  Green = 'green',
  Blue = 'blue',
  Purple = 'purple',
}
