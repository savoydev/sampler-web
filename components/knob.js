import styles from "./knob.module.css";

export default function Knob(props) {
  return (
    <div
      className={`${styles.dial} ${props.first ? styles.first : styles.second}`}
    ></div>
  );
}
