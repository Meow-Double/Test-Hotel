import { useContext } from 'react';
import { Card, Filters, Typography } from './components';
import { ItemsProvider } from './context/ItemProvider';
import { SortContext, SortContextProvider } from './context/Sort/SortContext';
import { useGetItems } from './utils/api';

export const App = () => {

  const drop = useContext(SortContext)


  const { data } = useGetItems({
    config: {
      params: {
        _sort: drop ? drop : "price"
      }
    }
  });



  return (
    <div className='container'>
      <Typography variant='title36_bold' tag='h1' className='title'>
        Test task on hotels
      </Typography>
      <div className='inner'>
        <SortContextProvider >
          <ItemsProvider items={data?.data}>
            <Filters />
            <div className='items'>
              {data?.data.map((item) => <Card key={item.id} {...item} />)}
            </div>
          </ItemsProvider>
        </SortContextProvider>
      </div>
    </div>
  );
};
