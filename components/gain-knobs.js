import Knob from "./knob";
import styles from "./gain-knobs.module.css"

export default function GainKnobs() {
  return (
    <div className={styles.gainKnobs}>
      <Knob first />
      <Knob />
    </div>
  );
}
