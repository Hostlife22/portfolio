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
            Hello. I am a person, responsible with their work during working hours. I&apos;m
            interested in design and programming. I like to work on projects that entertain and
            inform.
          </p>
          <Link href="/cv">Open CV</Link>
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
