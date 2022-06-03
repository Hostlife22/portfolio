import cn from 'classnames';
import React from 'react';
import { Link as LinkItem } from 'react-router-dom';
import styles from './Link.module.css';
import { ILinkProps } from './Link.props';

function Link({ className, children, href }: ILinkProps): JSX.Element {
  return (
    <LinkItem to={href} className={cn(styles.btn, className)}>
      {children}
    </LinkItem>
  );
}

export default Link;
