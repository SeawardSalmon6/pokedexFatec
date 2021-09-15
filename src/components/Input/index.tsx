import React from "react";
import { MdSearch } from "react-icons/md"

/* Styles */
import styles from "./style.module.css";

/* Tipagem para herdar as props do Input */
type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <input type="text" {...props} />
      <MdSearch size={28} className={styles.icon} />
    </div>
  )
}

export default Input;
