import { Card, PersonalInfo, Row, Section, Skills, Title } from '../../components';
import { education, experience } from '../../helpers/helpers';
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
                I am a focused, dedicated and confident individual, with experience in creating user
                and mobile friendly Websites. I have hands on experience using html, CSS,
                JavaScript, Bootstrap and Flexbox to create responsive software applications and
                implement design templates. I love exploring new technologies and being a
                practitioner, I like to stay on top of latest trends. I try to leave every line of
                code I write more readable, accessible, and modular.
              </p>
            </div>
          </Row>
          <Row>
            <PersonalInfo />
            <Skills />
          </Row>
          <Row>
            <Card title="Education" items={education} />
            <Card title="Experience" items={experience} />
          </Row>
        </div>
      </Row>
    </Section>
  );
}

export default About;
