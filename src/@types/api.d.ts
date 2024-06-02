interface QuerySettings<Func = unknown> {
  config?: ApiRequestConfig;
  options?: Omit<
    import('@tanstack/react-query').UseQueryOptions<
      Awaited<ReturnType<Func>>,
      any,
      Awaited<ReturnType<Func>>,
      any
    >,
    'queryKey'
  >;
}

type Item = {
  id: number;
  title: string;
  country: string;
  city: string;
  rating: number;
  time: number;
  price: number;
};

type ItemResponse = Item[];
