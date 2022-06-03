import { CardService, Row, Section, Title } from '../../components';
import { services } from '../../helpers/helpers';
import styles from './Services.module.css';

function Services() {
  return (
    <Section className={styles.service}>
      <Row>
        <Title>Services</Title>
      </Row>
      <Row>
        {services.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </Row>
    </Section>
  );
}

export default Services;
