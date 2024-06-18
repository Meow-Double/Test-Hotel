// import { Checkbox } from "../Checkbox/Checkbox";
import { DropDown } from '../DropDown/DropDown';

import styles from './Filters.module.css';

export const Filters = () => {
  return (
    <div className={styles.section}>
      {/* <Checkbox>for 24 hours</Checkbox>
        <Checkbox>for 72 hours</Checkbox> */}
      <DropDown />
    </div>
  );
};
