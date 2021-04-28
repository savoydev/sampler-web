import styles from "./smallButton.module.css";

export default function SmallButton(props) {
  return (
      <div
        className={styles.clickButton}
        style={{ backgroundColor: props.bgColor }}
      ></div>
  );
}
