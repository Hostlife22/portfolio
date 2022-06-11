import { FaEnvelope, FaGlobeEurope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Form, Row, Section, Title } from '../../components';
import styles from './Contact.module.css';

function Contact() {
  return (
    <Section className={styles.contact}>
      <Row>
        <Title>Contact Me</Title>
      </Row>
      <h3 className={styles.contactTitle}>Have You Any Questions ?</h3>
      <h4 className={styles.contactSubTitle}>I&apos;M AT YOUR SERVICES</h4>
      <Row>
        <div className={styles.contactInfoItem}>
          <div className={styles.icon}>
            <FaPhone />
          </div>
          <h4>Call Us On</h4>
          <p>+375 29 740 1127</p>
        </div>
        <div className={styles.contactInfoItem}>
          <div className={styles.icon}>
            <FaMapMarkerAlt />
          </div>
          <h4>Office</h4>
          <p>Grodno</p>
        </div>
        <div className={styles.contactInfoItem}>
          <div className={styles.icon}>
            <FaEnvelope />
          </div>
          <h4>Email</h4>
          <p>sima.serafim2@mail.ru</p>
        </div>
        <div className={styles.contactInfoItem}>
          <div className={styles.icon}>
            <FaGlobeEurope />
          </div>
          <h4>Website</h4>
          <p>www.domain.com</p>
        </div>
      </Row>
      <h3 className={styles.contactTitle}>SEND ME AN EMAIL</h3>
      <h4 className={styles.contactSubTitle}>I&apos;M VERY RESPONSIVE TO MESSAGES</h4>
      <Form />
    </Section>
  );
}

export default Contact;
