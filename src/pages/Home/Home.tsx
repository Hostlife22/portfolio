import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Typed from 'typed.js';
import { Link, Row, Section } from '../../components';
import { ImgAvatar } from '../../images';
import styles from './Home.module.css';

function Home() {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current as HTMLSpanElement, {
      strings: ['Web Designer', 'Web Developer'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section className={styles.home}>
      <Row className={styles.homeRow}>
        <div className={styles.homeInfo}>
          <h3 className={styles.hello}>
            Hello, my name is <span className={styles.name}>Serafim Sen</span>
          </h3>
          <h3 className={styles.myProfession}>
            I&apos; m, a{' '}
            <span className={styles.typing} ref={typedRef}>
              Web Developer
            </span>
          </h3>
          <p>
            Hello. I am a person, responsible with their work during working hours. I&apos;m
            interested in design and programming. I like to work on projects that entertain and
            inform.
          </p>
          <Link href="/cv">Open CV</Link>
        </div>
        <div className={styles.homeImg}>
          <LazyLoadImage src={ImgAvatar} alt="Avatar" effect="blur" />
        </div>
      </Row>
    </Section>
  );
}

export default Home;
