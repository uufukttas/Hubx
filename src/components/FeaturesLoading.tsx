import { FC } from 'react';
import styles from '../FeatureContent.module.css';

const FeaturesLoading: FC = () => {
  return (
    <div className={styles.content} role="status" aria-label="Loading features">
      <p>Loading...</p>
    </div>
  );
};

export { FeaturesLoading };
