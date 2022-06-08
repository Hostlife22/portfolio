import cn from 'classnames';
import React, { useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import styles from './CVScroll.module.css';
import { ICVSocialProps } from './CVScroll.props';

function CVSocial({ className, ...props }: ICVSocialProps): JSX.Element {
  const [scroll, setScroll] = React.useState<boolean>(false);
  const scrollRef = React.useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const scrollTop = () => {
      if (window.scrollY >= 200 && scrollRef.current) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', scrollTop);

    return () => {
      window.removeEventListener('scroll', scrollTop);
    };
  }, []);

  return (
    <a
      href="#"
      className={cn(styles.scrolltop, className, { [styles.showScroll]: scroll })}
      ref={scrollRef}>
      <BiUpArrowAlt />
    </a>
  );
}

export default CVSocial;
