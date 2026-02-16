import { FC } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/shared/components/Button';
import styles from '@/styles/IntroductionBlock.module.css';
import type { IIntroductionBlockProps } from '@/types';

const IntroductionBlock: FC<IIntroductionBlockProps> = ({
  buttonHref = '#',
  buttonText,
  description,
  subTitle,
  title,
}: IIntroductionBlockProps) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2, ease: 'easeOut' } }}
    >
      <div className={styles['text-container']}>
        <div className={styles['title-section']}>
          {title && <span className={styles.title}>{title}</span>}
          <h2 className={styles['sub-title']}>{subTitle}</h2>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles['button-container']}>
        <Button variant="primary" href={buttonHref}>
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

export { IntroductionBlock };
