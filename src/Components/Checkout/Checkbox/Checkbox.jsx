import { useState } from "react";
import styles from "./Checkbox.module.css";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkboxwithtextarea}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        ..Deliver it to your Car?
      </label>
      {isChecked && (
        <textarea
          className={styles.textarea}
          placeholder="Car color and plate number*"
        ></textarea>
      )}
    </div>
  );
};

export default Checkbox;
