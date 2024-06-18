import { useQuery } from '@tanstack/react-query';

import { getItems } from '@/utils/api/requests/items';

export const useGetItems = (settings?: QuerySettings<typeof getItems>) =>
  useQuery({
    queryKey: ['getItems', settings],
    queryFn: () => getItems({ config: settings?.config }).then((res) => res),
    ...settings?.options
  });
