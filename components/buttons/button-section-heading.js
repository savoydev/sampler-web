import styles from "./button-section-heading.module.css";

export default function ButtonSectionHeading({ headingText }) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.line}></div>
      <div>{headingText}</div>
      <div className={styles.line}></div>
    </div>
  );
}
