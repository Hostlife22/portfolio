import cn from 'classnames';
import { tags } from '../../helpers/helpers';
import styles from './TagSkills.module.css';
import { ITagSkillsProps } from './TagSkills.props';

function TagSkills({ className }: ITagSkillsProps): JSX.Element {
  return (
    <div className={cn(styles.tagSkills, className)}>
      <h3 className={styles.tagTitle}>Languages and Tools</h3>
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <span className={styles.tagItem} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagSkills;
