import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import styles from './Card.module.css';
import BackgroundImage from '@/assets/city.jpg';
import StarImage from '@/assets/star.svg';

export const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={BackgroundImage} alt='background_hotel' />
      <div className={styles.content}>
        <div>
          <Typography variant='title36_bold' tag='h3' className={styles.title}>
            Hotel - Grand
          </Typography>
          <Typography variant='paragraph16_regular' tag='p' className={styles.country}>
            Canada - Quebec
          </Typography>
          <Typography variant='paragraph16_regular' tag='p' className={styles.price}>
            140$ / 24 hour
          </Typography>

          <Button variant='primary'>Go to checkout</Button>
        </div>
        <div>
          <div className={styles.stars}>
            <img className={styles.star} src={StarImage} alt='star' />
            <img className={styles.star} src={StarImage} alt='star' />
            <img className={styles.star} src={StarImage} alt='star' />
            <img className={styles.star} src={StarImage} alt='star' />
            <img className={styles.star} src={StarImage} alt='star' />
          </div>
          <Typography variant='paragraph24_semibold' tag='p'>5 / 5</Typography>
        </div>
      </div>
    </div>
  );
};
