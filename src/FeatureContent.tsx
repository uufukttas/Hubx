import { FC, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroductionBlock, PhoneMockup } from './components';
import type { IFeature, IFeatureContentProps } from '@/types';
import styles from './FeatureContent.module.css';

const FeatureContent: FC<IFeatureContentProps> = ({
  activeTabId,
  features,
}: IFeatureContentProps) => {
  const activeFeature: IFeature = useMemo(
    () =>
      (features.find(
        (feature: IFeature) => feature.id === activeTabId,
      ) as IFeature) ?? features[0],
    [features, activeTabId],
  );

  return (
    <div className={styles.content}>
      <div className={styles.stage}>
        <div className={styles['phone-section']}>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              key={`phone-${activeFeature.id}`}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%', display: 'flex' }}
            >
              <PhoneMockup
                phoneMockupImage={activeFeature.phoneImage ?? ''}
                overlayImages={activeFeature.overlayImages}
                paperImage={activeFeature.paperImage}
                brightnessImage={activeFeature.brightnessImage}
                contrastImage={activeFeature.contrastImage}
                exportIcons={activeFeature.exportIcons}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles['introduction-section']}>
          <AnimatePresence mode="wait">
            <motion.div key={`introduction-${activeFeature.id}`}>
              <IntroductionBlock
                subTitle={activeFeature.subTitle}
                title={activeFeature.title}
                description={activeFeature.description}
                buttonText={activeFeature.buttonText}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { FeatureContent };
