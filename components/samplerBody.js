import styles from "./samplerBody.module.css";

export default function SamplerBody({ children }) {
  return (
    <div className={styles.samplerWrap}>
      <div className={styles.samplerBody}>{children}</div>
    </div>
  );
}
