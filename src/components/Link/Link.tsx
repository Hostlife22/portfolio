import cn from 'classnames';
import React from 'react';
import { Link as LinkItem } from 'react-router-dom';
import styles from './Link.module.css';
import { ILinkProps } from './Link.props';

function Link({ className, children, href, btn, type, target }: ILinkProps): JSX.Element {
  if (btn) {
    return (
      <button className={cn(styles.btn, className)} type={type || 'submit'}>
        {children}
      </button>
    );
  }
  return (
    <LinkItem to={href} className={cn(styles.btn, className)} target={target}>
      {children}
    </LinkItem>
  );
}

export default Link;
