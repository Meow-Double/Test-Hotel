import BackgroundImage from '@/assets/city.jpg';
import StarImage from '@/assets/star.svg';

import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

import styles from './Card.module.css';

export const Card = ({ title, country, city, rating, price, time }: Item) => {
  const renderStar = (): JSX.Element[] => {
    return [...new Array(Number(rating))].map((_, index) => (
      <img key={index} className={styles.star} src={StarImage} alt='star' />
    ));
  };

  return (
    <div className={styles.card}>
      <img className={styles.img} src={BackgroundImage} alt='background_hotel' />
      <div className={styles.content}>
        <div>
          <Typography variant='title36_bold' tag='h3' className={styles.title}>
            {title}
          </Typography>
          <Typography variant='paragraph16_regular' tag='p' className={styles.country}>
            {country} - {city}
          </Typography>
          <Typography variant='paragraph16_regular' tag='p' className={styles.price}>
            {price}$ / {time} hour
          </Typography>

          <Button variant='primary'>Go to checkout</Button>
        </div>
        <div>
          <div className={styles.stars}>{renderStar()}</div>
          <Typography variant='paragraph24_semibold' tag='p'>
            {rating} / 5
          </Typography>
        </div>
      </div>
    </div>
  );
};
