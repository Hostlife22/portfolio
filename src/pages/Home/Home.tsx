import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link, Row, Section } from '../../components';
import styles from './Home.module.css';

function Home() {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current as HTMLSpanElement, {
      strings: ['Web Designer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 60,
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
              web designer
            </span>
          </h3>
          <p>
            I&apos; m web Designer with extensive experience for over 10 years. My expertise is to
            create and website design, graphic design, and many more...
          </p>
          <Link href="" btn>
            Download CV
          </Link>
        </div>
        <div className={styles.homeImg}>
          <img
            src="https://megakebabs.herokuapp.com/packs/media/images/user-72484b17d9f5677d9fa3d9b2363ef633.jpg"
            alt="Avatar"
          />
        </div>
      </Row>
    </Section>
  );
}

export default Home;
