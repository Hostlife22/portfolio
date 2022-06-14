import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { BiDownload, BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StyleSwitcher } from '../../components';
import { selectScaleCV } from '../../features/scaleCV/scaleCVSlice';
import { useAppSelector } from '../../hooks';
import { ImgAvatarCV } from '../../images';

import styles from './CVHome.module.css';
import { ICVHomeProps } from './CVHome.props';

const CVHome = forwardRef(
  (
    { children, className, handler, ...props }: ICVHomeProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const iscv = useAppSelector(selectScaleCV);

    return (
      <section
        className={cn(styles.home, className, { [styles.cv]: iscv })}
        ref={ref}
        {...props}
        id="home">
        <div className={cn(styles.homeContainer, styles.section, styles.bdGrid)}>
          <div className={cn(styles.homeData, styles.bdGrid)}>
            <LazyLoadImage
              src={ImgAvatarCV}
              alt="Avatar"
              className={styles.homeImg}
              effect="blur"
            />
            <h1 className={styles.homeTitle}>
              Sen <b>Serafim</b>
            </h1>
            <h3 className={styles.homeProfession}>Web developer</h3>
          </div>
          <div className={cn(styles.homeAddres, styles.bdGrid)}>
            <span className={styles.homeInformation}>
              <BiMap /> Belarus - Grodno
            </span>
            <span className={styles.homeInformation}>
              <BiEnvelope /> sima.serafim2@mail.ru
            </span>
            <span className={styles.homeInformation}>
              <BiPhone /> +375 29 740 1127
            </span>
          </div>
        </div>

        <StyleSwitcher className={styles.changeTheme} />
        <div className={styles.generatePdf} title="Generate PDF" onClick={handler}>
          <BiDownload />
        </div>
      </section>
    );
  },
);

export default CVHome;
