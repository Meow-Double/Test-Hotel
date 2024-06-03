import { useState } from 'react';
import styles from './DropDown.module.css';

const items = ['by price', 'by title', 'by rating'];

export const DropDown = () => {
  const [active, setActive] = useState(false);
  const [indexItem, setIndexItem] = useState(0);

  const onClickItem = (index: number) => {
    setIndexItem(index);
    setActive(false);
  }

  return (
    <div className={styles.dropdown}>
      <span className={styles.active_item} onClick={() => setActive((prev) => !prev)}>{items[indexItem]}</span>
      {active && (
        <ul className={styles.list}>
          {items.map((item, index) => <li key={index} className={styles.item} onClick={() => onClickItem(index)}>{item}</li>)}
        </ul>
      )}
    </div>
  );
};
