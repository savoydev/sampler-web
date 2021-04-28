import MediumButtonWithTextLight from "./buttons/button-with-text-light";
import styles from "./pad-options.module.css";

export default function PadOptions() {
  return (
    <>
      <div className={`${styles.padOptions} ${styles.levels}`}>
        <div className={styles.buttons}>
          <MediumButtonWithTextLight text="Full Level" />
          <MediumButtonWithTextLight text="16 Levels" />
        </div>
      </div>
      <div className={`${styles.padOptions} ${styles.seqMute}`}>
        <div className={styles.buttons}>
          <MediumButtonWithTextLight text="Next Seq" />
          <MediumButtonWithTextLight text="Track Mute" />
        </div>
      </div>
    </>
  );
}
