import cn from 'classnames';
import React from 'react';
import { FaCog } from 'react-icons/fa';
import { Theme } from '..';
import { ThemeColors } from '../../features/theme/theme.interface';
import { selectColor, setColor } from '../../features/theme/themeSlice';
import { colors } from '../../helpers/helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './StyleSwitcher.module.css';
import { IStyleSwitcherProps } from './StyleSwitcher.props';

function StyleSwitcher({ className }: IStyleSwitcherProps): JSX.Element {
  const [setting, setSetting] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectColor);

  React.useEffect(() => {
    document.documentElement.dataset.color = color;
    localStorage.setItem('color', color);
  }, [color]);

  React.useEffect(() => {
    const hideSwitcher = () => {
      if (setting) {
        setSetting(false);
      }
    };
    window.addEventListener('scroll', hideSwitcher);

    return () => {
      window.addEventListener('scroll', hideSwitcher);
    };
  }, [setting]);

  const handleChange = (selectedColor: ThemeColors) => {
    if (selectedColor !== color) {
      dispatch(setColor(selectedColor));
    }
  };

  return (
    <div className={cn(styles.styleSwitcher, className, { [styles.open]: setting })}>
      <div
        className={cn(styles.styleSwitcherToggler, styles.sIcon, styles[`${color}`])}
        onClick={() => setSetting((prev) => !prev)}
        title="Theme Colors">
        <FaCog />
      </div>
      <Theme className={styles.sIcon} />
      <h4>Theme Colors</h4>
      <div className={styles.colors}>
        {colors.map((c) => (
          <span
            key={c.name}
            className={styles[`color${c.name}`]}
            onClick={() => handleChange(c.color)}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSwitcher;
