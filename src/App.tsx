import { Card, Filters, Typography } from './components';
import { ItemsProvider } from './context/ItemProvider';
import { useGetItems } from './utils/api';

export const App = () => {
  const { data } = useGetItems({
    config: {
      params: {
        time: null
      }
    }
  });

  return (
    <div className='container'>
      <Typography variant='title36_bold' tag='h1' className='title'>
        Test task on hotels
      </Typography>
      <div className='inner'>
        <ItemsProvider items={data?.data}>
          <Filters />
          <div className='items'>{data?.data.map((item) => <Card key={item.id} {...item} />)}</div>
        </ItemsProvider>
      </div>

  
    </div>
  );
};
