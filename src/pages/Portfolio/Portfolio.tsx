import { CardPortfolio, Row, Section, Title } from '../../components';
import { portfolio } from '../../helpers/helpers';
import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <Section className={styles.portfolio}>
      <Row>
        <Title>Portfolio</Title>
      </Row>
      <Row>
        <div className={styles.portfolioHeading}>
          <h2>My Last Projects :</h2>
        </div>
      </Row>
      <Row>
        {portfolio.map((p) => (
          <CardPortfolio key={p.id} project={p} />
        ))}
      </Row>
    </Section>
  );
}

export default Portfolio;
