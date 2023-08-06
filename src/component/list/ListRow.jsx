import styles from "./ListRow.module.css";

const ListCell = ({onClick, children }) => {
  return <tr className={styles.cell} onClick={onClick}>{children}</tr>;
};

export default ListCell;
