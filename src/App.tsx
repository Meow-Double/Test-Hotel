import { useContext } from 'react';

import { SortContext } from './context/Sort/SortContext';
import { useGetItems } from './utils/api';
import { Card, Filters, Typography } from './components';

const path = ['price', '-title', 'rating'];
export const App = () => {
  const { activeItem } = useContext(SortContext);

  const { data } = useGetItems({
    config: {
      params: {
        _sort: activeItem ? path[Number(activeItem)] : 'price'
      }
    }
  });

  return (
    <div className='container'>
      <Typography variant='title36_bold' tag='h1' className='title'>
        Test task on hotels
      </Typography>
      <div className='inner'>
        <Filters />
        <div className='items'>{data?.data.map((item) => <Card key={item.id} {...item} />)}</div>
      </div>
    </div>
  );
};
