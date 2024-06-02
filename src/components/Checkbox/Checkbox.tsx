import { ReactNode } from 'react';
import styles from './Checkbox.module.css';
import { Typography } from '../Typography/Typography';

interface CheckboxProps {
  children: ReactNode;
}

export const Checkbox = ({ children }: CheckboxProps) => (
  <label className={styles.label}>
    <input type='checkbox' className={styles.input} />
    <span className={styles.checkbox} />
    <Typography variant='paragraph20_medium' tag='p'>
      {children}
    </Typography>
  </label>
);
