import { Link, Row, Section } from '../../components';
import styles from './Home.module.css';

function Home() {
  return (
    <Section className={styles.home}>
      <Row>
        <div className={styles.homeInfo}>
          <h3 className={styles.hello}>
            Hello, my name is <span className={styles.name}>Serafim Sen</span>
          </h3>
          <h3 className={styles.myProfession}>
            I&apos; m, a <span className={styles.typing}>web designer</span>
          </h3>
          <p>
            I&apos; m web Designer with extensive experience for over 10 years. My expertise is to
            create and website design, graphic design, and many more...
          </p>
          {/* <a href="#contact" className={cn(styles.btn, styles.hireMe)}>
              Hire Me
            </a> */}
          <Link href="/contact">Hire Me</Link>
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