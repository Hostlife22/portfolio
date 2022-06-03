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
        </div>
      </div>
    </div>
  );
}

export default CardPortfolio;
