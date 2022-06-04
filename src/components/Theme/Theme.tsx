import cn from 'classnames';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Theme as ThemeEnum } from '../../features/theme/theme.interface';
import { selectTeme, setTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Theme.module.css';
import { IThemeProps } from './Theme.props';

function Theme({ className }: IThemeProps): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTeme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const nextTeheme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
    dispatch(setTheme(nextTeheme));
  };

  return (
    <div
      className={cn(styles.dayNight, className, theme === 'dark' ? styles.dark : styles.light)}
      onClick={handleChange}>
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </div>
  );
}

export default Theme;
