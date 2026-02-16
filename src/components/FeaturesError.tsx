import { FC } from 'react';
import type { IFeaturesErrorProps } from '@/types/types';
import styles from '../FeatureContent.module.css';

const FeaturesError: FC<IFeaturesErrorProps> = ({
  message,
  onRetry,
}: IFeaturesErrorProps) => {
  return (
    <div className={styles.content} role="alert">
      <p>Error: {message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
};

export { FeaturesError };
