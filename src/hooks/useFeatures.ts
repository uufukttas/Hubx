import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchFeatures } from '@/api/features';
import type { IFeature } from '@/types/types';

const useFeatures = (): UseQueryResult<IFeature[], Error> => {
  const FEATURES_QUERY_KEY = ['features'];

  return useQuery({
    queryKey: FEATURES_QUERY_KEY,
    queryFn: fetchFeatures,
    staleTime: 5 * 60 * 1000, // 5 mins for refetching.
  });
};

export { useFeatures };
