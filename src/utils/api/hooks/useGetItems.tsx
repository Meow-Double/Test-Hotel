import { getItems } from '@/api/items';
import { useQuery } from '@tanstack/react-query';

export const useGetItems = (settings?: QuerySettings<typeof getItems>) =>
  useQuery({
    queryKey: ['getItems'],
    queryFn: () => getItems({ config: settings?.config }).then((res) => res),
    ...settings?.options
  });
