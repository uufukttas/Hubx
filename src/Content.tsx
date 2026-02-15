import { FC, useEffect, useState } from 'react';
import { BottomTabs } from './components';
import { FeaturesError, FeaturesLoading } from './components';
import { FeatureContent } from './FeatureContent';
import { useFeatures } from './hooks/useFeatures';
import styles from './FeatureContent.module.css';

const Content: FC = () => {
  const {
    data: features = [],
    error,
    isLoading,
    isError,
    refetch,
  } = useFeatures();
  const [activeTabId, setActiveTabId] = useState<number>(0);

  useEffect(() => {
    setActiveTabId(features[0]?.id ?? 0);
  }, []);

  if (isLoading) {
    return <FeaturesLoading />;
  }

  if (isError) {
    return (
      <FeaturesError
        message={error ? error.message : 'Failed to load features'}
        onRetry={() => void refetch()}
      />
    );
  }

  return (
    <div className={styles.content}>
      <FeatureContent features={features} activeTabId={activeTabId} />
      <BottomTabs
        activeTabId={activeTabId}
        features={features}
        onChange={(tabId: number) => setActiveTabId(tabId)}
      />
    </div>
  );
};

export { Content };
