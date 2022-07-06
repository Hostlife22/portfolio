import cn from 'classnames';
import styles from './InfoItem.module.css';
import { IInfoItemProps } from './InfoItem.props';

function InfoItem({ className, link, item, ...props }: IInfoItemProps): JSX.Element {
  return (
    <div className={cn(styles.infoItem, className)} {...props}>
      <p>
        {item.title} :{' '}
        <span>
          {!link ? (
            item.value
          ) : (
            <a href={item.value} target="_blank" rel="noreferrer">
              www.linkedin.com
            </a>
          )}
        </span>
      </p>
    </div>
  );
}

export default InfoItem;
