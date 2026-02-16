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
        alt="Phone mockup"
        animate={{ y: 0, opacity: 1 }}
        className={styles['phone-image']}
        draggable={false}
        exit={{ opacity: 0 }}
        initial={{ y: 80, opacity: 1 }}
        src={phoneMockupImage}
        transition={{
          y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
          opacity: { duration: 0.2, ease: 'easeOut' },
        }}
      />

      {paperImage && (
        <>
          <motion.img
            alt="Paper back"
            animate={paperBack.animate}
            className={`${styles.paper} ${styles['paper-back']}`}
            draggable={false}
            exit={{ opacity: 0 }}
            initial={paperBack.initial}
            src={paperImage}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.15,
            }}
          />

          <motion.img
            alt="Paper middle"
            animate={paperMiddle.animate}
            className={`${styles.paper} ${styles['paper-middle']}`}
            draggable={false}
            exit={{ opacity: 0 }}
            initial={paperMiddle.initial}
            src={paperImage}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.4,
            }}
          />

          <motion.img
            alt="Paper front"
            animate={paperFront.animate}
            className={`${styles.paper} ${styles['paper-front']}`}
            draggable={false}
            exit={{ opacity: 0 }}
            initial={paperFront.initial}
            src={paperImage}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: 0.8,
            }}
          />
        </>
      )}

      {brightnessImage && (
        <motion.img
          alt="Brightness slider"
          animate={{ opacity: 1 }}
          className={`${styles['side-slider']} ${styles['brightness-slider']}`}
          draggable={false}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          src={brightnessImage}
          transition={{ duration: 0.25, ease: 'easeOut', delay: 0.2 }}
        />
      )}

      {contrastImage && (
        <motion.img
          alt="Contrast slider"
          animate={{ opacity: 1 }}
          className={`${styles['side-slider']} ${styles['contrast-slider']}`}
          draggable={false}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          src={contrastImage}
          transition={{ duration: 0.25, ease: 'easeOut', delay: 0.4 }}
        />
      )}

      {overlayImages?.map((src, index) => (
        <motion.img
          alt="Overlay image"
          animate={{ opacity: 1, scale: 1, y: -30 }}
          className={`${styles.overlay} ${index === 0 ? styles['overlay-sign'] : styles['overlay-stamp']}`}
          draggable={false}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          key={src}
          src={src}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
            delay: 0.25 + index * 0.1,
          }}
        />
      ))}

      {exportIcons?.map((src, index) => (
        <motion.img
          alt="Export icon"
          animate={{ y: 0, opacity: 1, scale: 1 }}
          className={`${styles['export-icon']} ${
            index === 0
              ? styles['export-arrow']
              : index === 1
                ? styles['export-pdf']
                : index === 2
                  ? styles['export-jpg']
                  : styles['export-txt']
          }`}
          draggable={false}
          exit={{ opacity: 0 }}
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          key={src}
          src={src}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
            delay: 0.25 + index * 0.12,
          }}
        />
      ))}
    </div>
  );
};

export { PhoneMockup };
