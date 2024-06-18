import { useContext, useState } from 'react';

import { SortContext } from '@/context/Sort/SortContext';

import styles from './DropDown.module.css';

const items = ['by price', 'by title', 'by rating'];

export const DropDown = () => {
  const { setActiveItem } = useContext(SortContext);

  const [active, setActive] = useState(false);
  const [indexItem, setIndexItem] = useState(0);

  const onClickItem = (index: number) => {
    setIndexItem(index);
    setActive(false);
    setActiveItem(indexItem);
  };

  return (
    <div className={styles.dropdown}>
      <span className={styles.active_item} onClick={() => setActive((prev) => !prev)}>
        {items[indexItem]}
      </span>
      {active && (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item} onClick={() => onClickItem(index)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
