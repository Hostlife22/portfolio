import { Theme, ThemeColors } from './theme.interface';

export const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (['light', 'dark'].includes(theme)) {
    return theme === 'light' ? Theme.Light : Theme.Dark;
  }
  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return Theme.Light;

  return Theme.Dark;
};

export const getColor = (): ThemeColors => {
  const color = `${window?.localStorage?.getItem('color')}`;
  if (['red', 'orange', 'green', 'blue', 'purple'].includes(color)) return color as ThemeColors;

  return ThemeColors.Red;
};
