import cn from 'classnames';
import { Link, Row, TagSkills } from '..';
import { personalInfo } from '../../helpers/helpers';
import InfoItem from '../InfoItem/InfoItem';
import styles from './PersonalInfo.module.css';
import { IPersonalProps } from './PersonalInfo.props';

function PersonalInfo({ className }: IPersonalProps): JSX.Element {
  return (
    <div className={cn(styles.personalInfo, className)}>
      <Row>
        {personalInfo.map((item, i) => (
          <InfoItem key={item.title} item={item} link={personalInfo.length - 1 === i} />
        ))}
      </Row>
      <Row>
        <div className={styles.buttons}>
          <Link href="/contact" className={styles.hireMe}>
            Hire Me
          </Link>
        </div>
      </Row>
      <TagSkills />
    </div>
  );
}

export default PersonalInfo;
