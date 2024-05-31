import { Card, Typography } from './components';

export const App = () => {
  return (
    <div className='container'>
      <Typography variant="title36_bold" tag='h1' className="title">Test task on hotels</Typography>
      <div>
        <Card />
      </div>
    </div>
  );
};
