import cn from 'classnames';
import React from 'react';
import styles from './CardPortfolio.module.css';
import { ICardPortfolioProps } from './CardPortfolio.props';

function CardPortfolio({ className, project }: ICardPortfolioProps): JSX.Element {
  return (
    <div className={cn(styles.portfolioItem, className)}>
      <div className={styles.portfolioItemInner}>
        <div className={styles.portfolioImg}>
          <img src={project.img} alt={project.name} />
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
