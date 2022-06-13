import cn from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './CardPortfolio.module.css';
import { ICardPortfolioProps } from './CardPortfolio.props';

function CardPortfolio({ className, project }: ICardPortfolioProps): JSX.Element {
  return (
    <div className={cn(styles.portfolioItem, className)}>
      <div className={styles.portfolioItemInner}>
        <div className={styles.portfolioImg}>
          <LazyLoadImage src={project.img} alt={project.name} effect="blur" />
          <div className={styles.portfolioMask}>
            <a
              href={project.githubLink}
              className={styles.portfolioLink}
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
            <a
              href={project.projectLink}
              className={styles.portfolioLink}
              target="_blank"
              rel="noreferrer">
              Project App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPortfolio;
