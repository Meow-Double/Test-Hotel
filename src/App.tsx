import { Card, Typography } from './components';
import { useGetItems } from './utils/api';

export const App = () => {
  const { data } = useGetItems();

  return (
    <div className='container'>
      <Typography variant='title36_bold' tag='h1' className='title'>
        Test task on hotels
      </Typography>
      {data?.data.map((item) => (
        <Card key={item.id} {...item}/>
      ))}
    </div>
  );
};
