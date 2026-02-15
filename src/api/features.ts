import FEATURES from '@/constants/Features/features.data';
import type { IFeature } from '@/types';

const fetchFeatures = (): Promise<IFeature[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FEATURES);
    }, 300);
  });
};

export { fetchFeatures };
