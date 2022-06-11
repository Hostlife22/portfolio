import cn from 'classnames';
import styles from './TagSkills.module.css';
import { ITagSkillsProps } from './TagSkills.props';

function TagSkills({ className }: ITagSkillsProps): JSX.Element {
  return (
    <div className={cn(styles.tagSkills, className)}>
      <h3 className={styles.tagTitle}>Languages and Tools</h3>
      <div className={styles.tagContainer}>
        <span className={styles.tagItem}>HTML</span>
        <span className={styles.tagItem}>CSS</span>
        <span className={styles.tagItem}>Javascript</span>
        <span className={styles.tagItem}>ES2015</span>
        <span className={styles.tagItem}>ES2016</span>
        <span className={styles.tagItem}>React</span>
        <span className={styles.tagItem}>Next</span>
        <span className={styles.tagItem}>SASS</span>
        <span className={styles.tagItem}>LESS</span>
        <span className={styles.tagItem}>Github</span>
        <span className={styles.tagItem}>Webpack</span>
        <span className={styles.tagItem}>Gulp</span>
        <span className={styles.tagItem}>Babel</span>
        <span className={styles.tagItem}>Bootstrap</span>
        <span className={styles.tagItem}>Node</span>
        <span className={styles.tagItem}>Git</span>
        <span className={styles.tagItem}>mongoDb</span>
        <span className={styles.tagItem}>Express</span>
        <span className={styles.tagItem}>Eslint</span>
        <span className={styles.tagItem}>Stylelint</span>
        <span className={styles.tagItem}>Prettier</span>
      </div>
    </div>
  );
}

export default TagSkills;
