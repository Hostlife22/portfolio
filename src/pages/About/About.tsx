import { Card, PersonalInfo, Row, Section, Skills, Title } from '../../components';
import { education } from '../../helpers/helpers';
import styles from './About.module.css';

function About() {
  return (
    <Section className={styles.about}>
      <Row>
        <Title>About me</Title>
      </Row>
      <Row>
        <div className={styles.aboutContent}>
          <Row>
            <div className={styles.aboutText}>
              <h3>
                I&apos; m Serafim Sen and <span>Web Developer</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates aspernatur
                suscipit dolorem praesentium commodi omnis distinctio accusantium provident hic
                voluptas, doloremque repudiandae? Quasi optio placeat quos labore. Error, eos. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates aspernatur
                suscipit dolorem praesentium commodi omnis distinctio accusantium provident hic
                voluptas, doloremque repudiandae? Quasi optio placeat quos labore. Error, eos.
              </p>
            </div>
          </Row>
          <Row>
            <PersonalInfo />
            <Skills />
          </Row>
          <Row>
            <Card title="Education" items={education} />
            <Card title="Experience" items={education} />
          </Row>
        </div>
      </Row>
    </Section>
  );
}

export default About;
