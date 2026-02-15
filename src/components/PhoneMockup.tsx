import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { IPhoneMockupProps } from '@/types';
import styles from '@/styles/PhoneMockup.module.css';

const MOBILE_BREAKPOINT = 768;

const PhoneMockup = ({
  brightnessImage,
  contrastImage,
  exportIcons,
  paperImage,
  phoneMockupImage,
  overlayImages,
}: IPhoneMockupProps) => {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const paperBack = isMobile
    ? {
        initial: { y: 112, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '172px',
          height: '244px',
        },
      }
    : {
        initial: { y: 160, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: -30,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '246px',
          height: '349px',
        },
      };
  const paperMiddle = isMobile
    ? {
        initial: { y: 119, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: 35,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '190px',
          height: '270px',
        },
      }
    : {
        initial: { y: 170, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: 20,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '273px',
          height: '386px',
        },
      };
  const paperFront = isMobile
    ? {
        initial: { y: 126, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: 60,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '200px',
          height: '283px',
        },
      }
    : {
        initial: { y: 180, x: 0, scale: 0.85, opacity: 0 },
        animate: {
          y: 60,
          x: 0,
          scale: 1,
          opacity: 1,
          width: '289px',
          height: '409px',
        },
      };

  return (
    <div className={styles['phone-container']}>
      <motion.img
        src={phoneMockupImage}
        alt="Phone mockup"
        className={styles['phone-image']}
        initial={{ y: 80, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.2, ease: 'easeOut' },
        }}
        draggable={false}
      />

      {paperImage && (
        <>
          <motion.img
            src={paperImage}
            alt=""
            className={`${styles.paper} ${styles['paper-back']}`}
            initial={paperBack.initial}
            animate={paperBack.animate}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.15,
            }}
            draggable={false}
          />

          <motion.img
            src={paperImage}
            alt=""
            className={`${styles.paper} ${styles['paper-middle']}`}
            initial={paperMiddle.initial}
            animate={paperMiddle.animate}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.4,
            }}
            draggable={false}
          />

          <motion.img
            src={paperImage}
            alt=""
            className={`${styles.paper} ${styles['paper-front']}`}
            initial={paperFront.initial}
            animate={paperFront.animate}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.8,
            }}
            draggable={false}
          />
        </>
      )}

      {brightnessImage && (
        <motion.img
          src={brightnessImage}
          alt=""
          className={`${styles['side-slider']} ${styles['brightness-slider']}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut', delay: 0.2 }}
          draggable={false}
        />
      )}

      {contrastImage && (
        <motion.img
          src={contrastImage}
          alt=""
          className={`${styles['side-slider']} ${styles['contrast-slider']}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut', delay: 0.4 }}
          draggable={false}
        />
      )}

      {overlayImages?.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          className={`${styles.overlay} ${index === 0 ? styles['overlay-sign'] : styles['overlay-stamp']}`}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: -30 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
            delay: 0.25 + index * 0.1,
          }}
          draggable={false}
        />
      ))}

      {exportIcons?.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          className={`${styles['export-icon']} ${
            index === 0
              ? styles['export-arrow']
              : index === 1
                ? styles['export-pdf']
                : index === 2
                  ? styles['export-jpg']
                  : styles['export-txt']
          }`}
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
            delay: 0.25 + index * 0.12,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
};

export { PhoneMockup };
