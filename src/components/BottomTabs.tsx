import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  CIRCLE_SIZE,
  STROKE_WIDTH,
  RADIUS,
  CIRCUMFERENCE,
  ACTIVE_COLOR,
  INACTIVE_COLOR,
} from '@/constants/BottomBar';
import { Button } from '@/shared/components/Button';
import type { IBottomTabsProps, IFeature, IItem } from '@/types';
import styles from '@/styles/BottomTabs.module.css';

const BottomTabs: FC<IBottomTabsProps> = ({
  activeTabId,
  features,
  onChange,
}: IBottomTabsProps) => {
  const navItems: IItem[] = features.map((feature: IFeature) => ({
    id: feature.id,
    Icon: feature.Icon,
    label: feature.tabLabel,
  }));

  return (
    <nav className={styles.nav} role="tablist" aria-label="Features">
      {navItems.map((navItem: IItem) => {
        const active = navItem.id === activeTabId;
        const Icon = navItem.Icon;

        return (
          <Button
            active={active}
            className={`${styles['nav-button']} ${active ? styles.active : ''}`}
            key={navItem.id}
            role="tab"
            variant="tab"
            onClick={() => onChange(navItem.id)}
          >
            <div className={styles['icon-container']}>
              <svg
                className={styles['ring-container']}
                height={CIRCLE_SIZE}
                width={CIRCLE_SIZE}
              >
                <motion.circle
                  cx={CIRCLE_SIZE / 2}
                  cy={CIRCLE_SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke={ACTIVE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                  initial={{
                    strokeDasharray: CIRCUMFERENCE,
                    strokeDashoffset: CIRCUMFERENCE,
                  }}
                  animate={{
                    strokeDashoffset: active ? 0 : CIRCUMFERENCE,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  style={{
                    transformOrigin: 'center',
                    transform: 'rotate(-90deg)',
                  }}
                />
              </svg>
              {Icon && (
                <Icon
                  className={styles.icon}
                  color={active ? ACTIVE_COLOR : INACTIVE_COLOR}
                />
              )}
            </div>
            <span className={styles.label}>{navItem.label}</span>
          </Button>
        );
      })}
    </nav>
  );
};

export { BottomTabs };
