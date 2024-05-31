import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import styles from './Card.module.css';
import BackgroundImage from "@/assets/city.jpg";

export const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={BackgroundImage} alt='background_hotel' />
      <div className={styles.content}>
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
    </div>
  );
};
